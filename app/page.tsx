import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Cabinet from '@/components/Cabinet';
import Services from '@/components/Services';
import Custom from '@/components/Custom';
import Process from '@/components/Process';
import Partnership from '@/components/Partnership';
import Security from '@/components/Security';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAFCFF]">
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <Solution />
      <Cabinet />
      <Services />
      <Custom />
      <Process />
      <Partnership />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
