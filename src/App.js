import { BrowserRouter, Route, Routes } from "react-router-dom";

import GitHome from "./components/Home";
import IssuesPage from "./components/GitIssuesPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<GitHome />} />
      <Route exact path="/github/issues/page" element={<IssuesPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
