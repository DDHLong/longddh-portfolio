import { FC, useState } from "react";
import { motion, Variants, HTMLMotionProps } from "motion/react";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  duration?: number;
}

const WavyText: FC<Props> = ({
  text,
  delay = 0.05,
  duration = 0.05,
  ...props
}: Props) => {
  const [hover, setHover] = useState(false);
  const letters = Array.from(text);

  const container: Variants = {
    normal: { y: 0 },
    hover: (i: number = 1) => ({
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const child: Variants = {
    hover: {
      y: [-5, 0],
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    normal: {
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="normal"
      animate={hover ? "hover" : "normal"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.div className="inline-block" key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WavyText;
