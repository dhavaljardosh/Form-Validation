import React, {Component} from 'react'
import Welcome from './WelcomeBlock';
import Form from './Form';
import {Grid} from '@material-ui/core'

export default class App extends Component {
    render() {
        return (
            <div className="background-change">
                <Grid container style={style.outerGrid}>
                    <Grid item sm={6} style={style.welcomeBlock} className="remove-right-padding">
                        <Welcome/>
                    </Grid>
                    <Grid item sm={6}>
                        {/* Display of Form */}
                        <Form/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const style = {
    outerGrid: {
        display: 'flex',
        minHeight:'100vh'
    },
    welcomeBlock: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 80
    }
}