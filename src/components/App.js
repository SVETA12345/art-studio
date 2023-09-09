import { React, useState} from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Glavnay from "./Glavnay";
import Header from "./Header";
import Stydia from "./Stydia";
import Contacts from "./Contacts";
import ImagePopup from "./ImagePopup";
function App() {
  const [card, setCard]=useState({link: ''})
  function closeAllPopups(){
    setCard({link:''})
  }
  return (
    <div className="page">
      <Header />
      <Routes>
          <Route path="/" element={<Glavnay />} />
          <Route path="/info" element={<Stydia setCard={setCard} />} />
          <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <ImagePopup card={card} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
