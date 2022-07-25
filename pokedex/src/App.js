import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navi from "./components/Navi";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi />
      </header>
      <body>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Favourites" element={<Favourites />} />
            {/* <Route exact path="/Search" element={<Favourites />} /> */}
            <Route path="*" element={<NotFound />} ></Route>
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;