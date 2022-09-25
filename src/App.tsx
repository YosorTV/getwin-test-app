import { Layout } from "components";
import { Details, Home } from "screens";
import { Route, Routes, Navigate } from "react-router";

import "styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:name" element={<Details />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
