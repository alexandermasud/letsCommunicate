import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CreateProfile = props => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    department: "",
    status: true,
    bio: "",
    startedYear: new Date().getFullYear(),
    hobbies: [],
    linkedIn: ""
  });

  const {
    company,
    title,
    department,
    status,
    bio,
    startedYear,
    hobbies,
    linkedIn
  } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value]
    });

  return (
    <Fragment>
      <h1 className="large text-primary">Skapa din profil</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Låt oss skapa en profil så vi vet vem du
        är
      </p>
      <small>* = Obligatoriska fält</small>
      <form className="form">
        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">* Välj din status</option>
            <option value="true">Aktiv</option>
            <option value="false">Inaktiv</option>
          </select>
          <small className="form-text">
            Välj aktiv, för tex föräldraledighet eller tjänstledighet välj
            inaktiv.
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Företag"
            name="company"
            value={company}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            Detta kan vara ditt egna företag ifall du är inhyrd som konsult.
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Titel"
            name="title"
            value={title}
            onChange={e => onChange(e)}
          />
          <small className="form-text">tex Assistent, Avdelningschef</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Avdelning"
            name="department"
            value={department}
            onChange={e => onChange(e)}
          />
          <small className="form-text">tex Ekonomi, PR, Utveckling</small>
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Startår"
            name="startedYear"
            value={startedYear}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            Ange året du påbörjade din tjänst tex 2020
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Fritidsintressen"
            name="hobbies"
            value={hobbies}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            Vänligen använd kommatecken mellan intressen (tex. Bowling, Piano,
            Böcker)
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="En kort beskrivning av dig själv"
            name="bio"
            value={bio}
            onChange={e => onChange(e)}
          ></textarea>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-linkedin fa-2x"></i>
          <input
            type="text"
            placeholder="Linkedin URL"
            name="linkedIn"
            value={linkedIn}
            onChange={e => onChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Tillbaka
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
