console.log('ejaz 2')
import React from 'react';
import ReactDOM from 'react-dom';
import Addoptions from './components/Addoptions';
import Header from './components/Header';
import Action from './components/Action';
import Option from './components/option';
import Options from './components/options';
import OptModal from './components/modal';
import './Style/style.scss'

class IndecessionApp extends React.Component {
    state = {
        options: [],
        modalOpt: undefined
    }
    closeModal = () => {
        this.setState(() => {
            return { modalOpt: undefined }
        })
    }

    handlepick = () => {
        let number = Math.floor(Math.random() * this.state.options.length);
        // alert(this.state.options[number])
        const opt = this.state.options[number];

        this.setState(() => {
            return { modalOpt: opt }
        })
    }
    removeAll = () => {
        this.setState(() => {
            return { options: [] }
        })
    }
    addoption = (value) => {
        if (this.state.options.indexOf(value) > -1) {
            return (alert("This options is Already Exist"))
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([value])
            }
        })
    }
    removeItem = (removeValue) => {

        this.setState((prevState) => {
            return {

                options: prevState.options.filter((x) => { return removeValue !== x })
            }
        })
    }
    componentDidMount() {
        console.log("fetching")
        const json = localStorage.getItem("options")
        const option = JSON.parse(json)
        if (option) {

            this.setState(() => {
                return {
                    options: option
                }
            })
        }
    }
    componentDidUpdate(_prevProps, prevState) {
        console.log("update")
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem("options", json)

        }
    }
    render() {
        const title = "Indeccesion App";
        const subtitle = "Put Your Life in Hands of Computer";
        // const options = ["Option1","Option2","Option3"];


        return (
            <div>
                    <Header title={title} subtitle={subtitle} />
                <div className='container'>
                    <Action handPick={this.handlepick} option={this.state.options.length} />
                    <Options removeItem={this.removeItem} removeAll={this.removeAll} option={this.state.options} />
                    <Addoptions addoption={this.addoption} />
                </div>

                <OptModal modalOpt={this.state.modalOpt} closeModal={this.closeModal} />


            </div>
        )
    }
}












ReactDOM.render(<IndecessionApp />, document.getElementById("app"))