import * as React from "react";
import "../../../index.css";

export default function Commentaire() {
  return (
    <div class="comments">
      <h2>Commentaire</h2>

      <div class="comments-form">
        <form>
          <ul>
            <li>
              <input
                type="text"
                placeholder="Name"
                v-model="username"
                required
              ></input>
            </li>
            <li>
              <textarea
                placeholder="Comment"
                v-model="comment"
                required
              ></textarea>
            </li>
            <li>
              <button className="comment">Ajouter un commentaire</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
