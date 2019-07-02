import React from 'react';
import { connect } from 'react-redux';

const BtnAddTag = ({ disabled, action }) => {
  return(
    <button className="added-tags__btn" disabled={disabled} onClick={action}>Add</button>
  );
}

// Redux
const mapStateToProps = (state, ownProps) => ({
  
})

export default connect(null, null)(BtnAddTag);