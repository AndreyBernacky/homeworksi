import React from 'react'
import {ReactDOM} from "react";
import Header from './Header'
import RouteRo from './Routes'
import {BrowserRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

                <Header/>

                <RouteRo/>
            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
