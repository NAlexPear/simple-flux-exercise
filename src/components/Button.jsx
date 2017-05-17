import React from "react";

class Button extends React.Component{
    render(){
        return (
            <button type="button" onClick={this.props.action}>Click Me!</button>
        )
    }
}

export default Button;
