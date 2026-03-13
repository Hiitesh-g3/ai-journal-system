import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Journals from "./pages/Journals";
import Insights from "./pages/Insights";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/journals" element={<Journals />} />

          <Route path="/insights" element={<Insights />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;