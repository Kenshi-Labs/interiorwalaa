import { HeroBanner } from "@/components/common/HeroBanner";
import { FooterSubsection } from "@/components/partials/Footer";
import { Header } from "@/components/partials/Header";


export default function Home() {
  return (
    <div className="bg-[var(--color-white-alt)]">
      <Header />
      <HeroBanner
        backgroundImage="https://interiorwalaa.smepulse.in/homebannerbg.png"
      />
      <FooterSubsection />
    </div>
  );
}
