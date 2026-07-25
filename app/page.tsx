"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const codeBackground = [
    "01010101",
    "O(log n)",
    "Binary Search",
    "Graph Traversal",
    "Dynamic Programming",
    "class Engineer {}",
    "AI_Model.train()",
    "API → Database",
    "Neural Network",
    "System Design",
    "HashMap<Key,Value>",
    "while(true)",
    "const backend = true",
    "function optimize()",
    "TensorFlow",
    "Computer Vision",
    "REST API",
    "Cloud Infrastructure",
    "Distributed Systems",
  ];

  const fundamentals = [
    "DATA STRUCTURES",
    "MACHINE LEARNING",
    "SYSTEM DESIGN",
    "COMPUTER VISION",
    "ARTIFICIAL INTELLIGENCE",
    "DATABASE SYSTEMS",
    "CLOUD COMPUTING",
    "SOFTWARE ENGINEERING",
  ];

  function enterPortfolio() {
    setLeaving(true);

    setTimeout(() => {
      router.push("/home");
    }, 900);
  }

  return (
    <main
      className={`relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] text-white transition-all duration-700 ${
        leaving ? "scale-110 opacity-0" : "scale-100 opacity-100"
      }`}
    >

      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed z-50 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-150"
        style={{
          left: mouse.x - 160,
          top: mouse.y - 160,
        }}
      />


      {/* Cursor Center */}
      <div
        className="pointer-events-none fixed z-50 h-4 w-4 rounded-full border border-cyan-300 bg-cyan-300/40 shadow-[0_0_40px_12px_rgba(34,211,238,0.45)]"
        style={{
          left: mouse.x,
          top: mouse.y,
          transform: "translate(-50%,-50%)",
        }}
      />


      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#172554,transparent_45%)]" />


      {/* Engineering Fundamentals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {fundamentals.map((item, index) => (

          <span
            key={item}
            className="absolute animate-[float_16s_ease-in-out_infinite] font-mono text-xs text-cyan-300 opacity-[0.05]"
            style={{
              left: `${10 + index * 12}%`,
              top: `${15 + (index % 4) * 20}%`,
            }}
          >
            {item}
          </span>

        ))}

      </div>



      {/* Algorithm Grid */}
      <div
        className="absolute inset-0 opacity-20 bg-[linear-gradient(#334155_1px,transparent_1px),linear-gradient(90deg,#334155_1px,transparent_1px)] bg-[size:55px_55px]"
      />



      {/* Code Background */}
      <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-14 px-10 opacity-[0.07]">

        {codeBackground.map((item, index) => (

          <span
            key={index}
            className="animate-pulse font-mono text-sm text-cyan-300 md:text-base"
          >
            {item}
          </span>

        ))}

      </div>




      {/* Main Hero Content */}
      <section className="relative z-10 px-6 text-center max-w-5xl">


        <p className="mb-8 text-sm uppercase tracking-[0.55em] text-cyan-300">
          Software Engineering Portfolio
        </p>



        <h1
          className="bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Suparn Posina
        </h1>



        <h2
          className="mt-6 text-2xl font-semibold text-cyan-300 md:text-4xl"
        >
          Computer Science Student & Software Engineer
        </h2>




        <p
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl"
        >
          Computer Science student at San José State University passionate
          about software engineering, backend systems, artificial intelligence,
          machine learning, and building scalable software applications.
          Experienced with Java, Python, TypeScript, databases, and modern
          development technologies.
        </p>





        <button
          onClick={enterPortfolio}
          className="group mt-12 rounded-xl border border-cyan-300/50 bg-cyan-300/10 px-12 py-5 text-lg font-semibold text-cyan-300 backdrop-blur-md transition duration-500 hover:scale-110 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
        >

          Enter Portfolio

          <span
            className="ml-3 inline-block transition duration-300 group-hover:translate-x-3"
          >
            →
          </span>

        </button>




        {/* SEO Content */}
        <div className="mx-auto mt-16 max-w-4xl text-left text-slate-400">


          <h2 className="text-2xl font-bold text-white">
            About My Work
          </h2>


          <p className="mt-4 leading-8">
            I focus on building reliable software systems using strong
            engineering principles. My interests include backend development,
            artificial intelligence, computer vision, distributed systems,
            databases, and scalable application design.
          </p>



          <h2 className="mt-8 text-2xl font-bold text-white">
            Technical Skills
          </h2>


          <p className="mt-4 leading-8">
            My technical experience includes Java, Python, TypeScript,
            JavaScript, React, Next.js, REST APIs, machine learning,
            data structures, algorithms, cloud computing, and full-stack
            software development.
          </p>




          <h2 className="mt-8 text-2xl font-bold text-white">
            Career Goals
          </h2>


          <p className="mt-4 leading-8">
            I am currently seeking Software Engineering internship
            opportunities where I can contribute to impactful projects,
            collaborate with engineering teams, and continue growing as a
            developer.
          </p>


        </div>




        <div className="mt-10 font-mono text-sm text-slate-500">
          AI • Algorithms • Backend Systems • Software Engineering
        </div>




        {/* Links */}
        <div className="mt-8 flex justify-center gap-8">

          <a
            href="https://github.com/oops408"
            target="_blank"
            className="text-cyan-300 hover:underline"
          >
            GitHub
          </a>


          <a
            href="https://www.linkedin.com/in/suparnp/"
            target="_blank"
            className="text-cyan-300 hover:underline"
          >
            LinkedIn
          </a>

        </div>


      </section>


    </main>
  );
}