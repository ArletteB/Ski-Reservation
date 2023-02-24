import { Stack } from "@mui/system";
import * as React from "react";
import "../../../index.css";

export default function Search({ post }) {
  return (
    <Stack direction="horizontal">
      <section id="hero">
        <div class="search">
          <div class="searchwrapper">
            <div class="searchbox">
              <div class="row">
                <div class="col-md-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Rechercher par adresse"
                  ></input>
                </div>
                <div class="col-md-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Poids"
                  ></input>
                </div>
                <div class="col-md-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Style"
                  ></input>
                </div>
                <div class="col-md-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Taille"
                  ></input>
                </div>

                <div class="col-md-1">
                  <input
                    type="button"
                    class="btn btn-primary form-control"
                    value="Search"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Stack>
  );
}
