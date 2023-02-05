import React from "react";
import "./content.css";

const Cards = () => {
  return (
    <>
      <section className="cont">
        <h1 className="SV">Saved Trip</h1>
        <div className="row">
          <article className="card fl-left">
            <section className="date">
              <time datetime="23th feb">
                <span>23</span>
                <span>feb</span>
              </time>
            </section>
            <section className="card-cont">
              <small>dj music event</small>
              <h3>music kaboom festivel</h3>
              <div className="even-date">
                <i className="fa fa-calendar"></i>
                <time>
                  <span>wednesday 28 december 2014</span>
                  <span>08:55pm to 12:00 am</span>
                </time>
              </div>
              <div className="even-info">
                <i className="fa fa-map-marker"></i>
                <p>nexen square for people australia, sydney</p>
              </div>
              <a href="#">booked</a>
            </section>
          </article>
        </div>
      </section>
    </>
  );
};

export default Cards;
