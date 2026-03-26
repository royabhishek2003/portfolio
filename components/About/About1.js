import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About1 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .fromTo(
          quoteRef.current.querySelector(".about-1"),
          { opacity: 0.2 },
          { opacity: 1 }
        )
        .to(quoteRef.current.querySelector(".about-1"), {
          opacity: 0.2,
          delay: 0.5,
        })
        .fromTo(
          quoteRef.current.querySelector(".about-2"),
          { opacity: 0.2 },
          { opacity: 1 },
          "<"
        )
        .to(quoteRef.current.querySelector(".about-2"), {
          opacity: 0.2,
          delay: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 80%",
        end: "center top",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative select-none">
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container`}
      >
        {/* About Section Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-12 h-[2px] bg-gradient-to-r from-transparent to-purple-500"></span>
            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-purple-400">ABOUT</p>
            <span className="block w-12 h-[2px] bg-gradient-to-l from-transparent to-purple-500"></span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient w-fit mb-10">Who I Am</h2>
          <div
            className="relative rounded-xl overflow-hidden"
            style={{
              width: "220px",
              height: "270px",
              boxShadow: "0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(99, 102, 241, 0.2)",
              border: "3px solid rgba(99, 102, 241, 0.6)",
            }}
          >
            <img
              src="https://res.cloudinary.com/dr5diwsvt/image/upload/v1771258312/codehelp/ty0zto3nt9gynpxxz0sw.jpg"
              alt="About Me"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <h1
          ref={quoteRef}
          className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
        >
          <span className="about-1 leading-tight">
            I&apos;m a passionate Engineer who&apos;s focused on building
            scalable and performant apps.{" "}
          </span>
          <span className="about-2 leading-tight">
            I take responsibility to craft a good user experience using modern
            full-stack architecture.{" "}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About1;
