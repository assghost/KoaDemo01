/**
 * Created by Administrator on 2018/2/20.
 */
import React, {Component,PropTypes} from 'react'
import '../../../stylesheets/style.css'

class Counter extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){

    }

    componentDidMount(){
        //console.log('******DidMount****',this.props)
    }

    render() {
        //console.log('******render****',this.props)
        const {value,increment} = this.props

        return (
            <div>
                <h1><span className="btn" onClick={increment}>React Counter: {value}</span></h1>
            </div>
        )
    }
}

export default Counter