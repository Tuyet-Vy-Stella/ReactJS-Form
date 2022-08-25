
const stateDefault = {
    arrStudent: [{id:1, fullName:'Nguyễn Văn A', phoneNumber:'0938111111', email:'nguyenvana@gmail.com'}]
}

export const QLSVReducer = (state = stateDefault, action) => {
    return {...state}
}