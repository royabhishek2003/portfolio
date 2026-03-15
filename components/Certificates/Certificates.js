import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, CERTIFICATES } from "../../constants";
import TiltCard from "../TiltCard/TiltCard";

const Certificates = () => {
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
        trigger: sectionRef.current.querySelector(".certificates-wrapper"),
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
      id={MENULINKS[3].ref}
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col certificates-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              CERTIFICATES
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Certifications
            </h1>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full staggered-reveal transform-gpu">
            {CERTIFICATES.map((cert, index) => (
              <TiltCard key={index} className="h-full">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 p-6 hover:border-indigo-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] h-full w-full block"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-medium text-white pr-4 group-hover:text-indigo-400 transition-colors">
                      {cert.name}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500 group-hover:text-indigo-400 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                      View Credential
                    </span>
                  </div>
                </a>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
