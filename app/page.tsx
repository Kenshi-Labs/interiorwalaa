import { HeroBanner } from "@/components/common/HeroBanner";
import { FooterSubsection } from "@/components/partials/Footer";
import { Header } from "@/components/partials/Header";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroBanner
        title="Bring Serenity "
        subtitle="To Your Place With"
        brandName="INTERIORWALAA"
        description="Fast, reliable interior design services."
        backgroundImage="https://interiorwalaa.smepulse.in/modern-luxury-living-room-interior-black-sofa-with-dark-concrete-wall%201.png"
      />
      <FooterSubsection />
    </div>
  );
}
