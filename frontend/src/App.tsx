import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@components/Layout";
import HomePage from "@pages/HomePage";
import NoPage from "@pages/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
