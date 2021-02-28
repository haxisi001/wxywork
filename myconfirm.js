import React from 'react';
import PropTypes from 'prop-types'
import './myconfirm.css'

class MyConfirm extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    title:PropTypes.string,
    desc: PropTypes.string,
    leftBtn: PropTypes.object,
    rightBtn: PropTypes.object,
    onLeftClick: PropTypes.func,
    onRightClick: PropTypes.func,
}
static defaultProps={
    modal:{
        warning:'warning',
        info:'info',
        error:'error'
    },
    title:'提示',
    desc: '这是个简单的提示模板',
    //   leftBtn: {
    //           text: '确认'
    //         },
    //   rightBtn: {
    //           text: '取消'
    //         },
    
    onLeftClick: async (e)=>{
        console.log('点击确定')
        const doc = await new Promise((resolve) => {
                return resolve('1');
          
        });
        return doc;
    },
    onRightClick: async (e)=>{
        console.log('点击取消')
        const cancel = await new Promise((resolve) => {
                return resolve('2');
        });
        return cancel
    },
}

  render() {
    const props = this.props;
    return (
      <div className="confirm-wins-container">
        <div className="wins">
          <div className="title text-center">{props.title}</div>
          <div className="desc gray-text96">{props.desc}</div>
          <div className="fn-btn text-center">
            {props.leftBtn?<span className="btn left-btn" onClick={props.onLeftClick}>{props.leftBtn.text}</span>:''}
           <span className="btn right-btn" onClick={props.onRightClick}>{props.rightBtn.text}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MyConfirm;