import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
    <div className="profile bg-light">
      <img src={avatar} alt="Profilbild" className="round-img" />
      <div>
        <h2>{name}</h2>
        <p>
          {title} - {department} - {status ? "Aktiv" : "Inaktiv"}
        </p>
      </div>

      <ul>
        {hobbies.map((hobbie, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i>
            {hobbie}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
