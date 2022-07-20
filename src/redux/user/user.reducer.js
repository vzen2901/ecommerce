import {UserActionTypes} from './user.types';

//reducer is function
//action kích hoạt -> state thiết lập trạng thái ban đầu
const INITIAL_STATE = {
    currentUser: null
}
//thiết lập trạn thái ban đầu - là đối tượng 
//->giống khổi tạo trạng thái trên class/this.state
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER://kiểm tra action.type có bằng 'SET_CURRENT_USER' không
            return {//trả về đối tượng mới đại diện cho state mới
                ...state,
                currentUser: action.payload
            }   
        default:
            return state;
    }
}
export default userReducer;