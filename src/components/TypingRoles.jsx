import { useEffect, useState } from "react";

const roles = [
  "FRONTEND DEVELOPER",
  "FULL STACK DEVELOPER",
  "PROBLEM SOLVER",
];

export default function TypingRoles() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80); // typing speed

      return () => clearTimeout(timeout);
    } else {
      // Wait after full word completed
      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(pause);
    }
  }, [charIndex, roleIndex]);

  return (
    <span className="typing-role">
      {text}
      <span className="cursor">|</span>
    </span>
  );
}
