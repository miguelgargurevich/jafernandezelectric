import React from "react";


const ThemeToggle: React.FC = () => {
  const [dark, setDark] = React.useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    // Preferencia del sistema
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
      className={`ml-2 p-2 rounded border border-accent transition
        ${dark ? 'bg-white text-accent hover:bg-accent hover:text-primary' : 'bg-primary text-accent hover:bg-accent hover:text-primary'}`}
      onClick={() => setDark((v) => !v)}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
