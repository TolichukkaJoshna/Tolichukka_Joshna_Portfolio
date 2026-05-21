import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Education } from "@/components/portfolio/Education";
import { Interests } from "@/components/portfolio/Interests";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tolichukka Joshna — BTech CSE | Full Stack & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Tolichukka Joshna, BTech Computer Science student at QIS College — Full Stack Developer, AI Enthusiast. CGPA 8.92.",
      },
      { property: "og:title", content: "Tolichukka Joshna — Developer Portfolio" },
      { property: "og:description", content: "Full Stack Developer & AI Enthusiast. BTech CSE, CGPA 8.92." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
