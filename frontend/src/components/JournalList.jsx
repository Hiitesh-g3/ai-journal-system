import { useJournals } from "../hooks/useJournals";

const USER_ID = "123";

export default function JournalList() {

  const { data, isLoading, isError } = useJournals(USER_ID);

  if (isLoading) {
    return <p>Loading journal entries...</p>;
  }

  if (isError) {
    return <p>Failed to load journals</p>;
  }

  const journals = data?.data || [];

  if (!journals.length) {
    return <p>No journal entries yet.</p>;
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Previous Entries</h2>

      {journals.map((entry) => (
        <div
          key={entry._id}
          style={{
            border: "1px solid #ddd",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "6px"
          }}
        >
          <div style={{ marginBottom: "5px" }}>
            <strong>Ambience:</strong> {entry.ambience}
          </div>

          <div style={{ marginBottom: "5px" }}>
            <strong>Journal:</strong>
            <p>{entry.text}</p>
          </div>

          {entry.emotion && (
            <div>
              <strong>Emotion:</strong> {entry.emotion}
            </div>
          )}

          <small style={{ color: "#777" }}>
            {new Date(entry.createdAt).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
}