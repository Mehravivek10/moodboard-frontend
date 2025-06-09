import { motion, AnimatePresence } from 'framer-motion';

const moods = [
  { name: 'Happy', value: 2, emoji: '😄' },
  { name: 'Neutral', value: 1, emoji: '😐' },
  { name: 'Sad', value: -1, emoji: '😔' },
];

export default function MoodModal({ isOpen, onClose, date, setMoods }) {
  const handleMoodClick = (mood) => {
    setMoods(prev => ({ ...prev, [date]: mood }));
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg max-w-xs w-full"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white mb-4">
              How was {date}?
            </h3>
            <div className="flex justify-around">
              {moods.map((mood) => (
                <button
                  key={mood.name}
                  onClick={() => handleMoodClick(mood)}
                  className="text-3xl hover:scale-110 transition transform"
                  title={mood.name}
                >
                  {mood.emoji}
                </button>
              ))}
            </div>
            <button
              onClick={onClose}
              className="mt-5 block mx-auto px-4 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
