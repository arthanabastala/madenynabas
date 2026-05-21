/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Editorial } from './components/Editorial';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-main selection:bg-accent-lime/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Editorial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
