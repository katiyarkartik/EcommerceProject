import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CardsDetail from "./components/CardsDetail";
import Cards from "./components/Cards";
import CartData from "./components/CartData";
import Payment from "./components/Payment";
import Login from "./components/Login";
import Signup from "./components/SignUp";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path={"/home"} element={<Cards />}></Route>
        <Route path={"/cart"} element={<CardsDetail />}></Route>
        <Route path={"/cart-data"} element={<CartData />}></Route>
        <Route path={"/payment"} element={<Payment />}></Route>
        <Route path={"/"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
