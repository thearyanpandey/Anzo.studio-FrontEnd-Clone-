import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home_Page_BottomText() {
  useGSAP(function(){
    gsap.to("#banner img",{
      rotate:360,
      duration:5,
      repeat:-1,
      ease:"linear"
    })
  })

  return (
    <div className="absolute left-0 px-20 py-16 flex items-end justify-between bottom-0 w-full ">
      <div>
        <h2 className="text-2xl font-bebas text-white">BRAND DESIGN | WEBSITE DESIGN</h2>
        <h3 className="text-2xl font-bebas text-gray-400">BESPOKE FREELANCE</h3>
      </div>
      <div id="banner">
        <img className="mb-10" src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
        <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt="" />
      </div>
    </div>
  );
}

export default Home_Page_BottomText;
