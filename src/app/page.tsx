import { Credits } from "@/components/Credits";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InfoSection } from "@/components/InfoSection";
import { Quiz } from "@/components/Quiz";
import { TurtleViewer } from "@/components/TurtleViewer";
import { educationalContent } from "@/data/educationalContent";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TurtleViewer />
        {educationalContent.map((section, index) => (
          <InfoSection key={section.id} section={section} index={index} />
        ))}
        <Quiz />
        <Credits />
      </main>
      <Footer />
    </>
  );
}
