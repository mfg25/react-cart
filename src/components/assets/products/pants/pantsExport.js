import React from "react";
import pants1 from "./pants1.jpg";
import pants2 from "./pants2.jpg";
import pants3 from "./pants3.jpg";
import pants4 from "./pants4.jpg";
import pants5 from "./pants5.jpg";
import pants6 from "./pants6.jpg";
const pantsExport = () => {
  return [
    {
      name: "Calça Classic Logo III",
      id: "pants1",
      price: 275,
      image: pants1,
    },
    {
      name: "Calça Classic Logo II",
      id: "pants2",
      price: 240,
      image: pants2,
    },
    {
      name: "Calça Reflecting",
      id: "pants3",
      price: 250,
      image: pants3,
    },
    {
      name: "Calça Grey Camo II",
      id: "pants4",
      price: 220,
      image: pants4,
    },
    {
      name: "Calça Classic Logo",
      id: "pants5",
      price: 240,
      image: pants5,
    },
    {
      name: "Calça INV2X21",
      id: "pants6",
      price: 200,
      image: pants6,
    },
  ];
};

export default pantsExport;
