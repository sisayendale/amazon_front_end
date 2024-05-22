import React, { useContext, useEffect } from "react";
import Routing from "./Router";
import {Type} from "./Utility/action.type";
import{auth} from "./Utility/firebase" 
import { DataContext } from "./Components/DataProvider/DataProvider";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
       console.log(authuser);
       dispatch({
        type: Type.SET_USER,
        user: authuser,
         
       })
      }else{
        dispatch({
          type: Type.SET_USER,
          user: null,
        })
      }
      
    })
   // const [{ user }, dispatch] = useContext(DataContext);
  }, []);

  return <Routing />;
}

export default App;
