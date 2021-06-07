import React, {Component} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class Button extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            content:"",
            posting:[]
        }
    }

    content=(e)=>{
        this.setState({content:e.target.value})
    }

    posting=(e)=>{
        this.state.posting.push({text:this.state.content})
        this.setState({content:""})
    }

    render(){
        return(
            <div className="study-detail-bottom">
                <div className="study-detail-b-topCont">
                    <input
                        className="study-detail-input"
                        type="text"
                        placeholder="내용을 입력하세요."
                        onChange={this.content}/>
                    <input
                        className="study-detail-submit"
                        type="button"
                        value="지원하기"
                        onClick={this.posting}/>
                </div>
                <div className="study-detail-b-mainCont">       
                    {this.state.posting.map(e=>{
                        return(
                            <div className="study-detail-main-user">
                                <AccountCircleIcon className="study-detail-userIcon"/>
                                <div className="study-detail-user">이희진</div>
                                <div className="study-detail-reply">
                                    <li>{e.text}</li>
                                </div>
                            </div>
                        ); 
                    })}
                </div>
            </div>
        )
    }
}

export default Button;