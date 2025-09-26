import Image from "next/image";

export default function Home() {
  return (
    <section className="relative flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-4 text-center">

      <div
        className="absolute -z-20 -top-10 w-[600px] h-[600px] rounded-full blur-3xl animate-[glowPulse_6s_ease-in-out_infinite]"
        style={{
          background: "radial-gradient(circle at center, rgba(198, 165, 255, 0.34), rgba(255,255,200,0) 70%)"
        }}
      />
      <Image
        src="/images/homeicon.png"
        alt="home icon"
        width={500}
        height={500}
        className="absolute -z-10 opacity-75 top-7 animate-[floatScale_4s_ease-in-out_infinite]"
      />

      <h1 className="mb-3 text-3xl font-thin sm:text-7xl">
        Quantum Archive
      </h1>
      <p className="text-lg text-white-300  opacity-90">
        A Personal Archive of Quantum Machine Learning Studies.
      </p>
      <a
        href="https://github.com/your-username/your-repo"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex rounded-lg bg-white/20 px-5 py-1.5  font-medium text-white  hover:bg-white/30 transition"
      >
        Github
      </a>
    </section>
  );
}
