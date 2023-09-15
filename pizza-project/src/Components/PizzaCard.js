import React from "react";

export default function PizzaCard(props) {
  const { dummyData } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        background: "white",
        borderRadius: "2.5rem",
        border: ".05rem solid white",
      }}
    >
      <img src={dummyData.imgUrl} alt="" />
      <h4
        style={{
          textAlign: "left",
        }}
      >
        {dummyData.name}
      </h4>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{dummyData.price}</p>
        <p>{dummyData.point}</p>
      </div>
    </div>
  );
}
