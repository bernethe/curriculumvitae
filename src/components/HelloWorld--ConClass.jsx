import React, { Component } from 'react';

class HelloWorld extends Component {

    state = {
        active: true
    };

    handleClick = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return(
            <>
                <button onClick={this.handleClick}>Ocultar</button>
                {this.state.active &&
                    <h1>Hola Mundo</h1>
                }
            </>
        );
    }
}
export default HelloWorld;