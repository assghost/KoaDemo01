/**
 * Created by Administrator on 2018/2/18.
 */
import ReactDom from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './javascripts/store/configureStore'
import Counter from './javascripts/containers/counter'

const store = configureStore()

ReactDom.render(
    <Provider store={store}>
        <Counter/>
    </Provider>,
    document.getElementById('root')
)