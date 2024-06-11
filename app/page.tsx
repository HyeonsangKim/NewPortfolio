import ParticlesCanvas from "@/components/ParticleCanvas";

export default function Home() {
  return (
    <div>
      <ParticlesCanvas />
      <h1 style={{ position: "relative", zIndex: 1 }}>Welcome to Next.js!</h1>
    </div>
  );
}
