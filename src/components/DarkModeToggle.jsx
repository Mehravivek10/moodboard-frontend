export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm shadow hover:shadow-md transition z-50"
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
