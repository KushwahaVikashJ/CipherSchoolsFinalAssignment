import * as actionType from './ActionType'; 
import axios from '../../axios';

export const admissionSuccess = ()=>{
    return{
        type: actionType.ADMISSION_SUCCESS
    }
}

export const admissionFail = ()=>{
    return{
        type: actionType.ADMISSION_FAIL
    }
}

export const admissionStart = ()=>{
    return{
        type: actionType.ADMISSION_START
    }
}

export const admission =(formData)=>{
    return dispatch =>{
        dispatch(admissionStart());
        axios.post('/admission.json',formData)
        .then(res=>{
            alert('Will get back to you soon THANK YOU!');
            dispatch(admissionSuccess(res.data));
        })
        .catch(err=>{
            dispatch(admissionFail());
        })

    }
}
