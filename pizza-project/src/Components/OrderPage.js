import React from "react";
import "./OrderPage.css";
import Footer from "./Footer";
import Banner from "../Assets/logo.svg";
import Banner2 from "../Assets/adv-aseets/adv-form-banner.png";
import Navigation from "./Navigation";
import dummyData from "./DummyData";

export default function OrderPage(props) {
  const {
    formData,
    submitHandler,
    changeHandler,
    isValid,
    formErr,
    totalPrice,
    checkChangeHandler,
  } = props;

  const toppingsList = [
    { value: "pepperoni", label: "Pepperoni" },
    { value: "domates", label: "Domates" },
    { value: "biber", label: "Biber" },
    { value: "sosis", label: "Sosis" },
    { value: "mısır", label: "Mısır" },
    { value: "sucuk", label: "Sucuk" },
    { value: "ananas", label: "Ananas" },
    { value: "jalepeno", label: "Jalepeno" },
    { value: "kabak", label: "Kabak" },
    { value: "soğan", label: "Soğan" },
    { value: "sarımsak", label: "Sarımsak" },
    { value: "mantar", label: "Mantar" },
    { value: "zeytin", label: "Zeytin" },
    { value: "kanada jambonu", label: "Kanada Jambonu" },
    { value: "tavuk ızgara", label: "Tavuk Izgara" },
  ];
  return (
    <div>
      <header>
        <div
          className="banner-div"
          style={{ background: "#CE2829", padding: "1rem" }}
        >
          <img src={Banner} alt="" />
        </div>
        <div className="info-div" style={{ background: "#FAF7F2" }}>
          <img src={Banner2} alt="" />
          <Navigation />
          <div
            className="pizza-info"
            style={{ width: "30%", margin: "0 auto" }}
          >
            <h4>{dummyData[1].name}</h4>
            <div
              className="pizza-price-point"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p>{dummyData[1].price}</p>
              <p>{dummyData[1].point}</p>
            </div>
            <p style={{ textAlign: "left", paddingBottom: "2rem" }}>
              {dummyData[1].description}
            </p>
          </div>
        </div>
      </header>
      <form onSubmit={submitHandler} className="order-form">
        <div
          style={{
            display: "flex",
            width: "30%",
            margin: "0 auto",
            justifyContent: "space-between",
            paddingBottom: "1.5rem",
          }}
        >
          <div className="form-group">
            <label
              htmlFor="size"
              style={{ textAlign: "left", paddingBottom: ".5rem" }}
            >
              Boyut Seç{" "}
              <span className="span" style={{ color: "#CE2829" }}>
                *
              </span>
            </label>
            <select
              data-cy="dropdown"
              id="size"
              name="size"
              value={formData.size}
              onChange={changeHandler}
              required
              style={{
                border: "none",
                padding: "0.5rem",
                background: "#FAF7F2",
                width: "100%",
                height: "2.5rem",
              }}
            >
              <option value="">-- Boyut Seçin --</option>
              <option value="Küçük" data-cy="dropdown-item2">
                Small
              </option>
              <option value="Orta">Medium</option>
              <option value="Büyük">Large</option>
            </select>
          </div>
          <div className="form-group">
            <label
              htmlFor="dough"
              style={{ textAlign: "left", paddingBottom: ".5rem" }}
            >
              Hamur Seç{" "}
              <span className="span" style={{ color: "#CE2829" }}>
                *
              </span>
            </label>
            <select
              id="dough"
              name="dough"
              value={formData.dough}
              onChange={changeHandler}
              required
              style={{
                border: "none",
                padding: "0.5rem",
                background: "#FAF7F2",
                width: "100%",
                height: "2.5rem",
              }}
            >
              <option value="">-- Hamur Kalınlığı Seç --</option>
              <option value="İnce">İnce Hamur</option>
              <option value="Standart">Standart</option>
              <option value="Kalın">Kalın Hamur</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label style={{ textAlign: "left", fontWeight: "bolder" }}>
            Ek Malzemeler
          </label>
          <label style={{ textAlign: "left" }}>
            En Fazla 10 Malzeme seçebilirsiniz. 5₺
          </label>
          <div className="checkbox-group">
            {toppingsList.map((topping) => (
              <label key={topping.value} style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  checked={formData.toppingList.indexOf(topping) !== -1}
                  onChange={checkChangeHandler}
                  name={topping.value}
                  data-cy="checkbox-input"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    marginRight: ".5rem",
                    background: "#FAF7F2",
                  }}
                />
                {topping.label}
              </label>
            ))}
          </div>
          {formErr.topping && (
            <div className="error-message">{formErr.topping}</div>
          )}
          {console.log(formData)}
        </div>
        <div className="form-group">
          <label
            htmlFor="note"
            style={{ textAlign: "left", fontWeight: "bolder" }}
          >
            Sipariş Notu
          </label>
          <input
            id="note"
            name="note"
            value={formData.note}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            onChange={changeHandler}
            style={{
              padding: "0.5rem 2rem",
              border: "none",
              background: "#FAF7F2",
              marginTop: "1rem",
              height: "3rem",
            }}
          ></input>
        </div>
        <hr
          style={{
            width: "30%",
            margin: "0 auto",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        />
        <div className="personal-info">
          <div className="personal-group">
            <label
              htmlFor="note"
              style={{ textAlign: "left", fontWeight: "bolder" }}
            >
              İsim
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              placeholder="İsminizi Giriniz..."
              onChange={changeHandler}
              style={{
                padding: "0.5rem 2rem",
                border: "none",
                background: "#FAF7F2",
                marginTop: "1rem",
                height: "3rem",
              }}
            ></input>
            <label
              htmlFor="note"
              style={{ textAlign: "left", fontWeight: "bolder" }}
            >
              Telefon
            </label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="Telefon Numaranızı Giriniz..."
              onChange={changeHandler}
              style={{
                padding: "0.5rem 2rem",
                border: "none",
                background: "#FAF7F2",
                marginTop: "1rem",
                height: "3rem",
              }}
            ></input>
            <label
              htmlFor="note"
              style={{ textAlign: "left", fontWeight: "bolder" }}
            >
              Adres
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              placeholder="Adres Bilginizi Giriniz..."
              onChange={changeHandler}
              style={{
                padding: "0.5rem 2rem",
                border: "none",
                background: "#FAF7F2",
                marginTop: "1rem",
                height: "3rem",
              }}
            ></textarea>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "30%",
            margin: "0 auto",
            justifyContent: "space-between",
          }}
        >
          <div className="count-group" style={{ width: "20%" }}>
            <input
              type="number"
              id="count"
              name="count"
              value={formData.count}
              onChange={changeHandler}
              min="1"
              style={{
                width: "6rem",
                border: "none",
                background: "#FAF7F2",
                textAlign: "center",
                height: "2.5rem",
              }}
            />
          </div>
          <div
            style={{
              width: "70%",
              background: "#FAF7F2",
              marginBottom: "2rem",
            }}
          >
            <h6
              style={{
                textAlign: "left",
                marginLeft: "5.25rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              Sipariş Toplamı
            </h6>
            <div
              className="order-group"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 1rem 0 1rem",
              }}
            >
              <label htmlFor="total-price">Seçimler</label>
              {/* <span id="total-price">{formData.topping.length * 5} ₺</span> */}
            </div>
            <div
              className="order-group"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 1rem 0 1rem",
              }}
            >
              <label htmlFor="total-price">Toplam Fiyat</label>
              <span id="total-price">{totalPrice()} ₺</span>
            </div>
            <div className="order-button" style={{ width: "100%" }}>
              <button
                type="submit"
                // disabled={!isValid}
                style={{
                  width: "100%",
                  marginTop: "2rem",
                  border: "none",
                  background: "#FDC913",
                  color: "black",
                  paddingBottom: ".75rem",
                  paddingTop: ".75rem",
                  cursor: "pointer",
                  borderRadius: ".25rem",
                }}
                onClick={() => submitHandler()}
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
