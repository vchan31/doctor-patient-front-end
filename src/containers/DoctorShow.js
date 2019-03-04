import React, { Fragment } from "react";
import NavBar from "../components/NavBar";
import "../styles/Specialists.css";

const DoctorShow = props => {
  const test = props.doctors.filter(doctor => {
    return doctor.id === 345;
  });

  const {
    first_name,
    last_name,
    specialty,
    city = "New York",
    state = "New York",
    street = "1177 6th Avenue",
    zip
  } = test;

  console.log(test);

  function joinAddress() {
    let formattedStreet = street.split(" ").join("%20");
    let formattedCity = city.split(" ").join("%20");
    let formattedState = state.split(" ").join("%20");

    return (
      formattedStreet +
      "%20" +
      formattedCity +
      "%20" +
      formattedState +
      "%20" +
      zip
    );
  }

  console.log(joinAddress());
  return (
    <Fragment>
      <NavBar />
      <div className="doctorShow">
        <img
          className="docImage"
          src="http://localhost:3000/vitruvian_man.jpg"
          alt="placehoder doctor"
        />
        <div className="details">
          <h4>{specialty}</h4>
          <h2>
            {first_name} {last_name}
          </h2>
          <p>
            Address: <br />
            {street}, <br />
            {city}, {state} {zip}
          </p>
        </div>
        <div className="iframe">
          <div>
            <iframe
              width="425"
              height="350"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.openstreetmap.org/history#map=19/40.76324/-73.97572"
            />
          </div>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default DoctorShow;
