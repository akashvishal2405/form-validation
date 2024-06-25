import React from "react";
import useForm from "./hooks/useForm";
import validate from './utils/Validate';

const FormSingnup = () => {

    const {handleChange, handleSubmit, values, errors} = useForm(validate);
  return (
    <div className="form-content">
        <form action="" onSubmit={handleSubmit} >
      <div className="form-input">
        
        <h1>Create your account</h1>
        <label htmlFor="name">Username:</label>
        <input
          type="text"
          name="username"
          id="name"
          placeholder="Enter your Username"
          onChange={handleChange}
          value={values.username}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div className="form-input">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="form-input">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={handleChange}
          value={values.password}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div className="form-input">
        <label htmlFor="cpassword">Cpassword:</label>
        <input
          type="password"
          name="cpassword"
          id="cpassword"
          placeholder="Enter cpassword"
          onChange={handleChange}
          value={values.cpassword}
        />
        {errors.cpassword && <p>{errors.cpassword}</p>}
      </div>
      <button>Submit</button>
      </form>
    </div>
  );
};

export default FormSingnup;
