export default function MoodBar({ moods }) {
  const counts = { Happy: 0, Neutral: 0, Sad: 0 };
  Object.values(moods).forEach((m) => {
    if (counts[m.name] !== undefined) counts[m.name]++;
  });

  const total = counts.Happy + counts.Neutral + counts.Sad;

  return (
    <div className="w-full h-4 rounded-full overflow-hidden flex bg-gray-200 dark:bg-gray-700 mt-4">
      {['Happy', 'Neutral', 'Sad'].map((mood) => (
        <div
          key={mood}
          className={`h-full`}
          style={{
            width: `${(counts[mood] / total) * 100 || 0}%`,
            backgroundColor: `var(--tw-color-mood-${mood.toLowerCase()})`,
          }}
        />
      ))}
    </div>
  );
}
