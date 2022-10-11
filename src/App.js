import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const URL = 'http://localhost:3001/';

function App() {
    const [message, setMessage] = useState('test');

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                console.log(response.data);
                setMessage(response.data.message);
            })
            .catch((error) => {
                setMessage(error);
            });
    }, []);
    return (
        <p>{message}</p>
    );
}
/* class App extends Component {
    state = { loading: false };

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p>{ this.state.loading.toString() }</p>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
} */

export default App;
