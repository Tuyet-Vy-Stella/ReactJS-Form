
const stateDefault = {
    arrStudent: [{id:1, fullName:'Nguyễn Văn A', phoneNumber:'0938111111', email:'nguyenvana@gmail.com'}]
}

export const QLSVReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'ADD_STUDENT': {
            // Add student info into arrStudent
            const arrStudentUpdate = [...state.arrStudent, action.student];
            state.arrStudent = arrStudentUpdate;
            return {...state}
            console.log(action)
        }; break;
        default: {
            return {...state}
        }; break;
    }
    
}