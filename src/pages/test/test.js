import React,{Component} from 'react';
import {Button,Tabs,Icon }from 'antd';
import Counter from './component/Counter/Counter';
const {TabPane} = Tabs;
class Test extends Component {
    static propTypes={}
    render() {
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
            </div>
        </div>
        )

    }
}
export default Test
