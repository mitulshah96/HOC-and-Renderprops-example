import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Select, { Options } from './renderprops';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <div>
                <Hello name={this.state.name} />
                <Select>
                    <Options>
                        <div style={{ color: 'red' }}>{1}</div>
                    </Options>
                    <Options>{2}</Options>
                </Select>
                <p>Start editing to see some magic happen :)</p>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
