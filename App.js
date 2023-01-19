import React from "react";
import ReactDOM  from "react-dom/client";
import Footer from "./Footer";
import Headers from "./src/Headers";
import Body from "./src/Body";

    const Applayout=()=>{
    return (

        <React.Fragment>
          <Headers />
          <Body/>
          <Footer />
        </React.Fragment>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render (<Applayout/>);
  