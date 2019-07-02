import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';

import SingleTag from './singleTag';


class TagsList extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
  //     selectedTag: '',
  //     selectedTagId: '',
  //     selectedTagTime: 0
	// 	}
	// }

	// handleTagChange = (id, value) => {
  //   this.setState({
  //     selectedTagId: id,
  //     selectedTag: value,
  //     selectedTagTime: 0
	// 	})
	// }
	//
	// addLoggedTag = () => {
	// 	store.dispatch({
  //     type: 'ADD_TASK',
  //     payload: this.input.value
  //   })
	// }

	render() {
		const { addedTags, updateData, checkedTag, checkedTagName } = this.props;
		// const { selectedTag } = this.state;

		return(
			addedTags.length !== 0 ? 
				(
					<div className="added-tags__list">
						{
							addedTags.map((item) => {
								return(
						      <SingleTag key={item.id} id={item.id} name={item.name} selectedTag={checkedTagName} actionRadio={checkedTag} actionTimeChange={updateData} />
								)
					    })
						}
			    </div>
				) :
				(
					<div className="added-tags__list-empty">No tags...</div>
				)
		);
	}
}



// Redux
const mapStateToProps = (state, ownProps) => ({
 	addedTags: state.addedTags
});


export default connect(mapStateToProps, null)(TagsList);