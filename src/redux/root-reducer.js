// kết hợp tất cả các trạng thái khác nhau
// chia mã thành các thành phần riêng lẻ
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});
//là một đối tượng lớn, chữa các đối tượng nhỏ
//state full là một đối tượng json
