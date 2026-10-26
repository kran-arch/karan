import { useState, useEffect } from "react";

export default function Typewriter({
  words = ["karan"],
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseTime = 2200,
  loop = false,
  cursor = true,
  cursorChar = "|",
  className = "",
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex % words.length] || "";
    let timeout;

    if (!isDeleting) {
      if (currentText.length < word.length) {
        timeout = setTimeout(() => {
          setCurrentText(word.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        if (loop && words.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(word.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime, loop]);

  return (
    <span className={`typewriter-container ${className}`}>
      <span>{currentText}</span>
      {cursor && <span className="typewriter-cursor" aria-hidden="true">{cursorChar}</span>}
    </span>
  );
}
