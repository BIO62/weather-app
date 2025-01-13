function App() {
  return (
    <div className="App relative w-[1600px] h-[1200px] flex border-4 border-indigo-500/100">
      <div className="rounded-tl-none rounded-tr-[50px] rounded-br-none rounded-bl-none bg-[#F3F4F6] shrink-0 w-[800px] h-[1200px] relative">
        <div className="absolute w-[414px] h-[828px] rounded-[48px] bg-white/75 backdrop-blur-[12px] flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-black">Centered Content</p>
        </div>
        <div></div>
      </div>

      <svg
        className="shrink-0 w-[800px] h-[1200px]"
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="1200"
        viewBox="0 0 800 1200"
        fill="none"
      >
        <path
          d="M800 0H0V497C0 510.807 11.4776 521.604 24.5822 525.953C55.6155 536.25 78 565.511 78 600C78 634.489 55.6155 663.75 24.5822 674.047C11.4776 678.396 0 689.193 0 703V1150C0 1177.61 22.3858 1200 50 1200H800V0Z"
          fill="#0F141E"
        />
      </svg>

      <div className="absolute w-[1340px] h-[1340px] shrink-0 rounded-[940px] border border-[#FFF] opacity-0.08 flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-[940px] h-[940px] shrink-0 rounded-[940px] border border-[#FFF] opacity-0.08 flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-[540px] h-[540px] shrink-0 rounded-[940px] border border-[#FFF] opacity-0.1 flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-[340px] h-[340px] shrink-0 rounded-[940px] border border-[#FFF] opacity-0.1 flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="Main ">
        <div></div>
      </div>
    </div>
  );
}

export default App;
