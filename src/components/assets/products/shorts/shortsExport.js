import React from "react";
import shorts1 from "./shorts1.jpg";
import shorts2 from "./shorts2.jpg";
import shorts3 from "./shorts3.jpg";
import shorts4 from "./shorts4.jpg";
import shorts5 from "./shorts5.jpg";
import shorts6 from "./shorts6.jpg";
const shortsExport = () => {
  return [
    {
      name: "Short Família",
      id: "shorts1",
      price: 265,
      image: shorts1,
    },
    {
      name: "Short Spray",
      id: "shorts2",
      price: 190,
      image: shorts2,
    },
    {
      name: "Short Família",
      id: "shorts3",
      price: 265,
      image: shorts3,
    },
    {
      name: "Short Reflecting",
      id: "shorts4",
      price: 200,
      image: shorts4,
    },
    {
      name: "Short Utility",
      id: "shorts5",
      price: 200,
      image: shorts5,
    },
    {
      name: "Short Utility",
      id: "shorts6",
      price: 200,
      image: shorts6,
    },
  ];
};

export default shortsExport;
