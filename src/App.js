// import HeadlineCards from './Components/HeadlineCards';
import CategoryComponents from "./Components/CategoryComponents";
import Food from "./Components/Food";
import HeadLineCardsComponent from "./Components/HeadLineCardsComponent";
import Hero from "./Components/Hero";
import NavbarComponents from "./Components/NavbarComponents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponents className="" />
      {/* <div className="fixed inset-0 bg-black  bg-opacity-30 backdrop-blur-md">
        <Login />
      </div> */}

      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Hero />
              <Food />
              <HeadLineCardsComponent />
            </div>
          }
        />

        <Route
          path="category"
          element={
            <>
              <CategoryComponents />
            </>
          }
        />

        <Route
          path="Foods"
          element={
            <>
              <Hero />
              <Food />
            </>
          }
        />

        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
