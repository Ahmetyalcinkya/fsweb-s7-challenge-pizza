import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "../Assets/logo.svg";
import "./Success.css";

export default function Success() {
  const location = useLocation();
  const dataReceived = location.state;
  console.log(dataReceived);
  // if (!dataReceived) {
  //   return <div>Veri bulunamadı.</div>;
  // }
  return (
    <div id="success-page-container" style={{ height: "100vh" }}>
      <div id="success-header">
        <img src={Banner} alt="" />
      </div>
      <div id="success-page-content">
        <div id="success-page-content-container">
          <p id="message">lezzetin yolda</p>
          <h2>SİPARİŞ ALINDI</h2>
        </div>
        <hr
          className="custom-hr"
          style={{
            width: "30%",
            margin: "0 auto",
            color: "white",
            borderWidth: ".15rem",
            borderStyle: "solid",
          }}
        />
        <div id="succes-page-content-container-two">
          <p id="product-name">{dataReceived.pizzaName}</p>
          <div id="success-page-details">
            <div id="pizza-infos">
              <p>Pizza Boyutu: {dataReceived.size}</p>
              <p>Hamur Kalınlığı: {dataReceived.dough}</p>
              <p>Ek Malzemeler: {dataReceived.toppingList.join(", ")}</p>
              <p>Toplam Fiyat: {dataReceived.price} ₺</p>
            </div>
            <div>
              <p
                style={{
                  width: "30%",
                  color: "white",
                  margin: "0 auto",
                }}
              >
                Sayın {dataReceived.name}, {dataReceived.pizzaName} isimli pizza
                siparişiniz, {dataReceived.address} adresinize gönderilmek üzere
                hazırlanıyor.
              </p>
              <div id="user-info">
                <h4>{dataReceived.name}</h4>
                <h4>{dataReceived.phone}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
