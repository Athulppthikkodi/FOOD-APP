import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import "../scss/home.scss";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-content">
        <div className="banner">
          <Carousel />
          <div className="search-section">
            <div className="container">
              <div className="search-wrap">
                <input type="search" />
                <button>Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
