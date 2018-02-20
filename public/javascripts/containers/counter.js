/**
 * Created by Administrator on 2018/2/20.
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'

function mapStateToProps(state) {
    //console.log('****StateToProps****',state.counter)
    const counter_state = state.counter
    return {
        value: counter_state.count
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)