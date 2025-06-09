export const moodColors = {
  Happy: 'bg-mood-happy',
  Neutral: 'bg-mood-neutral',
  Sad: 'bg-mood-sad',
};

export const moodScores = {
  Happy: 2,
  Neutral: 1,
  Sad: -1,
};

export function getMoodSummary(moods) {
  const moodCount = { Happy: 0, Neutral: 0, Sad: 0 };
  let goodDays = 0;
  let badDays = 0;

  Object.values(moods).forEach(({ name }) => {
    moodCount[name]++;
    const score = moodScores[name];
    if (score >= 2) goodDays++;
    if (score < 0) badDays++;
  });

  const mostCommon = Object.entries(moodCount)
    .sort((a, b) => b[1] - a[1])
    .find(([_, count]) => count > 0)?.[0];

  return { goodDays, badDays, mostCommon };
}

export function getDominantMood(moods) {
  const tally = {};

  Object.values(moods).forEach(({ name }) => {
    if (!tally[name]) tally[name] = 0;
    tally[name] += moodScores[name];
  });

  const dominant = Object.entries(tally)
    .sort((a, b) => b[1] - a[1])
    .find(([_, score]) => score > 0)?.[0];

  return dominant || null;
}
