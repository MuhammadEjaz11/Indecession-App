import React from "react";

class Addoptions extends React.Component {
    constructor(props){
        super(props)
        this.handleAddoption = this.handleAddoption.bind(this);

    }
    handleAddoption(e){
        e.preventDefault();
        const value = e.target.elements.options.value.trim();
        if(value){
            this.props.addoption(value);
            e.target.elements.options.value=""
        }else{
            alert("Please Enter the Valid Value")
        }
    }
    render() {
        return (
            <div className="addoptn">
                <form action="" onSubmit={this.handleAddoption} className='addoptn-form'>
                <input className="addoptn-input" name="options"type="text" placeholder="Add Your Options here " /> <button className="button--link">Add Option</button>

                </form>
            </div>
        )
    }
}

export default Addoptions