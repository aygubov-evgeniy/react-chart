import React from 'react';

import { ReactComponent as IconAdd } from './icon-add.svg';

const FormItem = ({ title }) => {
  return(
    <div className="add-tag__part">
      <input type="text" className="add-tag__field" placeholder="reading, youtube..." maxLength="15"/>
      <button className="add-tag__btn"><IconAdd className="add-tag__btn-svg" /></button>
    </div>
  );
}

export default FormItem;