export const buildInsights = (journals) => {

    const totalEntries = journals.length;
  
    const emotionCount = {};
    const ambienceCount = {};
    const keywordCount = {};
  
    journals.forEach(journal => {
  
      /* count emotions */
      if (journal.emotion) {
        emotionCount[journal.emotion] =
          (emotionCount[journal.emotion] || 0) + 1;
      }
  
      /* count ambience */
      if (journal.ambience) {
        ambienceCount[journal.ambience] =
          (ambienceCount[journal.ambience] || 0) + 1;
      }
  
      /* count keywords */
      if (journal.keywords) {
        journal.keywords.forEach(word => {
          keywordCount[word] = (keywordCount[word] || 0) + 1;
        });
      }
  
    });
  
    const topEmotion =
      Object.keys(emotionCount).sort(
        (a, b) => emotionCount[b] - emotionCount[a]
      )[0] || null;
  
    const mostUsedAmbience =
      Object.keys(ambienceCount).sort(
        (a, b) => ambienceCount[b] - ambienceCount[a]
      )[0] || null;
  
    const recentKeywords =
      Object.keys(keywordCount)
        .sort((a, b) => keywordCount[b] - keywordCount[a])
        .slice(0, 5);
  
    return {
      totalEntries,
      topEmotion,
      mostUsedAmbience,
      recentKeywords
    };
  };