'use client';

import { useEffect } from 'react';
import { animate } from 'motion';
import dynamic from 'next/dynamic';
import BackToTop from '@/components/backToTop';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Preloader from '@/components/preloader';
import About from '@/components/about';
import BlogList from '@/components/blogs/blogList';
import Brands from '@/components/brands';
import Hero from '@/components/hero';
import Marquee from '@/components/marquee';
import Portfolio from '@/components/portfolio';
import Pricing from '@/components/pricing';
import Services from '@/components/services/services';
import Skills from '@/components/skills';
import Testimonial from '@/components/testimonial';

export default function Home() {
  useEffect(() => {
    // Initialize WOW.js if available
    if (typeof window !== 'undefined') {
      // Dynamically import WOW.js to avoid SSR issues
      import('wowjs').then((WOWModule) => {
        const WOW = WOWModule.default;
        if (WOW) {
          window.wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 100,
            mobile: true,
            live: true
          });
          window.wow.init();
        }
      }).catch(err => console.log('WOW.js not loaded:', err));
    }

    // Animation logic from the original RootLayout
    const fadeInUp = document.querySelectorAll(".fadeInUp");
    const fadeInLeft = document.querySelectorAll(".fadeInLeft");
    const fadeInRight = document.querySelectorAll(".fadeInRight");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const x = entry.target.getAttribute("data-wow-delay");
            animate(
              entry.target,
              {
                transform: "translateY(0)",
                opacity: 1,
                visibility: "visible",
              },
              {
                duration: 0.6,
                delay: x ? parseFloat(x) : 0,
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeInUp.forEach((box) => {
      animate(box, {
        transform: "translateY(20px)",
        opacity: 0,
        visibility: "hidden",
      });
      observer.observe(box);
    });

    fadeInLeft.forEach((box) => {
      animate(box, {
        transform: "translateX(-20px)",
        opacity: 0,
        visibility: "hidden",
      });
      observer.observe(box);
    });

    fadeInRight.forEach((box) => {
      animate(box, {
        transform: "translateX(20px)",
        opacity: 0,
        visibility: "hidden",
      });
      observer.observe(box);
    });

    return () => {
      fadeInUp.forEach((box) => observer.unobserve(box));
      fadeInLeft.forEach((box) => observer.unobserve(box));
      fadeInRight.forEach((box) => observer.unobserve(box));
    };
  }, []);

  return (
    <>
      <Preloader />
      <BackToTop />
      <Header />
      <main>
        <Hero />
        <Skills />
        <About />
        <Portfolio />
        <Services />
        <Testimonial />
        <Marquee />
        <Pricing />
        <Brands />
        <BlogList />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
