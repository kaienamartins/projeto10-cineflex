import Header from "./components/Header";
import Home from "./components/Home";
import GlobalStyle from "./Styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Session from "./components/Session";
import Seats from "./components/Seats";
import Success from "./components/Success";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<Session />} />
        <Route path="/assentos/:idSessao" element={<Seats />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
