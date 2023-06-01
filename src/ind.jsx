class IndecessionApp extends React.Component {
    constructor(props){
        super(props)
        this.handlepick = this.handlepick.bind(this);
        this.removeAll = this.removeAll.bind(this);
        this.addoption = this.addoption.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.state ={
            options: []
        }
    }
    handlepick(){
        let number = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[number])
    }
    removeAll(){
        this.setState(()=>{
            return {options:[]}
        })
    }
    addoption(value){
        if(this.state.options.indexOf(value)>-1){
            return(alert("This options is Already Exist"))
        }
        this.setState((prevState)=>{
            return{
                options:prevState.options.concat([value])   
            }
        })
    }
    removeItem(removeValue){
        
        this.setState((prevState)=>{
            return{

                options: prevState.options.filter((x)=>{return removeValue !== x})
            }
        })
    }
    componentDidMount(){
        console.log("fetching")
        const json = localStorage.getItem("options")
        const option = JSON.parse(json)
        if(option){

            this.setState(()=>{
                return{
                    options: option 
                }
            })
        }
    }
    componentDidUpdate(_prevProps, prevState){
        console.log("update")
        if(prevState.options.length !== this.state.options.length){
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
                <Header title={title} subtitle={subtitle}/>
                <Action handPick={this.handlepick}  option={this.state.options.length}/>
                <Options removeItem={this.removeItem} removeAll={this.removeAll} option={this.state.options} />
                <Addoptions addoption={this.addoption} />

            </div>
        )
    }
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }
const Header =(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

// class Action extends React.Component {
//     // handlepick(){
//     //     alert("HandlePick")
//     // }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handPick} disabled={!this.props.option}>What Should I do?</button>
//             </div>
//         )
//     }
// }
const Action = (props)=>{
    return (
        <div>
            <button onClick={props.handPick} disabled={!props.option}>What Should I do?</button>
        </div>
    )
}

// class Options extends React.Component {
    
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.removeAll}>Remove All</button>
//                 <h3>Options are here</h3>
//                 <h3>{this.props.option.map((option)=>{return <p key={option}>{option}</p>})}</h3>
//                 <Option/>
//             </div>
//         )
//     }
// }
const Options = (props)=>{
    return (
        <div>
            <button onClick={props.removeAll}>Remove All</button>
            <h3>Options are here</h3>
            <h3>{props.option.map((option)=>{
                return (
                <p key={option}>{option} <button onClick={(_e)=>{props.removeItem(option)}}>Remove</button></p>
                )})}</h3>
            <Option/>
        </div>
    )
}
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h3>Option component are here</h3>
                
//             </div>
//         )
//     }
// }
const Option = ()=>{
    return (
        <div>
            <h3>Option component are here</h3>
            
        </div>
    )
}
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
            <div>
                <form action="" onSubmit={this.handleAddoption}>
                <input name="options"type="text" placeholder="Add Your Options here " /> <button>Add Option</button>

                </form>
            </div>
        )
    }
}



const jsx = (
    <div>

    </div>
);

ReactDOM.render(<IndecessionApp/>, document.getElementById("app"))