import React, { Component } from "react";
import "./NewFeedBack.css";
import Badge from "./Badge";
import Card from "./Card";

class NewFeedBack extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    value:'',
    number:0,
    validationError:""
  };
  render() {
    return (
      <div className="w-3/5 m-auto">
        <Card head="">
          <h3 className="font-bold text-xl my-3">
            How Would you rate your service with us?{" "}
          </h3>

          {this.props.rangeFeedBackNumber.map((number) => (
            <Badge
              key={number}
              bg="bg-gray-200"
              color=""
              number={number}
              selected={number==this.state.number}
              className="hover:bg-pink-500" 
              selectFeedVote={this.selectFeedVote}
            ></Badge>
          ))}

          <div className="pr-2 rounded-md my-3 d-flex border-2 justify-center border-gray-800">
            <input
              className="px-3 py-2 border-0 outline-0	w-4/5 shadow-md shadow-indigo-100/40"
              type="text"
              value={this.state.value}
              onChange={(e)=> this.changeNewFeedBack(e)}
              name="newFeedBack"
              id="newFeedBack"
            />
            <button onClick={(e)=>this.addNewFeedBack(e)} className=" bg-gray-300 rounded-md px-3 py-1 w-1/5">
              send
            </button>

          </div>
            <p className="px-3 py-1 mb-2 text-pink-600">{this.state.validationError}</p>
        </Card>
      </div>
    );
  }

  addNewFeedBack=(e)=>{

    //validation
    if(this.validationErrorAddNewFeedBack().length){
        this.setState({validationError:this.validationErrorAddNewFeedBack()})
        return;
    }
    this.props.addNewFeedBack(e,this.state.value,this.state.number)
    //clear new feed back
    this.setState({value:'',number:0,validationError:''})
  }

  validationErrorAddNewFeedBack(){
    if(this.state.value.length==0){
        return 'vote message is required';
    }else if( this.state.number==0){
        return 'vote number is requried'
    }else{
        return '';
    }
  }
  selectFeedVote=(e,number)=>{
    e.preventDefault();
    this.setState({number:number})

  }
  changeNewFeedBack=(e)=>{
    e.preventDefault();
    this.setState({value:e.target.value})
  }
}

export default NewFeedBack;
