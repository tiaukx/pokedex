import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Navi from "./components/Navi";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import NotFound from "./components/NotFound";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi />
      </header>
      <body className="app-body">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Favourites" element={<Favourites />} />
            <Route exact path="/Search" element={<Search />} />
            <Route path="*" element={<NotFound />} ></Route>
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;