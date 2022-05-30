import { Component } from "react";
import Square from './square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            turn: 'X',
            win: false,
            winSeq: [10, 10, 10]
        }

        this.handleClick = this.handleClick.bind(this);
        this.checkWinner = this.checkWinner.bind(this);
    }

    handleClick = (event) => {
        let newSquares = this.state.squares;
        let id = parseInt(event.target.id);
        if(newSquares[id] === null && !this.state.win) {
            newSquares[id] = this.state.turn;
            let nextTurn = this.state.turn === 'X'? 'O' : 'X';
            this.setState({squares: newSquares, turn: nextTurn}, this.checkWinner);
        }
    }

    checkWinner = () => {
        let currentState = this.state.squares;
        // row cases :
        if((currentState[0] === currentState[1] && currentState[1] === currentState[2]) && (currentState[0] !== null)){

            this.setState({win: currentState[0], winSeq: [1, 2, 3]});

        } else if((currentState[3] === currentState[4] && currentState[4] === currentState[5]) && (currentState[3] !== null)){

            this.setState({win: currentState[3], winSeq: [4, 5, 6]});

        } else if((currentState[6] === currentState[7] && currentState[7] === currentState[8]) && (currentState[6] !== null)){

            this.setState({win: currentState[6], winSeq: [7, 8, 9]});

        } else if((currentState[0] === currentState[3] && currentState[3] === currentState[6]) && (currentState[0] !== null)){

            this.setState({win: currentState[0], winSeq: [1, 4, 7]});

        } else if((currentState[1] === currentState[4] && currentState[4] === currentState[7]) && (currentState[1] !== null)){

            this.setState({win: currentState[1], winSeq: [2, 5, 8]});

        } else if((currentState[2] === currentState[5] && currentState[5] === currentState[8]) && (currentState[2] !== null)){

            this.setState({win: currentState[2], winSeq: [3, 6, 9]});

        } else if((currentState[0] === currentState[4] && currentState[4] === currentState[8]) && (currentState[0] !== null)){

            this.setState({win: currentState[0], winSeq: [1, 5, 9]});

        } else if((currentState[2] === currentState[4] && currentState[4] === currentState[6]) && (currentState[2] !== null)){

            this.setState({win: currentState[2], winSeq: [3, 5, 7]});

        }
    }

    render () {
        return (
            <>
                <h3>Turn of player: {this.state.turn}</h3>
                <div className='section'>
                    <Square id="0" value={this.state.squares[0]} clicked={this.handleClick} win={this.state.winSeq.find(value => value === 1)}></Square>
                    <Square id="1" value={this.state.squares[1]} clicked={this.handleClick} win={this.state.winSeq.find(value => value === 2)}></Square>
                    <Square id="2" value={this.state.squares[2]} clicked={this.handleClick} win={this.state.winSeq.find(value => value === 3)}></Square>
                </div>
                <div className='section'>
                    <Square id="3" value={this.state.squares[3]} clicked={this.handleClick} win={this.state.winSeq.find(value => value === 4)}></Square>
                    <Square id="4" value={this.state.squares[4]} clicked={this.handleClick} win={this.state.winSeq.find(value => value === 5)}></Square>
                    <Square id="5" value={this.state.squares[5]} clicked={this.handleClick} win={this.state.winSeq.find(value => value === 6)}></Square>
                </div>
                <div className='section'>
                    <Square id="6" value={this.state.squares[6]} clicked={this.handleClick} win={this.state.winSeq.find(value => value === 7)}></Square>
                    <Square id="7" value={this.state.squares[7]} clicked={this.handleClick} win={this.state.winSeq.find(value => value === 8)}></Square>
                    <Square id="8" value={this.state.squares[8]} clicked={this.handleClick} win={this.state.winSeq.find(value => value === 9)}></Square>
                </div>
                <br />
                    {this.state.win && <span>Winner : {this.state.win}</span>}
                <br />
                <button onClick={()=>{
                    this.setState({squares: Array(9).fill(null), win: false, winSeq: [10, 10, 10]});
                }}>Reset</button>
            </>
        )
    }
}

export default Board;