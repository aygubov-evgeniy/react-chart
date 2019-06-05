import React, { Component } from 'react';

import BtnAddTag from './btnAddTag';

class AddedTags extends Component {
  render() {
    return (
      <div className="added-tags">
        <p className="title">My tags</p>
      
        <div className="added-tags__list">
          <div className="added-tag">
            <input type="radio" className="added-tag__check"/>
            <span className="added-tag__title">#work</span>
          </div>

          <div className="added-tag">
            <input type="radio" className="added-tag__check"/>
            <span className="added-tag__title">#work</span>
          </div>

          <div className="added-tag">
            <input type="radio" className="added-tag__check"/>
            <span className="added-tag__title">#work</span>
          </div>

          <div className="added-tag">
            <input type="radio" className="added-tag__check"/>
            <span className="added-tag__title">#work</span>
          </div>
          
          <div className="added-tag">
            <input type="radio" className="added-tag__check"/>
            <span className="added-tag__title">#work</span>
          </div>

          <div className="added-tag">
            <input type="radio" className="added-tag__check"/>
            <span className="added-tag__title">#work</span>
          </div>

          <div className="added-tag">
            <input type="radio" className="added-tag__check"/>
            <span className="added-tag__title">#work</span>
          </div>

          <div className="added-tag">
            <input type="radio" className="added-tag__check"/>
            <span className="added-tag__title">#work</span>
          </div>

          <div className="added-tag">
            <input type="radio" className="added-tag__check"/>
            <span className="added-tag__title">#work</span>
          </div>
        </div>

        <BtnAddTag />
      </div>
    );
  }
}

export default AddedTags;