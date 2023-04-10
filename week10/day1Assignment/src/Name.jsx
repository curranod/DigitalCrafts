import { Component } from "react";

class Name extends Component {
    render() {
        return (
            <>
                <h1>{this.props.last}, {this.props.first}</h1>
            </>

        )
    }
}

export default Name