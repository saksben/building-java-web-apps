import React from "react";
import './App.css';

class App extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to execute the code
    componentDidMount() {
        fetch("http://localhost:8080/api/v1/user/hello")
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div><h1> Please wait ... </h1></div>;

        return (
            <div className="App">
                <h1> Fetch data from an api in react </h1>
                <ol key={items.id}>
                    Full Name: {items.name}
                </ol>
            </div>
        );
    }
}

export default App;