import { Component } from "react";
import './Article.css'

class Article extends Component {
    render() {

        return(
            <>
                <div class="article">
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <p>{this.props.data}</p>
                </div>
            </>

        )
    }
}

export default Article