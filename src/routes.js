import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./pages/Table";
import Products from "./pages/Products";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/">
            <Route path="tabela" element={<Table />} />
            <Route path="produtos" element={<Products />} />
          </Route>
        </Routes> 
      </Router>
    </main>
  ); 
}
