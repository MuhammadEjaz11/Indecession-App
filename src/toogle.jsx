class Toogle extends React.Component{
    constructor(){
        super()
        this.tooglefun = this.tooglefun.bind(this)
        this.state ={
            visibility: false
        }   
    }
    tooglefun(){
        
        if(this.state.visibility){
            this.setState(()=>{
                return{
                    visibility:false
                }
            })
        }else{
            this.setState(()=>{
                return{
                    visibility:true
                }
            })
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.tooglefun}>Show Details</button>
                
                {this.state.visibility?<h1>This is Toogle</h1>: <h1></h1>}
            </div>
        )
    }
}



// var approot = document.getElementById('app');

// let tooglefunc =()=>{
// let detail = document.getElementById('toogle');
// let btn = document.getElementById('btn');
// if(detail.style.display === "block"){
//     detail.style.display = "none"
//     btn.innerText = "Show Details"
// }else{
//     btn.innerText = "Hide Details"
//     detail.style.display = "block"
// }
// }

// let toogle = (
//     <div>
//     <h1>Click on the Button</h1>
//     <button id="btn" onClick={tooglefunc}>Show Details</button>
//     <p id="toogle">Here are the details</p>
//     </div>
// )
ReactDOM.render(<Toogle/>, document.getElementById('app'))