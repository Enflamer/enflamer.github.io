import React from "react";
import "../style/comeback.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Comeback() {
  return (
    <Link to="/enflamer-portfolio">
      <div className="comeback">Вернуться назад</div>
    </Link>
  );
}
