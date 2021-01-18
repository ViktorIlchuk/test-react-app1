import React, {Component} from "react";
import { connect } from "react-redux";
import { createItem } from "../redux/actions"

class ExpensesForm extends Component {

    state = {
        title: ''
    }

    submitHandler = event => {
        event.preventDefault();
        const {title} = this.state;

        if (!title.trim()) {
            return
        }

        const newItem = {
            title, id: Date.now().toString() 
        }
        this.props.createItem(newItem)
         this.setState({title: ''})
    }
    
    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <label htmlFor="text">Enter your expense</label>
                <input 
                className="expenseInput" 
                type="text"
                value={this.state.title}
                onChange={event => this.setState({title: event.target.value})}
                />
                <button type="submit">Add expense</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createItem
}

export default connect(null, mapDispatchToProps)(ExpensesForm);