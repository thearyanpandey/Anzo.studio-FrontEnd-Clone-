import { useGSAP } from '@gsap/react';
import LaptopImg from '../assets/Laptop.avif';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Page3() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Animate each line from center
    gsap.from(".line", {
      scaleX: 0,
      duration: 1,
      stagger: 0.2,
      transformOrigin: "center center", // Changed to center for bidirectional growth
      scrollTrigger: {
        trigger: ".lines-container",
        start: "top center",
        end: "bottom center",
        scrub: true,
        //markers: true, // Uncomment to see trigger points
      }
    });
  }, []);

  return (
    <div className="h-screen relative flex items-center justify-center">
      <img 
        className='absolute h-[80vh] z-20' 
        src={LaptopImg} 
        alt="Laptop IMG" 
      />
      <video 
        autoPlay 
        muted 
        loop 
        className='w-[50vw] h-[80vh] z-10 object-cover' 
        src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/720p/mp4/file.mp4"
      />
      <div className="lines-container absolute w-full h-full z-0">
        <div className="line absolute h-[1.5px] top-[30%] left-1/2 -translate-x-1/2 w-3/5 bg-black"></div>
        <div className="line absolute h-[1.5px] top-[50%] left-1/2 -translate-x-1/2 w-2/3 bg-black"></div>
        <div className="line absolute h-[1.5px] top-[70%] left-1/2 -translate-x-1/2 w-4/5 bg-black"></div>
      </div>
    </div>
  );
}

export default Page3;