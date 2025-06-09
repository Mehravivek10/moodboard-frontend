import { useState } from 'react';

export default function MoodNote({ note, setNote }) {
  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        📝 Add a Mood Note
      </label>
      <textarea
        placeholder="Reflect on how you're feeling today..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={4}
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-brand"
      />
    </div>
  );
}
