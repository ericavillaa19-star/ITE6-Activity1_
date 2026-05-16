import { useState, useEffect } from "react"; // React hooks
import { Link } from "react-router-dom"; // Used for navigation between pages
import "./Activity3.css"; // CSS styling for Activity3

function Activity3() {

  // State to store menu data from JSON
  const [menu, setMenu] = useState([]);

  // State to control loading message while fetching data
  const [loading, setLoading] = useState(true);

  // useEffect runs once when the component loads
  useEffect(() => {

    // Fetch data from menu.json inside the public folder
    fetch("/menu.json")

      // Convert the response into JSON format
      .then((response) => response.json())

      // Store the JSON data into the menu state
      .then((data) => {
        setMenu(data);
        setLoading(false); // Stop loading when data is ready
      })

      // Handle errors if fetch fails
      .catch((error) => {
        console.error("Error fetching menu:", error);
        setLoading(false);
      });

  }, []); // Empty dependency array = run only once

  // Show loading text while waiting for data
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="activity3">
      <div className="activity3-container">

        {/* Page Title */}
        <h1>Food Menu</h1>
        <p className="subtitle">Choose your favorite meal</p>

        {/* Grid container for food cards */}
        <div className="menu-grid">

          {/* Loop through menu array and display each food item */}
          {menu.map((item, index) => (
            <div className="menu-card" key={index}>

              {/* Food Image */}
              {/* If the image fails to load, show a default image */}
              <img
                src={item.image}
                alt={item.name}
                onError={(e) => {
                  e.target.src = "/images/default.jpg";
                }}
              />

              {/* Food Information */}
              <div className="menu-info">
                <h3>{item.name}</h3> {/* Food name */}
                <p className="cat">{item.category}</p> {/* Food category */}
                <p className="price">₱{item.price}</p> {/* Food price */}

                {/* Button for ordering */}
                <button className="order-btn">Add to Order</button>
              </div>

            </div>
          ))}

        </div>

        {/* Navigation button to go back to Activity2 */}
        <div className="nav-buttons">
         <Link to="/activity4">
          <button className="next-btn">Next Activity ➜</button>
        </Link>
        
        </div>
           <Link to="/activity2">
            <button>⬅ Back</button>
          </Link>
      </div>
    </div>
  );
}

export default Activity3;