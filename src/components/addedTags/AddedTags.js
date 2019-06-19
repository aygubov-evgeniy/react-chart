import React from 'react';
import { connect } from 'react-redux';

import BtnAddTag from './btnAddTag';
import TagsList from './tagsList';

const AddedTags = ({ addedTags }) => {
  return (
    <div className="added-tags">
      <p className="title">My tags</p>

      <TagsList />
      
      {
        addedTags.length !== 0 ?
          (
            <BtnAddTag />
          ) :
          
          null
      }
    </div>
  );
}


// Redux
const mapStateToProps = (state, ownProps) => ({
  addedTags: state.addedTags
});


export default connect(mapStateToProps, null)(AddedTags);