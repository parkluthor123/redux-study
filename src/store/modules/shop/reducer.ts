import produce from 'immer'

const INITIAL_STATE = {
    customer: null
}

function shop(state: any = INITIAL_STATE, action: any)
{
    switch (action.type) {
        case 'SET_CUSTOMER':
            return produce(state, (draft: any) => {
                draft.customer = action.customer
            });
            break;
    
        default:
            return state;
            break;
    }
}

export default shop;