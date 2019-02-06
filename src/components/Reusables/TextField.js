import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles, createMuiTheme} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import NumberFormat from 'react-number-format';

const styles = () => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    margin: {
        margin: theme.spacing.unit
    },
    cssLabel: {
        '&$cssFocused': {
            color: purple[500]
        }
    },
    cssFocused: {
        '&:active': {
            background: 'red'
        }
    },
    cssUnderline: {
        '&:after': {
            borderBottomColor: purple[500]
        }
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: purple[500],
            background: 'red'
        }
    },
    notchedOutline: {},
    bootstrapRoot: {
        'label + &': {
            marginTop: theme.spacing.unit * 3
        }
    },
    bootstrapInput: {
        borderRadius: 6,
        position: 'relative',
        backgroundColor: '#F7F7F7',
        border: '1px solid #ced4da',
        height: 46,
        width: 376,
        [
            theme
                .breakpoints
                .down('md')
        ]: {
            width: 'calc(100vw - 34px)'
        },
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 16,
        fontSize: 16,
        // width: 'auto',
        transition: theme
            .transitions
            .create(['border-color']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff'
        }
    },
    bootstrapFormLabel: {
        fontSize: 12,
        fontFamily: 'Merriweather'
    }
});

const theme = createMuiTheme({
    palette: {
        primary: green
    },
    typography: {
        useNextVariants: true
    }
});

class BootstrapTextField extends Component {

    state = {
        input:'',
        present: false
    }

    changeFormat = (number) => {
        var numbers = [0,1,2,3,4,5,6,7,8,9]
        console.log(number.length)
        if(number.length===1 && number[0]==='('){
            return '('
        }else if(number.length===5 && number[4]===")"){
            return number+' '
        }
        else if(number.length===6 && (number[5]!==" " || numbers.indexOf(parseInt(number[5])!==-1))){
            return number
        }
        else if(number.length>0 && (numbers.indexOf(parseInt(number[1]))!==-1 || numbers.indexOf(parseInt(number[0]))!==-1)){
            var array = [];
            number = this.getNumbers(number);
            var maxLength = number.length > 10 ? 10 : number.length;
            for(let i = 0; i<maxLength;i++){
                if(i===0 && number[0]!=='('){
                    array.push('(');
                }
                if(i===3 && number[3]!==') '){
                    array.push(') ');
                }
                if(i===6 && number[6]!=='-'){
                    array.push('-');
                }
                array.push(number[i]);
            }
        }else{
            console.log("NOT A NUMBER")
        }
        return array ? array.join(''):'';
    }

    getNumbers = (value) => {
        var justNumbers = [];
        var numbers = [0,1,2,3,4,5,6,7,8,9]
        for(let i = 0; i<value.length;i++){
            if(numbers.indexOf(parseInt(value[i])) !== -1) justNumbers.push(value[i])
        }
        console.log(justNumbers.join(''))
        return justNumbers ? justNumbers.join(''):value;
    }

    handleChange = (event) => {
        event.preventDefault();
        if(this.props.stateName==='phone'){
            var phone = this.changeFormat(event.target.value);
            console.log(phone)
            this.setState({input:phone})
            this
                .props
                .handleChange(this.props.stateName, phone)
        
        }else{
            if (event.target.value !== '') {
                this.setState({present: true})
            }
            this.setState({input:event.target.value})
            this
                .props
                .handleChange(this.props.stateName, event.target.value)
        }
    }
    

    render() {
        let error = false;
        const {classes} = this.props;
        if (this.props.error) {
            error = this.props.error[this.props.stateName];
        }
        return (
            <div className={classes.root}>

                <FormControl className={classes.margin}>
                    <InputLabel
                        shrink
                        htmlFor="bootstrap-input"
                        className={classes.bootstrapFormLabel}>
                        {this.props.label}
                        {error
                            ? <span
                                    style={{
                                    color: 'red',
                                    marginLeft:5
                                }}>REQUIRED</span>
                            : null}
                    </InputLabel>
                    <InputBase
                        id="bootstrap-input"
                        className={this.state.present
                        ? `background-white ${error
                            ? `error_textfield`
                            : ''}`
                        : error
                            ? `error_textfield`
                            : ''}
                        value={this.state.input}
                        onChange={this.handleChange}
                        classes={{
                        root: classes.bootstrapRoot,
                        input: classes.bootstrapInput
                    }}/>
                </FormControl>
            </div>
        );
    }
}

BootstrapTextField.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BootstrapTextField);
