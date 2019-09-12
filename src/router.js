import React,{Component,Fragment} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import Login from 'pages/login/login';
import Admin from 'pages/admin/index';
import App from './App'
import Food from './pages/food/food'
import User from './pages/user/user'
class RootRouter extends Component{
  render(){
    return(
      <App>
        <HashRouter>
          <Switch>
            <Redirect exact from='/' to='/admin'></Redirect>
            <Route path='/admin' render={()=>{
              return(
                <Admin>
                  <Route path='/admin/food' component={Food}></Route>
                  <Route path='/admin/user' component={User}></Route>
                </Admin>
              )
            }}></Route>
            <Route path='/login' component={Login}></Route>
          </Switch>
        </HashRouter>
      </App>
    )
  }
}
export default RootRouter