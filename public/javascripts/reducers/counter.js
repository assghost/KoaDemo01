/**
 * Created by Administrator on 2018/2/20.
 */
import {INCREMENT} from '../actions/counter'

export default function (state = {count: 0}, action) {

    const count = state.count

    switch (action.Type) {
        case INCREMENT:
            return {count: count + 1}
        default:
            return state
    }
}