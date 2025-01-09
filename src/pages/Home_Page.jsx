import { useRef, useState } from "react";
import Anzo from "../assets/ANZO.avif";
import QLogo from "../assets/Q Logo.avif";
import Home_Page_BottomText from "../components/Home_Page_BottomText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Tilt_Text from "../components/Tilt_Text";
// import Tilt_Text from "../components/Tilt_Text";

function Home_Page() {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);


  const mouseMoving = (e) => {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/30);
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20)
    //console.log(e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)
  };

  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:1,
      ease: "power4.out"
    })
  },[xVal,yVal])

  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="bg-white h-screen p-7 relative"
    >
      <div
        id="homePage-in"
        style={{ backgroundImage: `url(${Anzo})` }}
        className="h-full w-full relative rounded-[50px] p-12 bg-black bg-cover shadow-xl shadow-gray-700"
      >
        <img className="h-24 " src={QLogo} alt="Logo" />
        {/* <Tilt_Text/> */}
        <Tilt_Text tiltRef={tiltRef}/>
        <Home_Page_BottomText />
      </div>
    </div>
  );
}

export default Home_Page;
