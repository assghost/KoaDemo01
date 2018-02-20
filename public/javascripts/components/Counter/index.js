/**
 * Created by Administrator on 2018/2/20.
 */
import React, {Component,PropTypes} from 'react'

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
        const {value} = this.props

        return (
            <div>
                <h2>React Counter: {value}</h2>
            </div>
        )
    }
}

export default Counter