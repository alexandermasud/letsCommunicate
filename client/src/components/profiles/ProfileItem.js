import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    title,
    department,
    status,
    bio,
    startedYear,
    hobbies,
    linkedIn,
    lastUpdated
  }
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <img className="round-img" src={avatar} alt="Profilbild" />
        <h4>{name}</h4>
      </div>
      <div>
        <h3 style={{ float: "left" }}>{title} &nbsp;</h3>
        <small style={{ float: "right", color: "red" }}>
          {status ? "" : "Ej i tjänst"}
        </small>
        <h3>{department}</h3>
        <p className="my-1" style={{ float: "left" }}>
          {bio}
        </p>

        <ul style={{ float: "left" }}>
          {hobbies.map((hobbie, index) => (
            <li
              key={index}
              className="text-primary"
              style={{ display: "inline" }}
            >
              <i className="fas fa-check" /> {hobbie + " "}
            </li>
          ))}
        </ul>
        <p className="post-date" style={{ float: "right" }}>
          Uppdaterad <Moment format="YYYY/MM/DD">{lastUpdated}</Moment>
        </p>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
