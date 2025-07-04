import { useState, useEffect, useRef } from "react";
import audio from "../../../public/sounds/songs.mp3";

const SoundBar = () => {
  const soundBarEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) soundBarEl.current.play();
    else soundBarEl.current.pause();
  };

  useEffect(() => {
    document.querySelector(".soundBars").onclick = function () {
      this.classList.toggle("play");
    };
  }, []);

  return (
    <div
      className="soundBars link top-1 right-14 flex items-center justify-center"
      onClick={togglePlayPause}
    >
      <span />
      <span />
      <span />
      <span />
      <audio ref={soundBarEl} src={audio} loop preload="auto" />
    </div>
  );
};

export default SoundBar;
