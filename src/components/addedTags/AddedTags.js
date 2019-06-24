import React, { Component } from 'react';
import { connect } from 'react-redux';

import BtnAddTag from './btnAddTag';
import TagsList from './tagsList';

class AddedTags extends Component {
  state = {
    isBtnAddDisabled: true
  };
  
  updateData = (value) => {
    this.setState({
      isBtnAddDisabled: value
    })
  }

  render() {
    const { addedTags } = this.props;
    const { isBtnAddDisabled } = this.state;

    return (
      <div className="added-tags">
        <p className="title">My tags</p>
  
        <TagsList updateData={this.updateData} />
        
        {
          addedTags.length !== 0 ?
            (
              <BtnAddTag disabled={isBtnAddDisabled} />
            ) :
            
            null
        }
      </div>
    );
  }
}


// Redux
const mapStateToProps = (state, ownProps) => ({
  addedTags: state.addedTags
});


export default connect(mapStateToProps, null)(AddedTags);