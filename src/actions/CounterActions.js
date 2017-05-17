import dispatcher from "../dispatcher";

export function incrementCount(){
    dispatcher.dispatch( {
        "type": "INCREMENT_COUNT"
    } );
}
