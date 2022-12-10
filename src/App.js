import Header from "./components/Header";
import Home from "./components/Home";
import GlobalStyle from "./Styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Session from "./components/Session";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sessoes/:idMovie" element={<Session/>}/>
      </Routes>
    </BrowserRouter>
  );
}