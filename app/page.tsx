import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <section>picture & about me page??</section>
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
