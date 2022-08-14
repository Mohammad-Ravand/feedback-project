import React, { Component } from 'react';
class Badge extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <button onClick={(e)=>this.selectFeedVote(e)} className={this.buttonClassName()}>{this.props.number}</button>
         );
    }

    selectFeedVote=(e)=>{
        e.preventDefault();
        this.props.selectFeedVote(e,this.props.number)
    }

    buttonClassName(){
        let className='rounded-full px-4 py-2 m-2 tracking-tighter	 ';
        className+=' '+this.props.bg+' '+this.props.color+' '+this.props.className;
        if(this.props.selected==true){
            className +=' bg-pink-500'
        }
        return  className;
    }
}
 
export default Badge;