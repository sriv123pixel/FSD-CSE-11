import UserLayout from "./pages/UserLayout";
import "./App.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemStore from "./components/ItemStore";
import MyCart from "./components/MyCart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<ItemStore />} />

          <Route path="mycart" element={<MyCart />} />
          <Route path="myorder" element={<h1>MyOrder</h1>} />
          <Route path="myprofile" element={<h1>MyProfile</h1>} />
          <Route path="settings" element={<h1>Settings</h1>} />
          <Route path="logout" element={<h1>Logout</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;