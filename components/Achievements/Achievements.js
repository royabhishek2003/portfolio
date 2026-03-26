import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, ACHIEVEMENTS } from "../../constants";
import TiltCard from "../TiltCard/TiltCard";

const Achievements = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".achievements-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS.find(link => link.name === "Achievements")?.ref || "achievements"}
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col achievements-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              ACHIEVEMENTS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              Milestones
            </h1>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full staggered-reveal transform-gpu">
            {ACHIEVEMENTS.map((achievement, index) => {
              const CardContent = (
                <div
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 p-10 hover:border-blue-500 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] h-full"
                >
                  <div className="flex flex-col h-full transition-transform duration-500">
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                        {index === 0 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        )}
                      </div>
                      <div className="flex flex-col flex-grow">
                        <div className="flex justify-between items-start">
                          <h3 className="text-2xl font-medium text-white group-hover:text-blue-400 transition-colors">
                            {achievement.title}
                          </h3>
                          {achievement.url && (
                             <svg
                               xmlns="http://www.w3.org/2000/svg"
                               className="h-6 w-6 text-gray-500 group-hover:text-blue-400 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                             >
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                             </svg>
                          )}
                        </div>
                        <p className="mt-4 text-lg text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );

              return (
                <TiltCard key={index} className="h-full w-full">
                  {achievement.url ? (
                    <a href={achievement.url} target="_blank" rel="noreferrer" className="block h-full cursor-pointer">
                      {CardContent}
                    </a>
                  ) : (
                    <div className="h-full">
                      {CardContent}
                    </div>
                  )}
                </TiltCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
