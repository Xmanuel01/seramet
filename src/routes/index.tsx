import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/nuru/Header";
import { Hero } from "@/components/nuru/Hero";
import { Products } from "@/components/nuru/Products";
import { Why } from "@/components/nuru/Why";
import { Enkai } from "@/components/nuru/Enkai";
import { Nommo } from "@/components/nuru/Nommo";
import { Ide } from "@/components/nuru/Ide";
import { Research } from "@/components/nuru/Research";
import { Origin } from "@/components/nuru/Origin";
import { CTA } from "@/components/nuru/CTA";
import { Footer } from "@/components/nuru/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seramet — Intelligence for a new era" },
      {
        name: "description",
        content:
          "Seramet builds AI systems, developer tools, and programming infrastructure: Enkai (language), Nommo (AI), and Seramet IDE.",
      },
      { property: "og:title", content: "Seramet — Intelligence for a new era" },
      {
        property: "og:description",
        content: "Enkai language, Nommo AI, and Seramet IDE — tools for the next generation of intelligent software.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Products />
        <Why />
        <Enkai />
        <Nommo />
        <Ide />
        <Research />
        <Origin />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
