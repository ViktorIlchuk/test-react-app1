import React, {Component} from "react";
import { connect } from "react-redux";
import { createItem, deleteItem } from "../redux/actions"

class ExpensesForm extends Component {

    state = {
        inputText: ''
    }

    submitHandler = event => {
        event.preventDefault();

        const {inputText} = this.state;
        if (!inputText.trim()) {
            return
        }
        
        const splitInputText = this.state.inputText.split(' ');
        const [commandName] = splitInputText;

        if (commandName === 'clear') {
            const [_, data] = splitInputText;
            this.props.deleteItem(data);
        }
        
        if (commandName === 'add') {
            const [_, data, price, currency, name] = splitInputText;

            const newItem = {
                id: Date.now().toString(),
                data,
                price,
                currency,
                name
            };
            this.props.createItem(newItem);
        };


        this.setState({inputText: ''});
    }
    
    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <label htmlFor="text">Enter your expense</label>
                <input 
                className="expenseInput" 
                type="text"
                value={this.state.inputText}
                onChange={event => this.setState({inputText: event.target.value})}
                />
                <button type="submit">Add expense</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createItem, deleteItem
}

export default connect(null, mapDispatchToProps)(ExpensesForm);