export const buildInsights = (journals) => {
    const emotionCount = {};
    const ambienceCount = {};
    const keywordCount = {};
  
    journals.forEach(j => {
      if (j.emotion) {
        emotionCount[j.emotion] = (emotionCount[j.emotion] || 0) + 1;
      }
  
      if (j.ambience) {
        ambienceCount[j.ambience] = (ambienceCount[j.ambience] || 0) + 1;
      }
  
      if (j.keywords) {
        j.keywords.forEach(k => {
          keywordCount[k] = (keywordCount[k] || 0) + 1;
        });
      }
    });
  
    const topEmotion =
      Object.keys(emotionCount).sort((a,b)=>emotionCount[b]-emotionCount[a])[0];
  
    const mostUsedAmbience =
      Object.keys(ambienceCount).sort((a,b)=>ambienceCount[b]-ambienceCount[a])[0];
  
    const recentKeywords =
      Object.keys(keywordCount).slice(0,5);
  
    return {
      totalEntries: journals.length,
      topEmotion: topEmotion || null,
      mostUsedAmbience: mostUsedAmbience || null,
      recentKeywords
    };
  };