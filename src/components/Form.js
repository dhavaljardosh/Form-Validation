import React, {Component} from 'react'
import TextField from './Reusables/TextField'
import Button from './Reusables/Button'

class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        address: '',
        address2: '',
        phone:'',
        error: ''
    }

    handleChange = (key, value) => {
        this.setState({[key]: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phone:this.state.phone
        }
        let error = {};
        console.log(user.phone.length)
        // Resetting the error state and in the callback function, using we're checking for errors
        this.setState({
            error: ''
        }, () => {
            let reject = false;
            for (var item in user) {
                // Validating is FirstName, Last Name and Address isn't empty or just with
                // spaces
                if (user[item] === '' || !user[item].replace(/\s/g, '').length) {
                    error[item] = true;
                    reject = true;
                } else {
                    error[item] = false;
                }
            }
            if(user['phone'].length !== 15){
                error['phone'] = false;
                reject = true;
            }else{
                error['phone'] = false;
            }

            if (reject) {
                this.setState({
                    error
                }, () => console.log(this.state.error))

            } else {
                alert(`
                       First Name : ${this.state.firstName} \n
                       Last Name: ${this.state.lastName} \n
                       Address: ${this.state.address} \n
                       Address 2: ${this.state.address2? this.state.address2: 'Not Provided'}
                       Phone:${this.state.phone}
                    `
                       
                    )
            }
        })
    }

    render() {
        return (
            <form style={style.positionForm} className="margin-fix-below-md" onSubmit={this.handleSubmit}>
                <TextField
                    label="FIRST NAME"
                    handleChange={this.handleChange}
                    stateName="firstName"
                    error={this.state.error}/>
                <TextField
                    label="LAST NAME"
                    handleChange={this.handleChange}
                    stateName="lastName"
                    error={this.state.error}/>
                <TextField
                    label="ADDRESS"
                    handleChange={this.handleChange}
                    stateName="address"
                    error={this.state.error}/>
                <TextField
                    label="ADDRESS 2 (OPTIONAL)"
                    handleChange={this.handleChange}
                    stateName="address2"/>
                <TextField
                    label="PHONE"
                    handleChange={this.handleChange}
                    stateName="phone"
                    error={this.state.error}
                    />
                <Button onClick={this.handleSubmit}/>
            </form>
        )
    }
}

const style = {
    positionForm: {
        marginLeft: 24,
        marginTop: 93.891
    }
}

export default Form;