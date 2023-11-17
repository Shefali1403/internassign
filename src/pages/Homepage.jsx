import React, { useState } from "react";
import Navbar from "../sections/Navbar";
import Main from "../sections/Main";
import Carddata from "../sections/Carddata";
const Homepage = () => {
  const [cards, setCards] = useState(Carddata);

  const addNewCard = async () => {
    try {
      const response = await fetch("http://localhost:3006/data");
      console.log("Response status:", response.status);
      const arrdata = await response.json();
      console.log(arrdata[0]);
      let rnum = Math.floor(Math.random() * arrdata.length);
      let rdata = arrdata[rnum];
      console.log("the selected data is", rdata);
      console.log(rdata.name);
      setCards((prevcard) => [
        ...prevcard,
        {
          id: rdata.id,
          className: rdata.className,
          name: rdata.name,
          img: rdata.img,
        },
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="container">
        <Navbar onCreateClick={addNewCard} />
        <Main initialData={cards} />
      </div>
    </>
  );
};
export default Homepage;
