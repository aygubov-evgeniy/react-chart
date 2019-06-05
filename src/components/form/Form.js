import React, { Component } from 'react';

import FormItem from './formItem';

class Form extends Component {
  render() {
    return (
      <div className="add-tag">
        <p className="title">Add tag</p>
      
        <FormItem title="" />
      </div>
    );
  }
}

export default Form;