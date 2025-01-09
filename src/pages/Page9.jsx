import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Star from '../assets/Start Img.avif';

gsap.registerPlugin(ScrollTrigger);

function Page9() {
  const starRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Create the parallax effect
    gsap.to(starRef.current, {
      y: -500, // Adjust this value to control how far the star moves up
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        //markers: true,
        scrub: 1, // Smooth scrolling effect
        pin: true, // Don't pin the container
        invalidateOnRefresh: true,
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="h-screen" ref={containerRef}>
      <div
        style={{
          backgroundImage: `url(${"https://static.wixstatic.com/media/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg/v1/fill/w_1899,h_1461,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg"})`,
          backgroundAttachment: "fixed", // This makes the background stay fixed while scrolling
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-full w-full z-0 bg-black shadow-2xl shadow-gray-700"
      >
        <div 
          ref={starRef}
          className="absolute object-cover z-10"
        >
          <img src={Star} alt="Star" />
        </div>
      </div>
    </div>
  );
}

export default Page9;