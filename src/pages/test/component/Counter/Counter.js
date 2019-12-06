import React,{Component} from 'react';
class Counter extends Component {//计数器
     constructor(props){
            super(props);

            this.state={
                count:0
            }
      }
      handleClick=(e)=>{
            e.preventDefault();
            this.setState({count:this.state.count+1});
      }
      render() {
            return(
                <div>
                  <p>{this.state.count}</p>
                    <span onClick={this.handleClick}>更新</span>
                </div>)
      }
}
export default Counter
