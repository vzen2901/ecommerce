import React from 'react';
import {Switch,Route } from 'react-router-dom';

import './App.css';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component { 
  constructor(){
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubsribeFromAuth = null;

  componentDidMount(){
    this.unsubsribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    });

  }
  //sau khi các lệnh tìm nạp, nó sẽ không gọi lại tìm nạp
  //cho đến khi một thành phần thực hiện gắn kết phương thức vòng đời
  //trạng thái xác thực thay đổi, ai đó đăng nhập

  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }

  render(){
    return (
      <div>
          <Header currentUser = {this.state.currentUser} />
          <Switch>
            <Route exact path="/" component = {HomePage} />
            <Route exact path='/shop' component = {ShopPage} />
            <Route exact path='/signin' component = {SignInAndSignUpPage} />
          </Switch>
      </div>
    );
  };
}
export default App;
