import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Lösenord matchar inte");
    } else {
      console.log("Success");
    }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Registrera</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Skapa konto
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Namn"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
          <small className="form-text">
            Denna site använder
            <a href="https://en.gravatar.com"> Gravatar </a>för profilbilder
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Lösenord"
            name="password"
            value={password}
            minLength="6"
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Upprepa lösenord"
            name="password2"
            value={password2}
            minLength="6"
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Registrera" />
      </form>
      <p className="my-1">
        Har du redan ett konto? <Link to="/login">Logga in</Link>
      </p>
    </Fragment>
  );
};

export default Register;
