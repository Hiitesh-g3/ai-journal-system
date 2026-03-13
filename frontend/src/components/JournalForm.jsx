import { useState } from "react";
import { useCreateJournal, useAnalyzeJournal } from "../hooks/useJournals";

const USER_ID = "123";

export default function JournalForm() {

  const [text, setText] = useState("");
  const [ambience, setAmbience] = useState("forest");
  const [analysis, setAnalysis] = useState(null);

  const createJournalMutation = useCreateJournal();
  const analyzeMutation = useAnalyzeJournal();

  const handleSubmit = async () => {

    if (!text.trim()) return;

    await createJournalMutation.mutateAsync({
      userId: USER_ID,
      ambience,
      text
    });

    setText("");
  };

  const handleAnalyze = async () => {

    if (!text.trim()) return;

    const result = await analyzeMutation.mutateAsync(text);

    setAnalysis(result.data);
  };

  return (

    <div style={{ marginBottom: "30px" }}>

      <h2>Write Journal</h2>

      <select
        value={ambience}
        onChange={(e) => setAmbience(e.target.value)}
      >
        <option value="forest">Forest</option>
        <option value="ocean">Ocean</option>
        <option value="mountain">Mountain</option>
      </select>

      <textarea
        rows="5"
        placeholder="Write your journal..."
        style={{ width: "100%", marginTop: "10px" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div style={{ marginTop: "10px" }}>

        <button
          onClick={handleSubmit}
          disabled={createJournalMutation.isPending}
        >
          {createJournalMutation.isPending ? "Saving..." : "Save Entry"}
        </button>

        <button
          onClick={handleAnalyze}
          disabled={analyzeMutation.isPending}
          style={{ marginLeft: "10px" }}
        >
          {analyzeMutation.isPending ? "Analyzing..." : "Analyze"}
        </button>

      </div>

      {analysis && (
        <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "10px" }}>

          <h4>Emotion Analysis</h4>

          <p><strong>Emotion:</strong> {analysis.emotion}</p>

          <p><strong>Keywords:</strong> {analysis.keywords?.join(", ")}</p>

          <p><strong>Summary:</strong> {analysis.summary}</p>

        </div>
      )}

    </div>
  );
}