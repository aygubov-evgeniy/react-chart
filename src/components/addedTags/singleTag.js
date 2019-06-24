import React from 'react';


const SingleTag = ({ name, actionRadio, selectedTag }) => {
	return(
		<div className="added-tag">
      <label className="added-tag__label">
      	<input type="radio" value={name} name="tag" className="added-tag__radio" onChange={actionRadio}/>
     		<span className="added-tag__title">{name}</span>
      </label>

   		{
   			name === selectedTag ?
   				(
   					<div className="added-tag__log-time">
   						<input type="time" className="added-tag__field-time"/>
   					</div>
   				) : null
   		}
    </div>
	);
}

export default SingleTag;