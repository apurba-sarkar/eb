import React from "react";

export default function Bat({ hero }) {
  if (hero === "joker") {
    throw new Error("not a hero")
  }
  return <div>Bat</div>;
}
