import React, { Component } from 'react';

class Form extends Component {
    state = { 
        amount: '',
        term: ''
     } 

     handleSubmit = (e) => {
        e.preventDefault();
       
        const{amount, term} = this.state;
        this.props.loanInformation(amount, term);
     }

    handleChange = (e) => {
        const{name, value} = e.target;
        
        
        this.setState({
            [name] : Number(value)
        })
    }

    validateForm = () => {
        const{amount, term} = this.state;
        const notValid = !amount || !term;
        
        return notValid;
    }

    render() { 

        const{amount} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <label>Amount</label>
                    <input 
                            onChange={this.handleChange}
                            name="amount" 
                            id="name"
                            class="u-full-width" 
                            type="number" 
                            placeholder="E.g 3000"/>
                    </div>
                    <div>
                        <label>Months to repay</label>
                        <select 
                            onChange={this.handleChange}
                            name="term" className="u-full-width">
                                <option value=""></option>
                                <option value="3">3 Months</option>
                                <option value="6">6 Months</option>
                                <option value="12">12 Months</option>
                                <option value="24">24 months</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            disabled={this.validateForm()}
                            type="submit"
                            value="Calculate" 
                            className="u-full-width button-primary" />
                    </div>
            </form>
        );
    }
}
 
export default Form;