import * as actionType from '../Action/ActionType';


const initialState = {
    spinner:false
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionType.ADMISSION_START:
            return{
                ...state,
                spinner:true
            }

            case actionType.ADMISSION_SUCCESS:
            return{
                spinner:false
            }
                
            case actionType.ADMISSION_FAIL:
            return{
                ...state,
                spinner:false
            }

            default:
                return{
                    ...state
                }
    }

}

export default reducer