import ParticlesCanvas from "@/components/ParticleCanvas";
import { Link } from "react-scroll";

export default function Main() {
  return (
    //h-screen bg-gray-100 flex items-center justify-center
    <div id="home" className="flex justify-center bg-backCol min-h-screen">
      <ParticlesCanvas />
      <div className="relative w-full h-screen flex flex-col justify-center items-center gap-2">
        <div>
          <span className="text-white text-4xl">Hello, I'm </span>
          <span className="text-blue-500 text-4xl">Hyeonsang Kim</span>
          <span className="text-white text-4xl">.</span>
        </div>
        <h1 className="text-white text-4xl">I'm a front end developer.</h1>
        <Link
          to="section1"
          smooth={true}
          duration={500}
          className="border-2 px-6 border-blue-500 p-2 mt-4 transform transition-transform duration-300 hover:scale-105  cursor-pointer"
        >
          <span className="text-blue-500">View my job expereinces ↓</span>
        </Link>
      </div>
    </div>
  );
}
