import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Log from "./components/Logo";
import PrivateRoute from "./components/PrivateRoute";
import OnlyfinancialPrivateRoute from "./components/OnlyfinancialPrivateRoute";
import Crt from "./pages/Createpaysheet";
import Tab from "./pages/Table";
import Update from "./pages/Update";

export default function App() {
  return (
    <BrowserRouter>
      <Log />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<PrivateRoute />}></Route>

        <Route element={<OnlyfinancialPrivateRoute />}>
          <Route path="/crt" element={<Crt />} />
          <Route path="/table" element={<Tab />} />
          <Route path="/update/:PayId" element={<Update />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
