import React from "react";

const initialState = () => {
    return {
        count: 0,
    };
}


export class CounterClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState();
        // this.state = {
        //     count: 0,
        // }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');

    }


    increment = () => {
        const newCount = this.state.count + 1;
        this.setState({
            count: newCount,
        });

        setTimeout(() => {
            this.setState({
                count: this.state.count + 1,
            })
        }, 2000);



        // this.setState((state) => {
        //     const newCount = state.count + 1;
        //     return {
        //         count: newCount,
        //     }
        // });
    }

    render() {
        return <div>
            <div>
                counter: {this.state.count}
            </div>
            <button onClick={this.increment}>
                increment
            </button>
        </div>
    }

}