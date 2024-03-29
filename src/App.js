import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import Description from './Description';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    incrementCount =  () => {
         this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };
    /*
    incrementCount = () => {
         this.setState({
             ['count']: this.state.count + 1,
         });

    };
*/
    render() {
        const {count} = this.state;
        const name = 'Okkes';

        return (
            <div className='App'>
                <header className='App-header'>
                    <img
                        src={logo}
                        className='App-logo'
                        alt='logo'
                    />
                    <Description
                        name='Ökkeş Akkurt'
                        url='https://www.linkedin.com/in/okkes-akkurt/'
                        email="okkesakkurt46@gmail.com"

                    />
                    <br />
                    {name}
                    <br />
                    {count}
                    <br />
                    <button
                        onClick={() => {
                            this.incrementCount();
                            console.log(count);
                        }}>
                        CLick me
                    </button>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className='App-link'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
