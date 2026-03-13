import JournalForm from "../components/JournalForm";
import JournalList from "../components/JournalList";

export default function Journals() {
  return (
    <div>
      <h1>Journal Entries</h1>

      <JournalForm />

      <JournalList />
    </div>
  );
}