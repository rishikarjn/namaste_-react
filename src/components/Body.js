import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

  

const Body = () => {
     
  let listOfRestaurants=[
    {
    
      
        info: {
          id: "7250823",
          name: "Pizza Hut",
          cloudinaryImageId: "490629b70f89da8a5b93fc199ece335e",
          locality: "Kankar Bagh",
          areaName: "Kankarbagh",
          costForTwo: "₹350 for two",
          cuisines: ["Pizzas"],
          avgRating: 3.8,
    
          sla: {
            deliveryTime: 32,
            

        
      },
    },
      
  },
  {
    
      
    info: {
      id: "725082",
      name: "Domino's Pizza",
      cloudinaryImageId: "490629b70f89da8a5b93fc199ece335e",
      locality: "Kankar Bagh",
      areaName: "Kankarbagh",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.5,

      sla: {
        deliveryTime: 32,
        

    
  },
},
},
];


    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={()=> {
            //Filter logic here
            listOfRestaurants=listOfRestaurants.filter(
              (res)=> res.data.avgRating >4
            );

            console.log(listOfRestaurants);
          }}
          >
            Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id}resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;

















  