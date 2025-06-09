import { useEffect, useState } from 'react';

export default function Affirmation() {
  const [affirmation, setAffirmation] = useState('');

  useEffect(() => {
    fetch('https://www.affirmations.dev')
      .then(res => res.json())
      .then(data => setAffirmation(data.affirmation))
      .catch(() => setAffirmation('You are worthy of success and calm.'));
  }, []);

  return (
    <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border-l-4 border-green-400">
      <h4 className="text-sm text-gray-500 dark:text-gray-300 mb-2 font-medium">
        🧘 Affirmation of the Day
      </h4>
      <p className="text-lg italic text-gray-700 dark:text-gray-200">“{affirmation}”</p>
    </div>
  );
}
