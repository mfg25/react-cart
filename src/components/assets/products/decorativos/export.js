import React from "react";
import g801 from "./g801.png";
import g802 from "./g802.png";
import g803 from "./g803.png";
import g1251 from "./g1251.png";
import t301 from "./t301.png";

const shirtExport = () => {
  return [
    {
      name: "Lâmpada Decorativa Retro Vintage Âmbar Filamento Led G80 E27",
      id: "g801",
      images: [g801, g803, g802],
      productLink:
        "https://produto.mercadolivre.com.br/MLB-2751475558-lmpada-decorativa-retro-vintage-mbar-filamento-led-g80-e27-_JM",
      tableData: [
        ["Potência", "4w"],
        ["Voltagem", "110/220v Bivolt"],
        ["Fluxo Luminoso", "360lm"],
        ["Ângulo de Abertura", "360°"],
        ["Temperatura de Cor", "2200k"],
        ["IRC", ">80"],
        ["Corrente", "30-50mA"],
        ["Soquete", "E27 "],
        ["Fator de potência", "0,5"],
      ],
    },
    {
      name: "Lâmpada Filamento Led G125 Branco Quente Âmbar Retrô Bivolt",
      id: "g802",
      images: [g1251],
      productLink:
        "https://produto.mercadolivre.com.br/MLB-3253111709-lmpada-filamento-led-g125-branco-quente-mbar-retr-bivolt-_JM",
    },
    {
      name: "Lampada Filamento Led G95 Retrô Vintage Âmbar Bivolt",
      id: "g1251",
      images: [g1251],
      productLink:
        "https://produto.mercadolivre.com.br/MLB-3253111709-lmpada-filamento-led-g125-branco-quente-mbar-retr-bivolt-_JM",
    },
    {
      name: "Lâmpada Filamento Led T30 Branco Quente Âmbar Retrô Bivolt",
      id: "t301",
      images: [t301],
      productLink:
        "https://produto.mercadolivre.com.br/MLB-3289370426-lmpada-filamento-led-t30-branco-quente-mbar-retr-bivolt-_JM",
    },
  ];
};

export default shirtExport;
