// import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./pages/Table";

export default function AppRouter() {
  return (
    <main>
      <Router>
        {/* <Menu /> */}
        <Routes>
          <Route path="/">
            <Route path="table" element={<Table />} />
          </Route>
        </Routes> 
      </Router>
    </main>
  ); 
}
