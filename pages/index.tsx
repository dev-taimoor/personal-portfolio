// pages/index.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white bg-white text-gray-900">
      <Head>
        <title>Taimoor Ahmad - Full Stack Web Developer</title>
        <meta name="description" content="Portfolio of Taimoor Ahmad, a passionate full stack web developer building modern and scalable web applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/taimoor.png" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />

    </div>
  );
}