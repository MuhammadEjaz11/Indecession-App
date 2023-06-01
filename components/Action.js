import React from "react";

const Action = (props)=>{
    return (
        <div>
            <button 
             className="big-button"
             onClick={props.handPick} 
             disabled={!props.option}
             >What Should I do?</button>
        </div>
    )
}

export default Action