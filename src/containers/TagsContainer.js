import { connect } from 'react-redux';

import Tags from './components/form/formItem';

const AddTag = (Component) => {
	const mapDispatchToProps = (dispatch, ownProps) => ({
		add: () => {
			dispatch({ type: 'ADD_TAG'});
		},
		remove: () => {
			dispatch({ type: 'ADD_TAG'});
		}
	})
}

export default AddTag;