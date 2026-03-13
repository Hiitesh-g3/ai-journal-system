import { useInsights } from "../hooks/useJournals";

// Back to exactly how you had it!
const USER_ID = "123";

export default function InsightsPanel() {
  const { data, isLoading, isError } = useInsights(USER_ID);

  if (isLoading) return <p>Loading insights...</p>;
  if (isError) return <p>Failed to load insights</p>;

  const insights = data?.data;
  if (!insights) return null;

  return (
    <div style={{ marginTop: "40px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Insights</h2>
      <p><strong>Total Entries:</strong> {insights.totalEntries}</p>
      <p><strong>Top Emotion:</strong> {insights.topEmotion || "N/A"}</p>
      <p><strong>Most Used Ambience:</strong> {insights.mostUsedAmbience || "N/A"}</p>
      <p><strong>Keywords:</strong> {insights.recentKeywords?.length ? insights.recentKeywords.join(", ") : "N/A"}</p>
    </div>
  );
}