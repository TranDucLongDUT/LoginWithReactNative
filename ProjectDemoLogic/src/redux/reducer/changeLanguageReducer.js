import { VIETNAMLANGUAGE, ENGLISHLANGUAGE } from '../action/types'

const initialState = 'en';

export default (state = initialState, action) => {
    switch (action.type) {
        case VIETNAMLANGUAGE: {
            console.log('Reducer- caseVietNam',action.value);
            state = action.value;
            return state;
        }
        case ENGLISHLANGUAGE: {
            state = action.value;
            console.log('Reducer- caseEnglish', action.value);

            return state;
        }
        default:
            return state;
    }
}