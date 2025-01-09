

function Page4() {
  return (
    <div className="h-screen p-7 relative">
      <div
        style={{
          backgroundImage: `url(${"https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1861,h_890,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg"})`,
        }}
        className="h-full w-full relative rounded-[50px] p-12 bg-black bg-cover shadow-2xl shadow-gray-700"
      >
        <div className="absolute left-24 top-48 ">
          <div>
            <h1 className="text-9xl font-archivo text-white">WHAT</h1>
            <h1 className="text-9xl font-archivo text-white">I DO</h1>
          </div>
          <div className="absolute left-2 top-64">
            <h4 className="text-2xl text-white font-mono">
              I DESIGN AND DEVELOP
            </h4>
            <h4 className="text-3xl text-white font-News">
              MODERN, IMPACTFUL AND LUXURIOUS
            </h4>
            <h4 className="text-2xl text-white font-mono">
              websites that seamlessly bridge your goals with needs of your
              clients.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;
