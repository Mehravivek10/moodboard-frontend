import { useEffect, useState } from 'react';
import Header from './components/Header';
import Calendar from './components/Calendar';
import SummaryPanel from './components/SummaryPanel';
import MoodQuote from './components/MoodQuote';
import Affirmation from './components/Affirmation';
import MoodNote from './components/MoodNote';
import DarkModeToggle from './components/DarkModeToggle';
import { getDominantMood, moodColors } from './utils/moodHelpers';

export default function App() {
  const [moods, setMoods] = useState(() => JSON.parse(localStorage.getItem('moods')) || {});
  const [darkMode, setDarkMode] = useState(false);
  const [note, setNote] = useState('');

  useEffect(() => {
    localStorage.setItem('moods', JSON.stringify(moods));
  }, [moods]);

  const dominant = getDominantMood(moods);
  const bgClass = moodColors[dominant] || 'bg-white';

  return (
    <div className={darkMode ? 'dark' : ''}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header />
      <main className={`min-h-screen ${bgClass} p-4 transition-all duration-500`}>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-800 dark:text-white">
          <Calendar moods={moods} setMoods={setMoods} />
          <SummaryPanel moods={moods} />
          <MoodQuote />
          <Affirmation />
          <MoodNote note={note} setNote={setNote} />
        </div>
      </main>
    </div>
  );
}
