import Pic from "../assets/me.png";

export default function Index() {
  return (
    <div className="bg-slate-900 h-full">
      <header className="md:flex mx-6  pt-12 md:pt-0 justify-center items-center h-2/3">
        <div className="md:border-r-4 md:border-gray-100 flex justify-center mb-12 md:mb-0">
          <img
            src={Pic}
            alt="Profile Picture"
            className="rounded-full border-4 border-gray-100 md:mr-10"
          />
        </div>
        <div className="flex flex-col md:ml-10">
          <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-500">
            Hi, I'm Fabian
          </h1>
          <span className="text-gray-100 text-lg mt-2">Software Developer</span>
        </div>
      </header>
    </div>
  );
}
