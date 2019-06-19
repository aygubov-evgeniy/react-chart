import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import _ from 'lodash';

import { ReactComponent as IconAdd } from './icon-add.svg';


class FormItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fieldValue: '',
			isTagValid: true
		};
	}

	getFieldValue = () => {
		const { addedTags } = this.props;
		const { fieldValue } = this.state;

		const isTagSame = _.find(addedTags, (o) => o.name === fieldValue);

		if( isTagSame === undefined && fieldValue !== '' ) {
			store.dispatch({
				type: 'ADD_TAG',
				payload: {
					id: _.uniqueId(),
					name: fieldValue
				}
			});

			this.setState({
				fieldValue: '',
				isTagValid: true
			})
		}else {
			this.setState({
				isTagValid: false
			})
		}
	}

	render() {
		const { fieldValue, isTagValid } = this.state;

		return(
	    <div className="add-tag__part">
	      <input type="text" onChange={(e) => this.setState({ fieldValue: e.target.value })} value={fieldValue} className={isTagValid ? "add-tag__field" : "add-tag__field add-tag__field_error"} placeholder="reading, youtube..." maxLength="15"/>

	      <button className="add-tag__btn" onClick={this.getFieldValue}>
	      	<IconAdd className="add-tag__btn-svg" />
	      </button>
	    </div>
	  );
	}
}


// Redux
const mapStateToProps = (state, ownProps) => ({
	addedTags: state.addedTags
});

export default connect(mapStateToProps, null)(FormItem);