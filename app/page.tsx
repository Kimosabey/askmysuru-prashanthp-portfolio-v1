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
import { useScroll } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  return (
    <main className="relative bg-background w-full min-h-screen overflow-hidden">
      <Preloader />
      
      <div id="scroll-container" className="relative w-full z-10 origin-center">
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
      </div>
    </main>
  );
}
