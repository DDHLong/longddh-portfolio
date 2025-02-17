import avatarDark from "../assets/longddh96.png";
import avatarLight from "../assets/longddh-light.png";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { useTheme } from "./theme-provider";
import { motion } from "motion/react";

const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: "easeInOut",
};

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";
  const iconProps = {
    src: isDark ? moon : sun,
    alt: isDark ? "moon" : "sun",
    initial: { x: -70, y: 80, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    transition,
  };

  return (
    <div className="flex items-center gap-4 relative size-46 justify-center">
      <img
        src={isDark ? avatarDark : avatarLight}
        alt="avatar"
        className="size-32 rounded-full cursor-pointer z-10"
        onClick={handleThemeChange}
      />
      <motion.img
        key={isDark ? "dark" : "light"}
        {...iconProps}
        className="size-16 absolute top-0 -right-3"
      />
    </div>
  );
};

export default ModeToggle;
