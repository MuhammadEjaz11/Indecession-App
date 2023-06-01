console.log("App is running");
var approot = document.getElementById('app');

let user = {
    title:"Ejaz",
    age: "21",
    options: []
}
var template = (

    <div>

        <h1>Hello World</h1>
        <p>Hello</p>
    </div>
);
var template2 = (

    <div>
        <h1>Ejas</h1>
        <p>23</p>
        <p>Karachi</p>
    </div>
);
let removeItem=()=>{
    if(user.options){
        user.options.splice(0, user.options.length)
        renderfun()
    }
}
let formsubmitted = (e)=>{
    
    e.preventDefault();
    const value = e.target.elements.options.value;
    if(value){

        user.options.push(value)
        e.target.elements.options.value ="";
        renderfun();
    }else{
        alert("Please Enter the Value")
    }
}
let renderfun = ()=>{
    var template3 = (

        <div>
            <h1>Indecession App</h1>
            <p>Your Tasks</p>
            <form onSubmit={formsubmitted}>
                <input type="text" name="options" />
                <br />
                <button>Add task</button>
            </form>
                <button onClick={removeItem}>Remove All</button>
            {/* <p>{user.options}</p> */}
            <ol>
                {user.options.map((x)=>{
                    return <li>{x}</li>
                })}
            </ol>
            
        </div>
    );

    ReactDOM.render(template3, approot)
}
renderfun();
