import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// We want to get the alert state into this component

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    //   whenever we map through an array like this and output jsx it's a list and we will need a unique 'key'
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  // 'ptar' is the short cut to create 'PropTypes.array.isRequired'
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  // whatever we want from the root reducer which is 'index' within the reducers folder, we have the 'alert'
  alerts: state.alert,
});

// we have mapstatetoprops but we don't have any action, hence 2nd param is empty
export default connect(mapStateToProps)(Alert);
