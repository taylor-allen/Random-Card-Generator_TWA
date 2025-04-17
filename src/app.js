import "bootstrap";
import "./style.css";

window.onload = () => {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const topSuit = document.querySelector(".top-suit");
  const bottomSuit = document.querySelector(".bottom-suit");
  const cardValue = document.querySelector(".card-value");
  const button = document.getElementById("generate");

  button.addEventListener("click", () => {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];

    topSuit.textContent = suit;
    bottomSuit.textContent = suit;
    cardValue.textContent = value;

    const color = (suit === "♥" || suit === "♦") ? "red" : "black";
    topSuit.style.color = color;
    bottomSuit.style.color = color;
    cardValue.style.color = color;
  });
};


