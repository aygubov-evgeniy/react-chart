import React from 'react';
import { connect } from 'react-redux';

const BtnAddTag = ({ disabled }) => {
  return(
    <button className="added-tags__btn" disabled={disabled}>Add</button>
  );
}

// Redux
const mapStateToProps = (state, ownProps) => ({
  
})

export default connect(null, null)(BtnAddTag);