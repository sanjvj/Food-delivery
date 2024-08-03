import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your Favourite food here</h2>
        <p>
          Craving something delicious? We bring the best
          restaurants and cuisines straight to your doorstep. Whether you're in
          the mood for comfort food, healthy options, or an indulgent treat, our
          platform makes it easy to satisfy your cravings.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
