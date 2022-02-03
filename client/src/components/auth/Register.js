import React, { Fragment, useState } from 'react';
// we brought in connect so we could work with redux; The connect() function connects a React component to a Redux store.
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
// whenever we bringing and redux action to use it with have to pass it into connect at the bottom at 'export'
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
// PropTypes are a mechanism to ensure that components use the correct data type and pass the right data, and that components use the right type of props, and that receiving components receive the right type of props.
import PropTypes from 'prop-types';
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do no match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  // Redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <section className='container'>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </section>
  );
};

// name of the component and propTypes
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

// to get the auth state
// state.auth.isAuthenticated will give us the value of 'isAuthenticated' within the reducers/auth.js
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

/**
 * everytime we use connect from react-redux we have to export it like below
 *
 * Connect's first param is the MapStateToProp
 * second params is object with any action we want to use (mapDispatchToProps)
 *
 * So what this is going to do is it will allow us to access props.setAlert, hence we need to put props in our arrow function on top
 */
export default connect(mapStateToProps, { setAlert, register })(Register);
