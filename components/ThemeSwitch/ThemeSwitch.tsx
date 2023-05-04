import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <HiOutlineSun size={"2rem"} color={"var(--txt-color)"} />
      ) : (
        <HiOutlineMoon size={"2rem"} color={"var(--txt-color)"} />
      )}
    </button>
  );
};

export default ThemeSwitch;
