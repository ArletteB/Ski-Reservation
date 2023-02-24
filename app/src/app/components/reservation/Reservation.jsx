import * as React from "react";
import "../../../reservation.css";

export default function Reservation() {
  return (
    <div class="container">
      <div class="left-side">
        <img
          src="https://thumbs.dreamstime.com/b/ski-en-hiver-montagne-famille-aux-beaux-jours-france-alpes-au-dessus-des-nuages-et-de-haute-saison-ensoleill%C3%A9e-163154920.jpg"
          alt=""
        ></img>
      </div>
      <div class="right-side">
        <h2>Boutique</h2>
        <h4>Les Skieur</h4>
        <ul>
          <li>
            <p>Numéro</p>
            <input type="number" placeholder="079986182"></input>
          </li>
          <li>
            <p>Date</p>
            <input type="date" placeholder="01 03 2023"></input>
          </li>
        </ul>
        <button class="btn">Confirmation de réservation</button>
      </div>
    </div>
  );
}
