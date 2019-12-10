import React,{Component} from 'react';
import {Button,Tabs,Icon }from 'antd';
import './component/tabs/index.less'
import Counter from './component/Counter/Counter';
import request,{getRequest,postRequest} from '../../utils/request'
//import {EventEmitter} from "events";

const {TabPane} = Tabs;
class Test extends Component {
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            textareaValue:''
        }
        this.requestList();
    }
    static defaultProps={}
    static propTypes={}
    handleInputChange=(e)=>{
        console.log(e)
        this.setState({
            inputValue:e.target.value,
        })
    }
    handleTextareaChange=(e)=>{
        console.log(e)
        this.setState({
            textareaValue:e.target.value,
        })
    }
    requestList(){
        request({
            url:'/xboot/downloadResources/selectDownloadResourcesPageVoMap',
            type:'get',
            params:{
                id:'liming'
            }
        }).then(res =>{
            console.log(res)
        })
        postRequest('/testPost',{id:'2213213213123123'}).then(res=>{
            console.log(res)
        })
        getRequest('/test').then(res=>{
            console.log(res)
        })
    }
    render() {
        const {inputValue,textareaValue} =this.state
        return (
        <div className={'page'}>
            <h1>
                test !!!!
                <Button type="primary">Button 你     好</Button>
            </h1>
            <div>
                <Counter></Counter>
            </div>
            <div>
                <Tabs classPrefix={'tabs'} defaultActiveIndex={0} className={'tabs-bar'}
                children={[
                    <TabPane key={0} forceRender={false} tab={'tab 1'}>第一个 Tab 里的内容</TabPane>,
                    <TabPane key={1} tab={'tab 2'}>第二个 Tab 里的内容</TabPane>,
                    <TabPane key={2} tab={'tab 3'}>第三个 Tab 里的内容</TabPane>,
                    <TabPane key={3} tab={'tab 4'}>第四个 Tab 里的内容</TabPane>,
                    <TabPane key={4} tab={<span> <i className="fa fa-home"><Icon type="plus" />&nbsp;Home</i></span>}>第四个 Tab 里的内容</TabPane>
                ]}
                >
                </Tabs>
                <p><input type="text"  value={inputValue} onChange={this.handleInputChange}/></p>
                <p><textarea value={textareaValue} onChange={this.handleTextareaChange}></textarea></p>
            </div>
        </div>
        )

    }
}
export default Test
