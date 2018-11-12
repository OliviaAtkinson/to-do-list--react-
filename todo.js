// this is my react To Do List!
const Header = (props)=>{
    return (
        <header>
            <h1>{props.title}</h1>
            <span className = "stats">To Do Items: {props.totalItems}</span>
        </header>
    );
}
const ToDoItems = (props) => {
    return(
        <div className = "ToDoItem">
            <span className = "ToDoItem-name">
                <button className = "remove-item" onClick = {() => props.removeItem(props.id)}>x</button>
                {props.item}
            </span>
            <Counter/>
        </div>
    )
}



class Counter extends React.Component{
    state = {
        score: 0
    };
    incrementScore=()=>{ this.setState(prevState =>( { score : prevState.score + 1} )) }

    decrementScore=()=>{ this.setState(prevState =>({ score: prevState.score - 1 } )) }
    render(){
        return(
            <div className = "counter">
                <button className='counter-action decrement' onClick={()=> this.decrementScore()}> - </button>
                <span className = 'counter-score'>{this.state.score}</span>
                <button className = 'counter-action increment' onClick={()=> this.incrementScore()}> + </button> 
            </div>
        );
    }
}

class App extends React.Component{
    state = {
        items: [
            {item: 'Clear Files', id: 1},
            {item: 'Finish Projects', id: 2},
            {item: 'Meditate', id: 3},
            {item: 'Clean Room', id: 4},
            {item: 'Buy Food', id: 5},
        ]
    };
    handleRemoveItem = (id)=>{
        this.setState( prevState => {return{items: prevState.items.filter(i=> i.id !==id)}})
    };
    render(){
        return(
            <div className = "ToDoList-Board">
                <Header title = "ToDoList-board" totalItems = {this.state.items.length}/>
                {this.state.items.map( stateItem => 
                    <ToDoItems
                        item = {stateItem.item}
                        id = {stateItem.id}
                        key = {stateItem.id.toString()}
                        removeItem = {this.handleRemoveItem}
                        />)}
            </div>
        )
    };
}


ReactDOM.render(
    <App/>,
    document.getElementById('root'));