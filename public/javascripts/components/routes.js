/**
 * Created by Administrator on 2018/2/24.
 */
import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Counter from '../containers/counter'

export default (
    <BrowserRouter basename="/demo">
        <div>
            <Switch>
                <Route exact path="/" render={({history,location,match}) =>(
                    <h1>
                        {console.log(history,location,match)}
                        <span>React Router</span>
                    </h1>
                )} />
                <Route path="/counter" component={Counter} />
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </div>
    </BrowserRouter>
)