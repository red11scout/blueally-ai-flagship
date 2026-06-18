import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Stakes } from "@/components/sections/stakes";
import { FailureModes } from "@/components/sections/failure-modes";
import { Method } from "@/components/sections/method";
import { Principle } from "@/components/sections/principle";
import { ValueReadinessMatrix } from "@/components/sections/matrix";
import { Epoch } from "@/components/sections/epoch";
import { Workshop } from "@/components/sections/workshop";
import { Calculator } from "@/components/sections/calculator";
import { Offerings } from "@/components/sections/offerings";
import { Proof } from "@/components/sections/proof";
import { WhyBlueAlly } from "@/components/sections/why-blueally";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/footer";
import { AIChat } from "@/components/ai-chat";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stakes />
        <FailureModes />
        <Method />
        <Principle />
        <ValueReadinessMatrix />
        <Epoch />
        <Workshop />
        <Calculator />
        <Offerings />
        <Proof />
        <WhyBlueAlly />
        <FinalCta />
      </main>
      <Footer />
      <AIChat />
    </>
  );
}
