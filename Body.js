import React, { useState } from "react"
import {restaulist} from "./Config.js"
import Restaucard from "./Restaucard.js"


filterData=(searchtext,restaurantL)=>{
  const filterData=restaurantL.filter((restrau)=>restrau?.data?.name?.toLowerCase()?.includes(searchtext.toLowerCase()));
  return filterData;
}

    const Body=()=>{
      const [searchtext, setSarchText]=useState();
      const [restaurantL,setRestaurantL]=useState(restaulist);
      
        return(
        <React.Fragment>
          <input type="text" value={searchtext} placeholder="search" onChange={(e)=>{setSarchText(e.target.value)}}/>
          <button onClick={()=> {const data=filterData(searchtext,restaurantL);
          setRestaurantL(data)}}>search</button>


        <div className="body">
          {restaurantL.map((restaurant)=>{
            return(<Restaucard {...restaurant.data} key={restaurant.data.id}/>)
          })}
          {/* <Restaucard restaurant={restaulist[0]}/>
          <Restaucard restaurant={restaulist[1]}/>
          <Restaucard restaurant={restaulist[2]}/>
          <Restaucard restaurant={restaulist[3]}/>
          <Restaucard restaurant={restaulist[4]}/>
        <Restaucard restaurant={restaulist[5]}/> */}

        </div></React.Fragment>
 
        )
      } 
      
  // const RestrauntCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString,}) => {
  //   return (
  //     <div className="card">
  //       <img
  //         src={
  //           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
  //           cloudinaryImageId
  //         }
  //       />
  //       <h2>{name}</h2>
  //       <h3>{cuisines.join(", ")}</h3>
  //       <h4>{lastMileTravelString} minutes</h4>
  //     </div>
  //   );
  // };

  export default Body;
  