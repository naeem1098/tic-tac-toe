import './App.css';
import { Component } from 'react';
import Board from './components/board';

class App extends Component {
    
    render () {
        return (
            <div className='main'>
                <h1>Tic Tac Toe</h1>
                
                <Board />
            </div>
        )
    }
}

export default App;
