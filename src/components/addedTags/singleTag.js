import React, { Component } from 'react';


// const SingleTag = ({ name, actionRadio, selectedTag }) => {
// 	return(
// 		<div className="added-tag">
//       <label className="added-tag__label">
//       	<input type="radio" value={name} name="tag" className="added-tag__radio" onChange={actionRadio}/>
//      		<span className="added-tag__title">{name}</span>
//       </label>

//    		{
//    			name === selectedTag ?
//    				(
//    					<div className="added-tag__log-time">
//    						<input type="time" className="added-tag__field-time"/>
//    					</div>
//    				) : null
//    		}
//     </div>
// 	);
// }

class SingleTag extends Component {
  state = {
    loggedTag: {}
  }

  render() {
    const { id, name, actionRadio, selectedTag, actionTimeChange } = this.props;

    return(
      <div className="added-tag">
        <label className="added-tag__label">
          <input type="radio" value={name} name="tag" className="added-tag__radio" onChange={(e) => actionRadio(id, e.target.value)}/>
          <span className="added-tag__title">{name}</span>
        </label>
  
         {
           name === selectedTag ?
             (
               <div className="added-tag__log-time">
                 <input type="number" className="added-tag__field-time" onChange={(e) => actionTimeChange(e.target.value)}/>
               </div>
             ) : null
         }
      </div>
    );
  }
}

export default SingleTag;