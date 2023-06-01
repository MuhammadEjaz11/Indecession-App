import React from "react"
import Option from "./option"

const Options = (props) => {
    return (
        <div>

            <div className="widget-header">

                <h3>Your Options</h3>
                <button
                    className="button"
                    onClick={props.removeAll}
                >
                    Remove All
                </button>
            </div>
            <div className="widget">

                <h3>{props.option.map((option, index) => {
                    return (
                        <div className="widget-sec">
                        <div className="widget-p"><p key={option}>{index +1}. {option} </p></div>
                        
                        <button className="button--link" onClick={(_e) => { props.removeItem(option) }}>Remove</button>
                        </div>
                    )
                })}
                </h3>
                {/* <Option /> */}
            </div>
        </div>
    )
}

export default Options