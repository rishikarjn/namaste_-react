import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import {useState,useEffect} from "react";


  

const Body = () => {
  //Local State Variable-Super powerful Variable
  const[listOfRestaurants,setListOfRestraunt]=useState([]);
     
 useEffect(()=>{
  fetchData();
 },[]);

 const fetchData=async()=>{
   const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json=await data.json();
   console.log(json);
   setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 };


    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=> {
            //Filter logic here
            const filteredList=listOfRestaurants.filter(
              (res)=> res.info.avgRating > 4
            );

            setListOfRestraunt(filteredList);
          }}
          >
            Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id}resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;



















