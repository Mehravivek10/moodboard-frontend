import { useEffect, useState } from 'react';

export default function MoodQuote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => setQuote(data.content));
  }, []);

  return (
    <blockquote className="italic text-gray-700 dark:text-gray-300 px-4 py-3 bg-white dark:bg-gray-800 rounded-md border-l-4 border-indigo-400 shadow-soft">
      “{quote}”
    </blockquote>
  );
}
