import { getMoodSummary } from '../utils/moodHelpers';
import MoodBar from './MoodBar';

export default function SummaryPanel({ moods }) {
  const { goodDays, badDays, mostCommon } = getMoodSummary(moods);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        📊 Weekly Mood Summary
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <SummaryCard label="Good Days" value={goodDays} color="text-green-500" />
        <SummaryCard label="Bad Days" value={badDays} color="text-red-500" />
        <SummaryCard label="Most Common Mood" value={mostCommon || '—'} color="text-indigo-500" />
      </div>

      <MoodBar moods={moods} />
    </div>
  );
}

function SummaryCard({ label, value, color }) {
  return (
    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm">
      <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">{label}</div>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
    </div>
  );
}
