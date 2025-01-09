function Page6() {
  return (
    <div className="h-screen p-7 relative">
      <div className="h-full w-full relative rounded-[50px] p-12 bg-black shadow-2xl shadow-gray-700 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/1080p/mp4/file.mp4"
        />
        
        {/* Content */}
        <div className="absolute left-24 bottom-12 z-10">
          <h1 className="text-[48vh] font-bebas uppercase text-white">About</h1>
        </div>
      </div>
    </div>
  );
}

export default Page6;