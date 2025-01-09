function Page7() {
  return (
    <div className="h-screen p-7 relative">
      <div
        style={{
          backgroundImage: `url(${"https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1861,h_890,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg"})`,
        }}
        className="h-full w-full relative rounded-[50px] p-12 bg-black bg-cover shadow-2xl shadow-gray-700"
      >
        <div className="w-full h-screen relative py-16">
          <div className="absolute w-full flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-9xl font-bebas text-gray-400">HOW</h1>
              <h1 className="text-9xl font-bebas text-white">CAN</h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-9xl font-bebas text-white">I HELP</h1>
              <h1 className="text-9xl font-bebas text-white">YOU</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page7;
