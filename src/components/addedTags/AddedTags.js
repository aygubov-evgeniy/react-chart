import React, { Component } from 'react';
import { connect } from 'react-redux';

import BtnAddTag from './btnAddTag';
import TagsList from './tagsList';
import store from "../../redux/store";
import _ from "lodash";

class AddedTags extends Component {
  state = {
    isBtnAddDisabled: true
  };
  
  updateData = () => {
    const { selectedTagId, selectedTag, selectedTagTime } = this.state;
    
    store.dispatch({
      type: 'ADD_DATA',
      payload: {
        id: selectedTagId,
        label: selectedTag,
        value: selectedTagTime
      }
    });
  }
  
  handleTagChange = (id, value) => {
    this.setState({
      selectedTagId: id,
      selectedTag: value,
      selectedTagTime: 0,
      isBtnAddDisabled: false
    })
  }
  
  handleTimeChange = (time) => {
    this.setState({
      selectedTagTime: time
    })
  }

  render() {
    const { addedTags } = this.props;
    const { isBtnAddDisabled, selectedTag } = this.state;

    return (
      <div className="added-tags">
        <p className="title">My tags</p>
  
        <TagsList updateData={this.handleTimeChange} checkedTag={this.handleTagChange} checkedTagName={selectedTag} />
        
        {
          addedTags.length !== 0 ?
            (
              <BtnAddTag disabled={isBtnAddDisabled} action={this.updateData} />
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