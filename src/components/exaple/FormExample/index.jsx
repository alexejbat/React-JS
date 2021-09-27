import React from "react";

export class FormExample extends React.Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            value: ''
        }
        console.log(this.textInput);
    }

    componentDidMount() {
        console.log(this.textInput)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newValue = this.textInput.current.value;
        if (this.props.onSubmit) {
            this.props.onSubmit(newValue);
        }
        this.setState({
            value: newValue,
        })
    }

    render() {
        return (
            <div>
                <h1>
                    React Ref - create ref
                </h1>
                <h3>
                    Value: {this.state.value}
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.textInput} />
                    <button>Submit</button>
                </form>
            </div>




        )
    }

}



