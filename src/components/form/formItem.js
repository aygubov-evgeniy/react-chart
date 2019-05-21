import React from 'react'

const FormItem = ({ title }) => {
  return(
    <div>
      <span>{title}</span>
      <input type="number"/>
      <button>Add</button>
    </div>
  );
}

export default FormItem;