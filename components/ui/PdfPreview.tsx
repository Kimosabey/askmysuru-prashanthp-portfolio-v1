"use client";

import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Loader2, Maximize2, AlertCircle } from "lucide-react";

// Local worker configuration to resolve CORS and protocol issues
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

interface PdfPreviewProps {
  isOpen?: boolean;
  onClose?: () => void;
  fileUrl: string;
  isEmbedded?: boolean;
}

export default function PdfPreview({ isOpen, onClose, fileUrl, isEmbedded = false }: PdfPreviewProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [direction, setDirection] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setPageNumber(prev => {
      const next = prev + newDirection;
      if (next < 1) return 1;
      if (next > numPages) return numPages;
      return next;
    });
  };

  // Sync isFullscreen with isOpen if not embedded
  useEffect(() => {
    if (!isEmbedded && isOpen) {
      setIsFullscreen(true);
    } else if (!isEmbedded && !isOpen) {
      setIsFullscreen(false);
    }
  }, [isOpen, isEmbedded]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoadError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error("PDF Load Error:", error);
    setLoadError(error.message || "Failed to load PDF document.");
  }

  // Handle responsive width for the PDF Page
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Use a safer padding calculation
        const padding = window.innerWidth < 768 ? 24 : 48;
        // Cap the maximum width to 800px for a better document "feel"
        const newWidth = Math.min(800, Math.max(280, entry.contentRect.width - padding));
        setContainerWidth(newWidth);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [isEmbedded, isFullscreen]);

  const closeHandler = () => {
    if (isEmbedded) {
      setIsFullscreen(false);
    } else if (onClose) {
      onClose();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const ViewerContent = (
    <div 
      ref={containerRef}
      className={`relative flex flex-col items-center w-full ${!isEmbedded || isFullscreen ? "h-full justify-center overflow-hidden" : "mt-12"}`}
    >
      <div 
        className={`relative w-full ${
          isEmbedded && !isFullscreen 
            ? "max-w-4xl mx-auto glass-card-elevated border-white/5 bg-[#0a0a0c] shadow-2xl h-[450px] md:h-[750px] p-4 md:p-12 mb-12 flex flex-col items-center" 
            : "glass-card-elevated p-1 md:p-2 bg-white/5 border-white/10 shadow-[0_0_100px_rgba(32,111,192,0.1)] max-h-[85vh]"
        } hide-scrollbar rounded-2xl flex flex-col items-center relative group`}
        style={{ boxShadow: "inset 0 0 50px rgba(0,0,0,0.5)" }}
      >
        {loadError ? (
          <div className="flex flex-col items-center justify-center py-20 px-10 text-center gap-4">
            <AlertCircle className="text-destructive" size={48} />
            <h4 className="font-headline text-xl text-primary">Preview Unavailable</h4>
            <p className="font-body text-sm text-primary-dim max-w-xs">{loadError}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-accent text-primary rounded-sm font-label text-[10px] uppercase tracking-widest"
            >
              Retry Connection
            </button>
          </div>
        ) : (
          <>
            <Document
              file={fileUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex flex-col items-center justify-center py-32 md:py-48 w-full gap-6">
                  <Loader2 className="animate-spin text-accent" size={48} />
                  <span className="font-label text-[10px] tracking-[0.4em] uppercase text-primary-dim animate-pulse">Synchronizing Data...</span>
                </div>
              }
              className="flex flex-col items-center w-full h-full justify-center"
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={pageNumber}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="w-full flex justify-center"
                >
                  <Page 
                    pageNumber={pageNumber} 
                    width={containerWidth || 300}
                    renderTextLayer={true}
                    renderAnnotationLayer={false}
                    className="shadow-2xl rounded-lg overflow-hidden select-none"
                  />
                </motion.div>
              </AnimatePresence>
            </Document>

            {/* Quick Navigation Overlays (Desktop Only) */}
            {numPages > 1 && !isFullscreen && (
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => paginate(-1)}
                  disabled={pageNumber <= 1}
                  className="p-3 bg-surface/80 backdrop-blur-md rounded-full text-primary hover:bg-accent hover:text-white transition-all pointer-events-auto disabled:opacity-0"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => paginate(1)}
                  disabled={pageNumber >= numPages}
                  className="p-3 bg-surface/80 backdrop-blur-md rounded-full text-primary hover:bg-accent hover:text-white transition-all pointer-events-auto disabled:opacity-0"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </>
        )}

        {/* Floating Maximize Button (only in embedded view) */}
        {isEmbedded && !isFullscreen && !loadError && numPages > 0 && (
          <button 
            onClick={() => setIsFullscreen(true)}
            className="absolute top-6 right-6 p-2 bg-surface/50 backdrop-blur-md border border-border text-primary rounded-full hover:bg-accent transition-all z-20 shadow-lg"
            title="View Fullscreen"
          >
            <Maximize2 size={18} />
          </button>
        )}
      </div>

      {/* Progress Track & Mobile Nav */}
      {isEmbedded && !isFullscreen && numPages > 1 && (
        <div className="flex flex-col items-center gap-6 w-full max-w-xs mx-auto">
          <div className="flex items-center gap-8">
            <button
               onClick={() => paginate(-1)}
               disabled={pageNumber <= 1}
               className="p-2 border border-border rounded-full text-primary hover:bg-surface disabled:opacity-20 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex flex-col items-center">
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary mb-1">Slide</span>
              <span className="font-headline text-2xl italic text-accent font-bold">{pageNumber} <span className="text-primary-dim font-normal text-sm not-italic opacity-40">/ {numPages}</span></span>
            </div>

            <button
               onClick={() => paginate(1)}
               disabled={pageNumber >= numPages}
               className="p-2 border border-border rounded-full text-primary hover:bg-surface disabled:opacity-20 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="w-full h-1 bg-surface rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${(pageNumber / numPages) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      {/* Navigation Controls (Only for Paginated/Full-screen view) */}
      {isFullscreen && numPages > 1 && !loadError && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex items-center gap-6 bg-surface-elevated/80 backdrop-blur-md border border-border px-6 py-3 rounded-full shadow-cinematic z-[110] mx-auto"
        >
          <button
            disabled={pageNumber <= 1}
            onClick={() => paginate(-1)}
            className="text-primary disabled:opacity-20 hover:text-accent transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <span className="font-label text-[11px] tracking-[0.2em] text-primary whitespace-nowrap uppercase">
            PAGE <span className="text-accent font-bold">{pageNumber}</span> OF {numPages}
          </span>

          <button
            disabled={pageNumber >= numPages}
            onClick={() => paginate(1)}
            className="text-primary disabled:opacity-20 hover:text-accent transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      )}
    </div>
  );

  return (
    <AnimatePresence>
      {(isFullscreen || (!isEmbedded && isOpen)) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/98 backdrop-blur-xl p-4 md:p-8"
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            onClick={closeHandler}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] p-3 bg-surface border border-border rounded-full text-primary hover:bg-accent hover:border-accent transition-colors shadow-cinematic"
          >
            <X size={24} strokeWidth={1.5} />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full h-full flex items-center justify-center"
          >
            {ViewerContent}
          </motion.div>
        </motion.div>
      )}

      {isEmbedded && !isFullscreen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          {ViewerContent}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
