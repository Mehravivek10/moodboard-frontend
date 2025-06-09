import { format, subDays } from 'date-fns';
import { useState } from 'react';
import MoodModal from './MoodModal';

export default function Calendar({ moods, setMoods }) {
  const [activeDate, setActiveDate] = useState(null);
  const week = Array.from({ length: 7 }, (_, i) =>
    format(subDays(new Date(), 6 - i), 'yyyy-MM-dd')
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
      {week.map((date) => {
        const mood = moods[date];

        return (
          <div
            key={date}
            title={mood ? 'Click to edit mood' : 'Click to select mood'}
            onClick={() => setActiveDate(date)}
            className={`cursor-pointer p-4 rounded-xl text-center shadow border transition-all ${
              mood
                ? 'bg-white dark:bg-gray-800'
                : 'bg-gray-50 dark:bg-gray-700'
            }`}
          >
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {format(new Date(date), 'EEE')}
            </div>
            <div className="text-lg font-semibold text-gray-800 dark:text-white">
              {format(new Date(date), 'd')}
            </div>

            {mood && (
              <>
                <div className="mt-2 text-2xl">{mood.emoji}</div>
                <div className="mt-1 text-xs text-indigo-500 dark:text-indigo-300 flex items-center justify-center gap-1">
                  <span className="text-[13px]">✏️</span>
                  <span>Edit</span>
                </div>
              </>
            )}
          </div>
        );
      })}

      {activeDate && (
        <MoodModal
          isOpen={!!activeDate}
          onClose={() => setActiveDate(null)}
          date={activeDate}
          setMoods={setMoods}
        />
      )}
    </div>
  );
}
