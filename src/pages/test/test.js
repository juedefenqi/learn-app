import React,{Component} from 'react';

class Test extends Component {
    render() {
        const Button=({color,text})=>{
            return{
                type:'button',
                props:{
                    className:`btn btn-${color}`,
                    children:{
                        type:'em',
                        props:{
                            children:text
                        }
                    }
                }
            }
        }
        return (
        <div className={'page'}>
            <h1>
                test !!!!
            </h1>
        </div>
        )

    }
}
export default Test
