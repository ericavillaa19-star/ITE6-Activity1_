import { Routes, Route } from "react-router-dom";

// Import the pages
import Activity1 from "./pages/Activity1/Activity1";
import Activity2 from "./pages/Activity2/Activity2";
import Activity3 from "./pages/Activity3/Activity3";
import Activity4 from "./pages/Activity4/Activity4";

function App() {
  return (
    <Routes>

      {/* If the URL is "/" show Activity1 */}
      <Route path="/" element={<Activity1 />} />

      {/* If the URL is "/activity2" show Activity2 */}
      <Route path="/activity2" element={<Activity2 />} />

      {/* If the URL is "/activity3" show Activity3 */}
      <Route path="/activity3" element={<Activity3 />} />

      {/* If the URL is "/activity4" show Activity4 */}
      <Route path="/activity4" element={<Activity4 />} />

    </Routes>
  );
}

export default App;