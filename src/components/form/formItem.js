import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ReactComponent as IconAdd } from './icon-add.svg';

// const FormItem = ({ add }) => {
//   return(
//     <div className="add-tag__part">
//       <input type="text" className="add-tag__field" placeholder="reading, youtube..." maxLength="15"/>
//       <button className="add-tag__btn" onClick={add}><IconAdd className="add-tag__btn-svg" /></button>
//     </div>
//   );
// }

class FormItem extends Component {
	render() {
		return (
			<div className="add-tag__part">
	      <input type="text" className="add-tag__field" placeholder="reading, youtube..." maxLength="15"/>
	      <button className="add-tag__btn" onClick={add}><IconAdd className="add-tag__btn-svg" /></button>
	    </div>
		)
	}
}


/*
  Redux
*/
const mapDispatchToProps = (dispatch, ownProps) => ({
  add: (e) => {
    dispatch({ type: 'ADD_TAG' });
  },
  remove: (e) =>  {
    dispatch({ type: 'REMOVE_TAG' });
  }
});

export default connect(null, mapDispatchToProps)(FormItem);