import React from "react";
import Card from "./Card";
const Main = ({ initialData }) => {
  return (
    <>
      <div className="main-cont">
        <div className="user">
          <p>username</p>
        </div>
        {initialData.map((card) => (
          <Card
            id={card.id}
            className={card.className}
            name={card.name}
            img={card.img}
          />
        ))}
      </div>
    </>
  );
};
export default Main;
