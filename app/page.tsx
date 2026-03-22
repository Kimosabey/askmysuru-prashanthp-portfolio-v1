import Preloader from "@/components/sections/Preloader";
import IdentityHero from "@/components/sections/IdentityHero";
import ShowreelHook from "@/components/sections/ShowreelHook";
import VisionaryStatement from "@/components/sections/VisionaryStatement";
import BentoArchive from "@/components/sections/BentoArchive";
import BTSArsenal from "@/components/sections/BTSArsenal";
import AuthorityImpact from "@/components/sections/AuthorityImpact";
import ContactSynergy from "@/components/sections/ContactSynergy";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative bg-background w-full min-h-screen overflow-hidden">
      <Preloader />
      
      <div id="scroll-container" className="relative w-full z-10">
        <IdentityHero />
        <ShowreelHook />
        <VisionaryStatement />
        <BentoArchive />
        <BTSArsenal />
        <AuthorityImpact />
        <ContactSynergy />
        <Footer />
      </div>
    </main>
  );
}
