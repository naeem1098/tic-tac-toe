import { Component } from 'react';

class Square extends Component {
    
    render() {
        return (
            <div id={this.props.id} className={this.props.win? "square winner" : "square"} onClick={this.props.clicked} >{this.props.value}</div>
        )
    }
}

export default Square;