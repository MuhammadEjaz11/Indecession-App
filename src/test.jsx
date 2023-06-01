class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addone = this.addone.bind(this);
        this.minusone = this.minusone.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }
    addone(){
        console.log("addone")
        this.setState((prevState)=>{
            return {
                count: prevState.count +1
            }
        })
    }
    minusone(){
        console.log("minusone")
        this.setState((prevState)=>{
            return {
                count: prevState.count -1
            }
        })
    }
    reset(){
        console.log("reset")
        this.setState((prevState)=>{
            return {
                count: 0
            }
        })
    }
    componentDidMount(){
        const count1 = localStorage.getItem('count')
        const number = parseInt(count1)
        this.setState(()=>({count: number}))
    }
    componentDidUpdate(){
        const count = this.state.count
        console.log(count)
        localStorage.setItem("count", count)
    }
    render(){
        return(
            <div>
                <h1>Counter: {this.state.count} </h1>
                <button onClick={this.addone}>+1</button>
                <button onClick={this.minusone}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }

}



ReactDOM.render(<Counter/>, document.getElementById("app"))



// const challange = {
//     numbers:[1,2,3,5,6,4],
//     multiplyby: 2,
//     multiplier(){ return this.numbers.map((x)=> x * this.multiplyby)  
//     }
// }

// let count = 0;
// let addone = ()=>{
//     count++
//     counterfunc();
//     console.log("add one")
// }
// let minus = ()=>{
//     count--
//     counterfunc();
//     console.log("Minus One")
// }
// let Reset = ()=>{
//     count=0
//     counterfunc();
//     console.log("Reset")
// }
// var approot = document.getElementById('app');
// let counterfunc = ()=>{
//     var template3 = (

//         <div>
//            <h1>Count: {count}</h1>
//            <button onClick={addone}>+1</button> 
//            <br/>
//            <button onClick={minus}>-1</button> 
//            <br/>
//            <button onClick={Reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(template3, approot)
// }

// counterfunc();