import { Header } from "@components/molecule"
import { Features, Hero, Pricing } from "@components/organism";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
