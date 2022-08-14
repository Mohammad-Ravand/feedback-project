import React, { Component } from "react";
import "./FeedBack.css";
import Card from "./Card";
import Badge from "./Badge";
class FeedBack extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const header = (
      <div className="flex justify-between">
        <div className="badge" style={{ margin: -20 - 5 }}>
          <Badge number={this.props.number} color="text-white" bg="bg-pink-400"></Badge>
        </div>
        <div className="action">
          
          <button className="mx-1  px-1 rounded-sm outline-sky-500 text-blue-500">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
          </button>

          <button onClick={(e)=> this.removeOneFeedBack(e)} className="mx-1 px-1 text-red-500">
            <svg
              className="w-4 h-4 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    );
    return (
      <Card className="mt-5" head={header}>
        <p className="pl-5 text-left">
         {this.props.review.title}
        </p>
      </Card>
    );
  }

  removeOneFeedBack(e){
    e.preventDefault();
    this.props.removeOneFeedBack(this.props.review.id)
  }
}

export default FeedBack;
