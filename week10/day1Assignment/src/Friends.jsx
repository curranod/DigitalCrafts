import { Component } from "react";

class Friends extends Component {
    render() {

        const names = this.props.names.map((name) => {
            return <p key={name}>{name}</p>
        })

        return (
            <>
                <div>{names}</div>
            </>
        )
    }
}

export default Friends