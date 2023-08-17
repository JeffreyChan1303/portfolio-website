import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import TempContent from '@/components/TempContent';

export default function Home() {
  return (
    <main className="overflow-hidden z-0">
      <Header />
      <Hero />
      <TempContent />
      {/* <section>picture & about me page??</section>
      <Skills />
      <Experience /> */}
      {/* <Projects /> */}
      <Footer />
    </main>
  );
}
