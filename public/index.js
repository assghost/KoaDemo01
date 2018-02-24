/**
 * Created by Administrator on 2018/2/18.
 */
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './javascripts/store/configureStore'
import RootRouter from './javascripts/components/routes'

const store = configureStore()

ReactDom.render(
    <Provider store={store}>
        {RootRouter}
    </Provider>,
    document.getElementById('root')
)