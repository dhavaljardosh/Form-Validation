import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles, createMuiTheme} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

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
        present: false
    }

    render() {
        let error = false;
        const {classes} = this.props;
        if (this.props.error) {
            error = this.props.error[this.props.stateName];
            console.log(error);
        }
        console.log(this.state)
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
                        defaultValue={this.props.defaultMessage
                        ? this.props.defaultMessage
                        : ''}
                        onChange={(e) => {
                        if (e.target.value !== '') {
                            this.setState({present: true})
                        }
                        this
                            .props
                            .handleChange(this.props.stateName, e.target.value)
                    }}
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
