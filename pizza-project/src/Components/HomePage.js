import React from "react";
import "./HomePage.css";
import Banner from "../Assets/logo.svg";
import MVPBanner from "../Assets/mvp-banner.png";
import Icon1 from "../Assets/adv-aseets/icons/1.svg";
import Icon2 from "../Assets/adv-aseets/icons/2.svg";
import Icon3 from "../Assets/adv-aseets/icons/3.svg";
import Icon4 from "../Assets/adv-aseets/icons/4.svg";
import Icon5 from "../Assets/adv-aseets/icons/5.svg";
import Icon6 from "../Assets/adv-aseets/icons/6.svg";
import Icon7 from "../Assets/adv-aseets/kart-1.png";
import Icon8 from "../Assets/adv-aseets/kart-2.png";
import Icon9 from "../Assets/adv-aseets/kart-3.png";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import dummyData from "./DummyData";
import Footer from "./Footer";
import PizzaCard from "./PizzaCard";

export default function HomePage() {
  return (
    <div>
      <header className="photo-container">
        <div className="banner-text">
          <img src={Banner} className="tek-food" alt="title" />
          <h4>fırsatı kaçırma</h4>
          <h1>KOD ACIKTIRIR</h1>
          <h1>PİZZA DOYURUR</h1>
          <Link
            data-cy="aciktim-button"
            to="/pizza"
            id="order-pizza"
            class="bg-warning py-2 px-5 rounded-5 text-decoration-none text-black"
            style={{ cursor: "pointer" }}
          >
            ACIKTIM
          </Link>
        </div>
        <img className="home-banner" src={MVPBanner} alt="mvp-banner" />
      </header>
      <div className="nav-div">
        <Nav
          class="d-flex"
          style={{
            width: "70%",
            margin: "0 auto",
            justifyContent: "space-around",
            paddingTop: ".5rem",
            paddingBottom: ".5rem",
          }}
        >
          <NavItem className="navlink-item">
            <NavLink disabled href="#">
              <img src={Icon1} alt="icon1" />
              YENİ!Kore
            </NavLink>
          </NavItem>
          <NavItem className="navlink-item">
            <NavLink disabled href="#">
              <img src={Icon2} alt="icon2" />
              Pizza
            </NavLink>
          </NavItem>
          <NavItem className="navlink-item">
            <NavLink disabled href="#">
              <img src={Icon3} alt="icon3" />
              Burger
            </NavLink>
          </NavItem>
          <NavItem className="navlink-item">
            <NavLink disabled href="#">
              <img src={Icon4} alt="icon4" />
              Kızartmalar
            </NavLink>
          </NavItem>
          <NavItem className="navlink-item">
            <NavLink disabled href="#">
              <img src={Icon5} alt="icon5" />
              Fast food
            </NavLink>
          </NavItem>
          <NavItem className="navlink-item">
            <NavLink disabled href="#">
              <img src={Icon6} alt="icon6" />
              Gazlı İçecek
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <section>
        <div className="order-div" id="order-div">
          <div className="order-div1">
            <div className="order-div1-text">
              <h1>Özel Lezzetus</h1>
              <h4>Position Absolute Acı Burger</h4>
              <button className="order-btn">
                <a href="#menus">SİPARİŞ VER</a>
              </button>
            </div>
            <img src={Icon7} className="order-div1-img" alt="" />
          </div>

          <div className="order-div2">
            <div className="order-div2-1">
              <div className="order-div2-text">
                <h2>Hackathlon </h2>
                <h2>Burger Menü</h2>
                <button className="order-btn">
                  <a href="#menus">SİPARİŞ VER</a>
                </button>
              </div>
              <img src={Icon8} alt="" className="order-div2-1-img" />
            </div>
            <div className="order-div2-2">
              <div className="order-div2-2-text">
                <h2>
                  <span className="order-div2-2-span">Çoooook</span> hızlı
                </h2>
                <h2>npm gibi kurye</h2>
                <button className="order-btn">
                  <a href="#menus">SİPARİŞ VER</a>
                </button>
              </div>
              <img src={Icon9} alt="" className="order-div2-2-img" />
            </div>
          </div>
        </div>
        <h4 className="section-h4">en çok paketlenen menüler</h4>
        <h2 className="section-h2">Acıktıran Kodlara Doyuran Lezzetler</h2>
        <div className="nav-div2">
          <Nav
            class="d-flex"
            style={{
              width: "70%",
              margin: "0 auto",
              justifyContent: "space-around",
              paddingTop: ".5rem",
              paddingBottom: ".5rem",
            }}
          >
            <NavItem style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>
              <NavLink disabled href="#">
                <img src={Icon1} alt="icon1" />
                Ramen
              </NavLink>
            </NavItem>
            <NavItem style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>
              <NavLink disabled href="#">
                <img src={Icon2} alt="icon2" />
                Pizza
              </NavLink>
            </NavItem>
            <NavItem style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>
              <NavLink disabled href="#">
                <img src={Icon3} alt="icon3" />
                Burger
              </NavLink>
            </NavItem>
            <NavItem style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>
              <NavLink disabled href="#">
                <img src={Icon4} alt="icon4" />
                French fries
              </NavLink>
            </NavItem>
            <NavItem style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>
              <NavLink disabled href="#">
                <img src={Icon5} alt="icon5" />
                Fast food
              </NavLink>
            </NavItem>
            <NavItem style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>
              <NavLink disabled href="#">
                <img src={Icon6} alt="icon6" />
                Soft drinks
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className="pizza-menu" id="menus">
          {dummyData.map((e) => {
            return <PizzaCard dummyData={e} />;
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}
