import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Methodology from "@/sections/Methodology";
import Feedbacks from "@/sections/Feedbacks";
import Faq from "@/sections/Faq";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />

      <About />

      <Methodology />

      <Feedbacks />

      <Faq />

      <Footer />
    </main>
  );
}
