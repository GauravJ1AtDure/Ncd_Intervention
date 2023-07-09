import React from "react";
/*import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "./redux/slice/Slice";*/
import NcdIntervention from "./components/NcdIntervention";
import Cardiovascular from "./components/ncdChilds/Cardiovascular";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NcdIntervention/>}/>
      <Route path="/cardiovascular" element={<Cardiovascular/>}/> 
     </Routes>
     </BrowserRouter>
  );
}

export default App;
