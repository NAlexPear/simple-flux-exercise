// Libraries
import React from "react";

// Components
import Counter from "./components/Counter.jsx";
import Button from "./components/Button.jsx";

// Stores
import CounterStore from "./stores/counter.js";

// Actions
import { incrementCount } from "./actions/CounterActions.js";

class App extends React.Component{
    constructor(){
        super();
        this.state = CounterStore.getAll();
    }

    componentWillMount(){
        CounterStore.on(
            "change",
            () => this.setState( CounterStore.getAll() )
        );
    }

    componentWillUnmount(){
        CounterStore.removeAllListeners();
    }

    render(){
        return (
            <div>
                <h1>Behold, a way too complex counter</h1>
                <Counter count={this.state.count}/>
                <Button action={incrementCount}/>
            </div>
        );
    }
}

export default App;
