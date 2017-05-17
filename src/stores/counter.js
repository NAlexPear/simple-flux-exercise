import EventEmitter from "events";

import dispatcher from "../dispatcher.js";

var counterStore;

class CounterStore extends EventEmitter{
    constructor(){
        super();
        this.count = 0;
    }

    incrementCount(){
        this.count++;

        this.emit( "change" );
    }

    getAll(){
        var { count } = this;

        return { count };
    }

    handleActions( action ){
        var { type } = action;

        switch ( type ){
            case "INCREMENT_COUNT":
                this.incrementCount();

                break;
            default:

        }
    }
};

counterStore = new CounterStore;

dispatcher.register( counterStore.handleActions.bind( counterStore ) );

export default counterStore;
