Restaucard=({name, cuisines,costForTwo})=>{
   
    return(
      <div className="cards">
        {/* <img src={"https://play.google.com/store/apps/details?id"+
        restaulist[0].data?.cloudinaryImageId}/> */}
        {/* <h2>{props.restaurant.data?.name}</h2> */}
        <h2>{name}</h2>
        {/* <h3>{props.restaurant.data?.cuisines}</h3> */}
        <h3>{cuisines}</h3>
        {/* <h4>{props.restaurant.data?.costForTwo}</h4> */}
        <h4>{costForTwo}</h4>
      </div>)
  }
  export default Restaucard;