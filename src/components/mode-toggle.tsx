import avatarDark from "../assets/longddh96.png";
import avatarLight from "../assets/longddh-light.png";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { useTheme } from "./theme-provider";
import { motion } from "motion/react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: "easeInOut",
  };
  return (
    <div className="flex items-center gap-4 relative size-46 justify-center">
      <img
        src={theme === "dark" ? avatarDark : avatarLight}
        alt="avatar"
        className="size-32 rounded-full cursor-pointer z-10"
        onClick={handleThemeChange}
      />
      {theme === "dark" ? (
        <motion.img
          key={"dark"}
          src={moon}
          alt="moon"
          className="size-16 absolute top-0 -right-3"
          initial={{ x: -50, y: 80, rotate: 0 }}
          animate={{ x: 0, y: 0 }}
          transition={transition}
        />
      ) : (
        <motion.img
          key={"light"}
          src={sun}
          alt="sun"
          className="size-16 absolute top-0 -right-3"
          initial={{ x: -70, y: 80, rotate: 0 }}
          animate={{ x: 0, y: 0 }}
          transition={transition}
        />
      )}
    </div>
  );
};

export default ModeToggle;
