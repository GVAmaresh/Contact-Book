import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo-img" src="./logo.png" alt="logo" />
      </div>
      <div className="login">
        <div
          className="photo"
          style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREbfcIaisz_Ng9xhPh7GWeDKO7xTjtTvcEHA&usqp=CAU")`,
            // : `url("https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg")`,
          }}
        ></div>
        <div className="">
          <div className="name">Nireeksha</div>
          <div className="email">nireeksha@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
