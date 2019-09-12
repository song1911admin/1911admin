import React,{Component} from 'react';
import './index.less'
class Admin extends Component{
  render(){
    return(
      <div className="admin">
        <div className="admin_left">
          left
        </div>
        <div className="admin_right">
          <div className='admin_right_top'>
            top
          </div>
          <div className='admin_right_center'>
            {this.props.children}
          </div>
          <div className='admin_right_footer'>  
            bottom
          </div>
        </div>
      </div>
    )
  }
}
export default Admin