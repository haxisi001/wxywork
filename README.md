# import React ,{Component}from 'react';
import propTypes from 'prop-types'


class InputNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            innerValue:'ddd'
        }
    }
    static propTypes = {
        value: propTypes.string,
        defaultValue:propTypes.string,
        onchange: propTypes.func
    }
    static defaultProps={
        // value: 'aaaa',
    }
    get isControl(){
        //  判断是否带有value的属性，并返回是否属于受控组件
        return 'value' in this.props
    }
    get value(){
        // 取value值
        if(this.isControl){
            // 如果是受控组件返回value
            return this.props.value
        } else {
            // 否则返回元素内容
            return this.state.innerValue
        }
    }
    render(){
        const {
            value,
        } = this.props
        return (
           <input 
           value={`${this.value}`} 
           onChange = {(e)=>{
               console.log('isControl:'+!this.isControl)
                if (!this.isControl) {
                    this.setState({
                        value : e.target.value
                    })
                }
               this.props.onChange(e)
           }
        }
           ></input>
        )
    }
}



export default InputNumber;
