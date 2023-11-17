import React from "react";
const Navbar = ({ onCreateClick }) => {
  const handleCreateClick = async () => {
    await onCreateClick();
  };
  return (
    <>
      <div className="navbar-cont">
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + "/images/instalogo.png"}
            alt="notfound"
          />
        </div>
        <ul className="menu">
          <li>
            <i class="fa-solid fa-house font"></i>
            <p>
              <b>Home</b>
            </p>
          </li>
          <li>
            <i class="fa-solid fa-magnifying-glass font"></i>
            <p>Search</p>
          </li>
          <li>
            <img
              className="reel-icon"
              src="https://seeklogo.com/images/I/instagram-reels-logo-18CF7D9510-seeklogo.com.png"
              style={{ width: "29px", height: "29px", filter: "invert(100%)" }}
              alt="notfound"
            />

            <p>Reels</p>
          </li>
          <li>
            <i class="fa-solid fa-comment font"></i>
            <p>Messages</p>
          </li>
          <li>
            <i
              class="fa-regular fa-heart font"
              style={{ fontSize: "28px" }}
            ></i>
            <p>Notifications</p>
          </li>
          <div className="post-create-icon">
            <li onClick={handleCreateClick}>
              <i class="fa-solid fa-plus font"></i>
              <p>Create</p>
            </li>
          </div>
          <li>
            <i class="fa-solid fa-bars font"></i>
            <p>More</p>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
