import { VIETNAMLANGUAGE, ENGLISHLANGUAGE } from '../action/types'

const initialState = 'en';

export default (state = initialState, action) => {
    switch (action.type) {
        case VIETNAMLANGUAGE: {
            state.language = action.value;
        }
        case ENGLISHLANGUAGE: {
            state.language = action.value;
        }
        default:
            return state;
    }
}