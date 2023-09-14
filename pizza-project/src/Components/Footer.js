import React from "react";
import { FaTwitter } from "react-icons/fa";
import FooIcon1 from "../Assets/adv-aseets/icons/icon-1.png";
import FooIcon2 from "../Assets/adv-aseets/icons/icon-2.png";
import FooIcon3 from "../Assets/adv-aseets/icons/icon-3.png";
import Insta1 from "../Assets/adv-aseets/insta/li-0.png";
import Insta2 from "../Assets/adv-aseets/insta/li-1.png";
import Insta3 from "../Assets/adv-aseets/insta/li-2.png";
import Insta4 from "../Assets/adv-aseets/insta/li-3.png";
import Insta5 from "../Assets/adv-aseets/insta/li-4.png";
import Insta6 from "../Assets/adv-aseets/insta/li-5.png";
import Logo from "../Assets/logo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-div">
          <div
            className="titles-div"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              paddingTop: "2rem",
            }}
          >
            <img
              src={Logo}
              style={{
                width: "33%",
                paddingRight: "5rem",
                marginRight: "5.25rem",
              }}
              alt=""
            />
            <h6
              style={{
                width: "33%",
                textAlign: "left",
                marginRight: "15rem ",
                color: "white",
                marginBottom: "3rem",
              }}
            >
              Sıcacık Yemekler
            </h6>
            <h6 style={{ width: "33%", textAlign: "left", color: "white" }}>
              Instagram
            </h6>
          </div>
          <div
            className="contact-div"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              paddingBottom: "2rem",
            }}
          >
            <div
              className="contact"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "33%",
                justifyContent: "space-around",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  style={{ width: "2rem", height: "2rem", marginRight: "1rem" }}
                  src={FooIcon1}
                  alt=""
                />
                <p>
                  341 Londonderry Road. <br /> Istanbul/Türkiye
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img src={FooIcon2} style={{ marginRight: "1rem" }} alt="" />
                <p>aciktim@teknolojikyemekler.com</p>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img src={FooIcon3} style={{ marginRight: "1rem" }} alt="" />
                <p>+90 216 123 45 67</p>
              </div>
            </div>
            <div
              className="menu"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "33%",
                justifyContent: "space-around",
              }}
            >
              <p>Terminal Pizza</p>
              <p>5 Kişilik Hackathlon Pizza</p>
              <p>useEffect Tavuklu Pizza</p>
              <p>Beyaz Console Frosty</p>
              <p>Testler Geçti Mutlu Burger</p>
              <p>Position Absolute Acı Burger</p>
            </div>
            <div className="instagram">
              <div>
                <img src={Insta1} alt="" />
              </div>
              <div>
                <img src={Insta2} alt="" />
              </div>
              <div>
                <img src={Insta3} alt="" />
              </div>
              <div>
                <img src={Insta4} alt="" />
              </div>
              <div>
                <img src={Insta5} alt="" />
              </div>
              <div>
                <img src={Insta6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <footer
          className="footer-2"
          style={{
            width: "70%",
            display: "flex",
            margin: "0 auto",
            justifyContent: "space-between",
          }}
        >
          <p>© 2023 Teknolojik Yemekler.</p>
          <FaTwitter style={{ color: "white" }} />
        </footer>
      </footer>
    </div>
  );
}
