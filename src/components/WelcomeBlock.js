import React from 'react'

export default function WelcomeBlock() {
    return (
        <div style={style.outerContainer} className="welcome-block-width">
            <div style={style.logoPositioning}>
                <div><img src={'/GiantRobotLTD_Logo.svg'} alt="Giant Logo"/></div>
            </div>
            <p style={style.welcomeHeader} className="welcome-header">Welcome</p>
            <p style={style.subheader}>Please tell us a bit about yourself to get started</p>
        </div>
    )
}

const style = {
    outerContainer: {
        background: '#585858',
        paddingLeft: 5
    },
    logoPositioning: {
        width: 177,
        marginTop: 32
    },
    welcomeHeader: {
        color: 'white',
        padding: 0,
        paddingBottom: 16,
        marginBottom: 0
    },
    subheader: {
        fontFamily: 'Merriweather',
        color: 'white',
        padding: 0,
        marginBottom: 32,
        fontSize: 14
    }
}