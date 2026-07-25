"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {


  const [mouse, setMouse] = useState({

    x: 0,

    y: 0,

  });







  useEffect(() => {


    const moveCursor = (event: MouseEvent) => {


      setMouse({

        x: event.clientX,

        y: event.clientY,

      });


    };



    window.addEventListener(
      "mousemove",
      moveCursor
    );



    return () => {


      window.removeEventListener(
        "mousemove",
        moveCursor
      );


    };


  }, []);









  const backgroundCode = [


    "O(log n)",

    "Binary Search",

    "Neural Network",

    "TensorFlow",

    "Computer Vision",

    "System Design",

    "REST API",

    "Distributed Systems",

    "HashMap<Key,Value>",

    "AI_Model.train()",

    "Backend Architecture",

    "Cloud Infrastructure",

    "Database Systems",

    "Machine Learning",

    "CI/CD Pipeline",

  ];









  const fundamentals = [


    "DATA STRUCTURES",

    "ARTIFICIAL INTELLIGENCE",

    "MACHINE LEARNING",

    "SYSTEM DESIGN",

    "COMPUTER VISION",

    "DATABASE ARCHITECTURE",

    "CLOUD COMPUTING",

    "SOFTWARE ENGINEERING",

  ];









  return (

    <main

      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#020617]
      text-[#ccd6f6]
      "

    >







      {/* Cursor Glow */}



      <div

        className="
        pointer-events-none
        fixed
        z-50
        h-[320px]
        w-[320px]
        rounded-full
        bg-cyan-400/10
        blur-3xl
        transition duration-150
        "

        style={{


          left: mouse.x - 160,

          top: mouse.y - 160,


        }}

      />








      {/* Cursor Point */}



      <div

        className="
        pointer-events-none
        fixed
        z-50
        h-4
        w-4
        rounded-full
        border
        border-cyan-300
        bg-cyan-300/40
        shadow-[0_0_40px_12px_rgba(34,211,238,0.4)]
        "

        style={{


          left: mouse.x,

          top: mouse.y,

          transform:"translate(-50%,-50%)",


        }}

      />









      {/* Background Glow */}



      <div

        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,#172554,transparent_45%)]
        "

      />









      {/* Grid */}



      <div

        className="
        absolute
        inset-0
        opacity-20
        bg-[linear-gradient(#334155_1px,transparent_1px),linear-gradient(90deg,#334155_1px,transparent_1px)]
        bg-[size:60px_60px]
        "

      />









      {/* Floating Fundamentals */}



      <div

        className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
        "

      >


        {fundamentals.map((item,index)=>(


          <span


            key={item}


            className="
            absolute
            animate-[float_16s_ease-in-out_infinite]
            font-mono
            text-xs
            text-cyan-300
            opacity-[0.05]
            "



            style={{


              left:`${10 + index * 11}%`,


              top:`${15 + (index % 5) * 17}%`,


            }}


          >


            {item}


          </span>



        ))}


      </div>









      {/* Background Code */}



      <div

        className="
        absolute
        inset-0
        flex
        flex-wrap
        content-center
        justify-center
        gap-16
        p-12
        opacity-[0.05]
        "

      >


        {backgroundCode.map((item,index)=>(


          <span


            key={index}


            className="
            font-mono
            text-cyan-300
            "

          >


            {item}


          </span>



        ))}


      </div>









      {/* Main Layout */}



      <div

        className="
        relative
        z-10
        mx-auto
        flex
        max-w-7xl
        flex-col
        px-6
        py-16
        lg:flex-row
        lg:px-20
        "

      >







        {/* LEFT PROFILE */}



        <aside

          className="
          lg:sticky
          lg:top-20
          lg:h-screen
          lg:w-1/3
          "

        >






          <h1

            className="
            text-5xl
            font-bold
            text-white
            "

          >

            Suparn Posina

          </h1>






          <h2

            className="
            mt-4
            text-xl
            text-cyan-300
            "

          >

            Computer Science Student @ San José State University

          </h2>






          <p

            className="
            mt-6
            max-w-sm
            leading-7
            text-slate-400
            "

          >

            Software engineering student focused on backend systems,
            artificial intelligence, machine learning, computer vision,
            and scalable applications.

          </p>






          <Image

            src="/suparn-profile.jpeg"

            alt="Suparn Posina"

            width={170}

            height={170}

            className="
            mt-8
            rounded-full
            border
            border-cyan-300/40
            object-cover
            "

          />






          <nav

            className="
            mt-12
            hidden
            space-y-5
            text-sm
            tracking-widest
            text-slate-500
            lg:block
            "

          >


            <p className="transition hover:text-cyan-300">
              ABOUT
            </p>


            <p className="transition hover:text-cyan-300">
              EXPERIENCE
            </p>


            <p className="transition hover:text-cyan-300">
              PROJECTS
            </p>


            <p className="transition hover:text-cyan-300">
              CONTACT
            </p>


          </nav>





        </aside>        {/* RIGHT CONTENT */}



        <section

          className="
          mt-16
          space-y-28
          lg:mt-0
          lg:w-2/3
          lg:pl-12
          "

        >







          {/* ABOUT */}



          <section className="max-w-3xl">



            <h3

              className="
              text-sm
              tracking-[0.25em]
              text-cyan-300
              "

            >

              ABOUT

            </h3>







            <div

              className="
              mt-8
              space-y-6
              pl-2
              "

            >



              <p className="leading-8 text-slate-300">


                Hey there! I am a Computer Science student at
                San José State University with a 4.0 GPA and
                a minor in Business.


              </p>







              <p className="leading-8 text-slate-300">


                I am interested in software engineering,
                backend systems, artificial intelligence,
                machine learning, computer vision, and building
                scalable full-stack applications.


              </p>







              <p className="leading-8 text-slate-300">


                I enjoy creating technology that solves
                real-world problems while continuously improving
                as an engineer through hands-on projects,
                collaboration, and continuous learning.


              </p>



            </div>


          </section>









          {/* TECHNICAL SKILLS */}



          <section>


            <h3

              className="
              text-sm
              tracking-widest
              text-cyan-300
              "

            >

              TECHNICAL SKILLS

            </h3>







            <div

              className="
              mt-8
              grid
              gap-8
              sm:grid-cols-2
              "

            >





              <Skill

                title="Programming Languages"

                text="Java, Python, C/C++, TypeScript, JavaScript, SQL"

              />







              <Skill

                title="Backend Engineering"

                text="Node.js, Express, Flask, REST APIs, Firebase"

              />







              <Skill

                title="AI / Machine Learning"

                text="TensorFlow, OpenCV, Machine Learning, Computer Vision"

              />







              <Skill

                title="Frontend Development"

                text="React, Next.js, HTML, CSS, Responsive Applications"

              />







              <Skill

                title="Cloud & DevOps"

                text="AWS, Docker, Git, GitHub, CI/CD"

              />







              <Skill

                title="Databases"

                text="PostgreSQL, Data Modeling, Database Systems"

              />





            </div>


          </section>









          {/* LANGUAGES */}



          <section>


            <h3

              className="
              text-sm
              tracking-widest
              text-cyan-300
              "

            >

              LANGUAGES

            </h3>







            <div

              className="
              mt-6
              flex
              flex-wrap
              gap-4
              "

            >



              <Language text="English" />

              <Language text="Hindi" />

              <Language text="Telugu" />

              <Language text="Spanish" />



            </div>


          </section>









          {/* EXPERIENCE */}



          <section>


            <h3

              className="
              text-sm
              tracking-widest
              text-cyan-300
              "

            >

              EXPERIENCE

            </h3>







            <Experience


              title="Backend Developer"


              company="ROID"


              date="Mar 2024 — Jul 2024"


              description="
              Developed backend workflows, authentication systems,
              and application functionality using Swift and Firebase.
              Built API functionality supporting scheduling,
              uploading, management workflows, and data processing.
              "


            />







            <Experience


              title="Math Tutor"


              company="Mathnasium - The Math Learning Center"


              date="Sep 2024 — Jun 2025"


              description="
              Taught mathematics from foundational concepts through
              Calculus while adapting explanations to individual
              student needs. Recognized for communication,
              reliability, and teamwork.
              "


            />




          </section>









          {/* EDUCATION */}



          <section>


            <h3

              className="
              text-sm
              tracking-widest
              text-cyan-300
              "

            >

              EDUCATION

            </h3>







            <Education


              school="San José State University"


              degree="Bachelor of Science - Computer Science"


              date="2025 — 2027"


              description="
              Current Computer Science student focused on software
              engineering, backend systems, artificial intelligence,
              and machine learning.
              "


            />







            <Education


              school="De Anza College"


              degree="Associate's Degree - Computer Science"


              date="2023 — 2025"


              description="
              Graduated with a 3.97 GPA. Co-founder of the Data
              Science Club and Vice President of the Chess Club.
              "


            />







            <Education


              school="Harvard University"


              degree="CS50 & CS50AI Certificates"


              date="2023"


              description="
              Completed Harvard Computer Science and Artificial
              Intelligence coursework covering programming,
              algorithms, and AI concepts.
              "


            />





          </section>          {/* FEATURED PROJECTS */}



          <section>


            <h3

              className="
              text-sm
              tracking-widest
              text-cyan-300
              "

            >

              FEATURED PROJECTS

            </h3>







            <Project


              title="AI Investment Property Analysis"


              description="
              Built an AI-assisted application focused on analyzing
              investment properties using data-driven insights,
              automation, and intelligent recommendations.
              "


              technologies="
              Python • AI • Machine Learning • Data Analysis
              "


            />








            <Project


              title="Automated YouTube Scheduling Platform"


              description="
              Created automation workflows for scheduling and
              uploading content while improving backend management
              processes and system reliability.
              "


              technologies="
              Backend • REST APIs • Automation • Cloud
              "


            />








            <Project


              title="Real-Time Location Prediction"


              description="
              Explored computer vision techniques to analyze images
              and videos and predict locations using intelligent
              image processing.
              "


              technologies="
              OpenCV • Computer Vision • AI
              "


            />





          </section>









          {/* CURRENTLY SEEKING */}



          <section>


            <h3

              className="
              text-sm
              tracking-widest
              text-cyan-300
              "

            >

              CURRENTLY SEEKING

            </h3>







            <p

              className="
              mt-6
              leading-8
              text-slate-300
              "

            >


              I am currently seeking software engineering,
              backend, full-stack, AI/ML, or computer vision
              internship opportunities where I can contribute
              to meaningful products and continue developing
              as an engineer.


            </p>



          </section>









          {/* CONTACT */}



          <section>


            <h3

              className="
              text-sm
              tracking-widest
              text-cyan-300
              "

            >

              CONTACT

            </h3>







            <p

              className="
              mt-6
              leading-8
              text-slate-300
              "

            >


              Interested in software engineering,
              artificial intelligence, and building
              impactful technology.


            </p>







            <div

              className="
              mt-8
              flex
              gap-5
              "

            >



              <a


                href="https://github.com/oops408"


                target="_blank"


                className="
                rounded-md
                border
                border-slate-600
                px-5
                py-3
                text-sm
                transition
                hover:border-cyan-300
                hover:text-cyan-300
                "


              >

                GitHub


              </a>







              <a


                href="https://www.linkedin.com/in/suparnp/"


                target="_blank"


                className="
                rounded-md
                border
                border-slate-600
                px-5
                py-3
                text-sm
                transition
                hover:border-cyan-300
                hover:text-cyan-300
                "


              >

                LinkedIn


              </a>





            </div>


          </section>









        </section>


      </div>


    </main>


  );


}









function Skill({

  title,

  text,

}: {

  title:string;

  text:string;

}) {


  return (


    <div

      className="
      border-l
      border-slate-700
      pl-5
      transition
      hover:border-cyan-300
      "

    >


      <h4 className="font-semibold text-white">


        {title}


      </h4>





      <p

        className="
        mt-2
        text-sm
        leading-6
        text-slate-400
        "

      >


        {text}


      </p>


    </div>


  );


}









function Language({

  text,

}: {


  text:string;


}) {


  return (


    <span


      className="
      rounded-full
      border
      border-slate-600
      px-5
      py-2
      text-sm
      text-slate-300
      transition
      hover:border-cyan-300
      hover:text-cyan-300
      "


    >


      {text}


    </span>


  );


}









function Experience({

  title,

  company,

  date,

  description,


}: {


  title:string;

  company:string;

  date:string;

  description:string;


}) {


  return (


    <article

      className="
      mt-10
      rounded-lg
      p-5
      transition
      hover:bg-white/[0.03]
      "

    >


      <p className="text-sm text-slate-500">


        {date}


      </p>





      <h4 className="mt-3 text-xl font-semibold text-white">


        {title}


      </h4>





      <p className="mt-1 text-cyan-300">


        {company}


      </p>





      <p className="mt-5 leading-7 text-slate-300">


        {description}


      </p>


    </article>


  );


}









function Education({

  school,

  degree,

  date,

  description,


}: {


  school:string;

  degree:string;

  date:string;

  description:string;


}) {


  return (


    <article

      className="
      mt-10
      rounded-lg
      p-5
      transition
      hover:bg-white/[0.03]
      "

    >


      <p className="text-sm text-slate-500">


        {date}


      </p>





      <h4 className="mt-3 text-xl font-semibold text-white">


        {school}


      </h4>





      <p className="mt-1 text-cyan-300">


        {degree}


      </p>





      <p className="mt-5 leading-7 text-slate-300">


        {description}


      </p>


    </article>


  );


}









function Project({

  title,

  description,

  technologies,


}: {


  title:string;

  description:string;

  technologies:string;


}) {


  return (


    <article

      className="
      mt-10
      rounded-lg
      p-5
      transition
      hover:bg-white/[0.03]
      "

    >


      <h4

        className="
        text-xl
        font-semibold
        text-white
        transition
        hover:text-cyan-300
        "

      >


        {title}


      </h4>





      <p className="mt-4 leading-7 text-slate-300">


        {description}


      </p>





      <p className="mt-4 text-sm text-cyan-300">


        {technologies}


      </p>


    </article>


  );


}