import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Howl } from "howler";
import SoundBar from "./SoundBar/SoundBar";

const multiPop = new Howl({
  src: ["/sounds/multi-pop.mp3"],
});

const Header = ({ children }) => {
  const inputRef = useRef(null);

  const handleClick = useCallback((e) => {
    if (e.target.checked) multiPop.play();
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape" && inputRef.current?.checked) {
      inputRef.current.checked = false;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <nav className="w-full fixed top-0 py-8 z-50 select-none bg-gradient-to-b from-black shadow-black transition-all duration-300">
      <div className="flex justify-between section-container">
        <a href="#home" className="link">
          <Image
            src="/logo.svg"
            alt="Logo - Abhishek Kumar"
            width={25}
            height={25}
          />
        </a>
        <div className="outer-menu relative flex items-center gap-8 z-[1]">
          <a
            href="https://drive.google.com/uc?export=download&id=1ROgv4VgdaUKB-hr3oLiTvluzrsyAkTQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="link flex items-center gap-1.5 text-white text-sm font-mono border border-indigo-light rounded-md px-3 py-1.5 hover:bg-indigo-light hover:text-black transition-all duration-300"
            title="Download Resume"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
          <SoundBar />
          <input
            ref={inputRef}
            aria-labelledby="menu"
            aria-label="menu"
            className="checkbox-toggle link absolute top-0 right-0 w-6 h-6 opacity-0"
            type="checkbox"
            onClick={handleClick}
          />
          <div className="hamburger w-6 h-6 flex items-center justify-center">
            <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center" />
          </div>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Header;
