import ParticlesCanvas from "@/components/ParticleCanvas";
import { Element } from "react-scroll";

export default function Page1() {
  return (
    <Element name="section1">
      <section id="section1" className="section">
        <h1 className="text-white text-4xl font-bold">메인 페이지</h1>
        <p className="text-white mt-4">여기는 첫 번째 페이지입니다.</p>
      </section>
    </Element>
  );
}
