import React from 'react'
import AppAppBar from './modules/views/AppAppBar'
import AppFooter from './modules/views/AppFooter'
import withRoot from './modules/withRoot';

function Contact() {
    return (
        <React.Fragment>
            <AppAppBar />

            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(Contact)
