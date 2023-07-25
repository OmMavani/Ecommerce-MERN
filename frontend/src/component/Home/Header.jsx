// eslint-disable-next-line
import React, { useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
const { cartItems } = useSelector((state) => state.cart);
const { favouriteItems } = useSelector((state) => state.favourite);

const switcherTab = useRef(null);
  
window.addEventListener("scroll", () =>{
  if(window.pageYOffset > 100){
      document.querySelector(".navbar").classList.add("active");
  }
  else{
    document.querySelector(".navbar").classList.remove("active");
  }
})

  return (
    <div className="Header">
    {/* Header TopBar */}
    <div className="Header__topbar space__beetween">
      {/* Topbar Left */}
      <div className="logo pxy__10">
        <Link to="/">
          <img
            src="https://img.icons8.com/?size=1x&id=H8eSSjTJbXur&format=png"
            alt=""
            className="logo"
            style={{
              width: "150px",
              height: "100px",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </Link>
      </div>
      {/* Topbar Middle */}

      {/* <div
        className="searchBoxHome"
        style={{
          width: "50%",
          position: "relative",
        }}
      >
        <div
          className="inputBox"
          style={{
            display: "flex",
            alignItems: "center",
            height: "30px",
            width: "100%",
            background: "tomato",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              color: "#fff",
            }}
          >
            Have a nice day
          </span>
        </div>
      </div> */}

      <div
        className="flex align__items__center"
        style={{
          margin: "0px 10px",
        }}
      >
        <div>
        <img
            src="https://img.icons8.com/?size=512&id=HyjRWfleuVje&format=png"
            alt=""
            style={{
              width: "40px",
              height: "40px"
            }}
          />
        </div>
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: "1rem",
          }}
        >
          <strong style={{
            padding:"0px 5px"
          }}>Email:</strong> ommavani4444@gmail.com
        </span>
      </div>
    </div>
    {/* Header Navbar */}
    <div className="navbar flex pz__10 space__beetween" ref={switcherTab}>
      <div
       className="navigation"
       style={{
         padding:"0px 50px"
       }}
      >
        <ul
          style={{
            fontFamily: "sans-serif",
            cursor: "pointer",
            display: "flex",
            listStyle: "none",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/Products">
            <li>Products</li>
          </Link>
          <Link to="/creator">
            <li>Become A Seller</li>
          </Link>
          <Link to="/faq">
            <li>Users Rules</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <div className="rightOption flex align__items__center">
        <div>
          <Link to="/search">
          <img
            src="https://img.icons8.com/?size=512&id=sjKEiZRymA8g&format=png"
            alt=""
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px"
            }}
          />
          </Link>
        </div>
        <div className="heart__products flex pointer relative">
          <Link to="/favourites">
          <img
            src="https://img.icons8.com/?size=512&id=Je4sVA3mrKlq&format=png"
            alt=""
            style={{
              width: "35px",
              height: "35px",
              marginLeft: "10px"
            }}
          />
          </Link>
          <div
            className="heart__numbers"
            style={{
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              backgroundColor: "#95C730",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "-40%",
              right: "3.5%",
            }}
          >
            <span>{favouriteItems.length}</span>
          </div>
        </div>
        <div className="cart__items flex align__items__center">
          <div className="cart__items flex pointer relative">
            <Link to="/cart">
            <img
            src="https://img.icons8.com/?size=512&id=xf1cbYSfMy5h&format=png"
            alt=""
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "15px"
            }}
          />
            </Link>
            <div
              className="heart__numbers"
              style={{
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "#95C730",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "-40%",
                right: "3.5%",
              }}
            >
              <span>{cartItems.length}</span>
            </div>
          </div>
        </div>
        <div className="user__account flex pointer">
          <Link to="/login">
          <img
            src="https://img.icons8.com/?size=512&id=VXv48W92SIFO&format=png"
            alt=""
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "15px",
              marginRight: "30px"
            }}
          />
          </Link>
        </div>
      </div>
    </div>
  </div>
   
  );
};

export default Header;