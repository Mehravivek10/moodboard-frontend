export default function Header() {
  return (
    <header className="w-full shadow bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight text-gray-800 dark:text-white">
          MoodBoard 🌈
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-300">Track Your Week</span>
      </div>
    </header>
  );
}
