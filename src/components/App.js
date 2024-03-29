// import React, {Component} from "react";
// import { render} from "react-dom";
// import HomePage from "./HomePage";


// // const App = ()=> 
// //     <div>
// //         <HomePage/>
       
// //     </div>


// // export default App



// // const appDiv = document.getElementById("app");
// // render(<App/>,appDiv);

// render(
//     <HomePage/>,document.getElementById("app")
// );


import React from "react";
import RoomCreatePage from "./RoomCreatePage";
import RoomJoinPage from "./RoomJoinPage";
import HomePage from "./HomePage";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Room from "./Room";
import { render } from "react-dom";


const App = ()=> {
 
    return (
    <BrowserRouter>
        <Routes>

            
            <Route path="/join" element={<RoomJoinPage />}/>
            <Route path="/create" element={<RoomCreatePage />} />
            <Route path="/room/:roomCode" element={<Room />} />
            <Route path="/" element={<HomePage />}/>
            
        
            
        </Routes>
  
    </BrowserRouter>
    )
}

export default App