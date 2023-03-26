import React from "react";
import shirt1 from "./shirt1.png";
import shirt2 from "./shirt2.png";
import shirt3 from "./shirt3.png";
import shirt4 from "./shirt4.png";
import shirt5 from "./shirt5.png";
const shirtExport = () => {
  return [
    {
      name: "Camiseta Família III",
      id: "shirt1",
      price: 105,
      image: shirt1,
    },
    {
      name: "Camiseta Classic RXPT",
      id: "shirt2",
      price: 115,
      image: shirt2,
    },
    {
      name: "Camiseta Família III",
      id: "shirt3",
      price: 120,
      image: shirt3,
    },
    {
      name: "Camiseta Família III",
      id: "shirt4",
      price: 105,
      image: shirt4,
    },
    {
      name: "Camiseta Spray",
      id: "shirt5",
      price: 95,
      image: shirt5,
    },
  ];
};

export default shirtExport;
