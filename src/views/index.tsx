import { Routes, Route } from "react-router-dom";
import Page1 from "./page-1/page";
import Page2 from "./page-2/page";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/layout-style" element={<Page2 />} />
      </Routes>
    </>
  );
};

export default App;
