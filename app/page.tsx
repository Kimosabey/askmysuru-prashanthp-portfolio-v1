"use client";

import Preloader from "@/components/sections/Preloader";
import IdentityHero from "@/components/sections/IdentityHero";
import ShowreelHook from "@/components/sections/ShowreelHook";
import VisionaryStatement from "@/components/sections/VisionaryStatement";
import AuthorityImpact from "@/components/sections/AuthorityImpact";
import BentoArchive from "@/components/sections/BentoArchive";
import AboutConsensus from "@/components/sections/AboutConsensus";
import CinematographyShowcase from "@/components/sections/CinematographyShowcase";
import UnitCategorization from "@/components/sections/UnitCategorization";
import RecognitionSpotlight from "@/components/sections/RecognitionSpotlight";
import ClientEcosystem from "@/components/sections/ClientEcosystem";
import BTSArsenal from "@/components/sections/BTSArsenal";
import PhotoGallery from "@/components/sections/PhotoGallery";
import SocialConnectivity from "@/components/sections/SocialConnectivity";
import ContactSynergy from "@/components/sections/ContactSynergy";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { useScroll, useVelocity, useSpring, useTransform, motion } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skew = useTransform(smoothVelocity, [-1000, 1000], [-1, 1]);

  return (
    <main className="relative bg-background w-full min-h-screen overflow-hidden">
      <Preloader />
      
      <motion.div id="scroll-container" style={{ skewY: skew }} className="relative w-full z-10 origin-center">
        <TracingBeam className="px-6">
          <IdentityHero />
          <ShowreelHook />
          <VisionaryStatement />
          <AboutConsensus />
          <UnitCategorization />
          <RecognitionSpotlight />
          <CinematographyShowcase />
          <PhotoGallery />
          <SocialConnectivity />
          <AuthorityImpact />
          <BentoArchive />
          <ClientEcosystem />
          <BTSArsenal />
          <ContactSynergy />
        </TracingBeam>
      </motion.div>
    </main>
  );
}
