import { Header } from "@components/molecule"
import { Features, Hero, Pricing, Faq, Testimonials, Download, Footer } from "@components/organism";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}
