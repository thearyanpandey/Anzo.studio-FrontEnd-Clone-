import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Page5() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".rotateText2", {
      transform: "rotateX(-50deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText2",
        //markers: true,
        start: "top 60%",
        end: "top -250%",
        scrub: 1,
      },
    });
  });

  return (
    <div id="page5" className="bg-white text-black p-40 text-center">
      <div className="rotateText2 mt-40">
        <h1 className="text-[28vw] text-black font-bebas uppercase leading-[22vw] mr-6">
          HELPING
        </h1>
      </div>
      <div className="rotateText2">
        <h1 className="text-[28vw] text-black font-bebas uppercase leading-[22vw]">
          MY
        </h1>
      </div>
      <div className="rotateText2">
        <h1 className="text-[28vw] text-black font-bebas uppercase leading-[22vw]">
          Clients
        </h1>
      </div>
      <div className="rotateText2">
        <h1 className="text-[28vw] text-black font-bebas uppercase leading-[22vw]">
          Achieve
        </h1>
      </div>
      <div className="rotateText2">
        <h1 className="text-[28vw] text-black font-bebas uppercase leading-[22vw]">
          Their
        </h1>
      </div>
      <div className="rotateText2">
        <h1 className="text-[28vw] text-black font-bebas uppercase leading-[22vw]">
          Dreams
        </h1>
      </div>
    </div>
  );
}

export default Page5;
