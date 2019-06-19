import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import _ from 'lodash';

import SingleTag from './singleTag';


class TagsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTag: ''
		}
	}

	handleTagChange = (e) => {
		this.setState({
			selectedTag: e.target.value
		})
	}

	handleTimeChange = (e) => {
		this.setState({
			selectedTag: e.target.value
		})
	}

	addLoggedTag = () => {
		store.dispatch({
      type: 'ADD_TASK',
      payload: this.input.value
    })
	}

	render() {
		const { addedTags, addLoggedTag } = this.props;
		const { selectedTag } = this.state;

		return(
			addedTags.length !== 0 ? 
				(
					<div className="added-tags__list">
						{
							addedTags.map((item, index) => {
								return(
						      <SingleTag key={item.id} name={item.name} selectedTag={selectedTag} actionRadio={this.handleTagChange} actionTimeChange={this.handleTimeChange} actionAdd={this.addLoggedTag} />
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