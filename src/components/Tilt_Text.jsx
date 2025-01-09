
function Tilt_Text({tiltRef}) {
  return (
    <div id="tiltDiv" ref={tiltRef} className="mt-32 relative">
          <h1 className="text-[6.5vw] text-white leading-[4vw] uppercase font-bebas">
            I am <span className="text-black">DARK MODE</span>™
          </h1>
          <h1 className="text-[12vw]  text-white leading-[11vw] font-bebas ">
            Designer
          </h1>
          <h1 className="text-[6.5vw] text-white leading-[4vw] uppercase font-bebas">
            To Hire
          </h1>
        </div>
  )
}

export default Tilt_Text
