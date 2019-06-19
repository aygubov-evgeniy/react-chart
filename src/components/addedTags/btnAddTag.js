import React from 'react';
import { connect } from 'react-redux';

const BtnAddTag = ({ isBtnAddDisabled }) => {
  return(
    <button className="added-tags__btn" disabled={isBtnAddDisabled}>Add</button>
  );
}

// Redux
const mapStateToProps = (state, ownProps) => ({
	isBtnAddDisabled: state.isBtnAddDisabled
})

export default connect(mapStateToProps, null)(BtnAddTag);