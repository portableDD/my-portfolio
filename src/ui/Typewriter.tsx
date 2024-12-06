import { useEffect, useState } from "react";

type TypewriterProps = {
    words: string[],
    speed: number
}

export default function Typewritter({ words, speed }: TypewriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const currentWord = words[currentWordIndex];

    useEffect(() => {
        let charIndex = 0;
        const typingInterval = setInterval(() => {
          if(charIndex <= currentWord.length) {
            setDisplayedText(currentWord.slice(0, charIndex));
            charIndex++;
          }  else {
            clearInterval(typingInterval);
            setTimeout(() => {
                setCurrentWordIndex(prevIndex => prevIndex === words.length - 1 ? 0 : prevIndex + 1);
            }, 1000)
          }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [currentWord, speed, words]);

    return <span> {displayedText}</span>;
}