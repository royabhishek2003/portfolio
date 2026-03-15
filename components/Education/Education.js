import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, EDUCATION_METADATA } from "../../constants";
import TiltCard from "../TiltCard/TiltCard";

const Education = () => {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the title and container
      gsap.from(
        sectionRef.current.querySelectorAll(".staggered-reveal"),
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate the path drawing as we scroll down
      const pathLength = pathRef.current.getTotalLength();
      
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current.querySelector(".timeline-container"),
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      // Reveal each timeline item as the scroll reaches it
      itemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          x: index % 2 === 0 ? 50 : -50,
          duration: 0.6,
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS.find(link => link.name === "Education")?.ref || "education"}
      className="w-full relative select-none mt-44 mb-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col">
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal text-center">
            ACADEMICS
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit mx-auto staggered-reveal">
            Education
          </h1>
        </div>

        <div className="timeline-container relative mt-24 mb-16 max-w-4xl mx-auto w-full pb-10">
          {/* Animated SVG Path connecting the dots in the middle */}
          <div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 hidden md:block z-0">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 10 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="5"
                y1="0"
                x2="5"
                y2="100"
                stroke="rgba(99, 102, 241, 0.2)"
                strokeWidth="1"
              />
              <line
                ref={pathRef}
                x1="5"
                y1="0"
                x2="5"
                y2="100"
                stroke="#6366f1"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-16 md:gap-32 relative z-10 w-full pl-8 md:pl-0 border-l-2 md:border-l-0 border-indigo-500/20">
            {EDUCATION_METADATA.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className={`flex w-full items-center relative ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Glowing Node Dot (Mobile stays left, Desktop centers) */}
                  <div className="absolute left-[-37px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-black border-4 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] z-20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full md:w-5/12 ${isEven ? "md:pr-12" : "md:pl-12"} ml-6 md:ml-0`}>
                    <TiltCard>
                      <div 
                        className="group relative bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] h-full"
                      >
                        <div className="flex flex-col h-full transition-transform duration-500">
                          <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                          <h4 className="text-lg font-medium text-gray-300 mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {edu.institution}
                          </h4>
                          
                          <div className="flex items-center gap-3 mt-2 mb-6">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
                            <span className="font-mono text-xl font-semibold text-gradient whitespace-nowrap">
                              {edu.score}
                            </span>
                          </div>
                          
                          {/* Period at bottom left, smaller */}
                          <div className="mt-auto self-start pt-2">
                            <div className="inline-block px-3 py-1 text-xs font-mono text-indigo-400/80 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                              {edu.period}
                            </div>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
