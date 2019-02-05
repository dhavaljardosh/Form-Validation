import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        background: '#FFAB44',
        color: 'white',
        fontSize: 16,
        marginTop: 48,
        textTransform: 'capitalize',
        [
            theme
                .breakpoints
                .down('xs')
        ]: {
            width: 'calc(100vw - 18px)'
        }
    },
    leftIcon: {
        marginRight: theme.spacing.unit
    },
    rightIcon: {
        marginLeft: theme.spacing.unit
    },
    iconSmall: {
        fontSize: 20
    }
});

function IconLabelButtons(props) {
    const {classes} = props;
    return (
        <div>
            <Button
                variant="contained"
                size='medium'
                type="submit"
                className={classes.button}
                onClick={props.onClick}>
                Next
                <img
                    src={'/White_Arrow.svg'}
                    alt="arrow"
                    height='10px'
                    style={{
                    marginLeft: 8
                }}/>
            </Button>
        </div>
    );
}

IconLabelButtons.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconLabelButtons);