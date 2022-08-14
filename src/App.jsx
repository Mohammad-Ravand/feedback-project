import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NewFeedBack from "./components/NewFeedBack";
import Reviews from "./components/Reviews";
import FeedBack from "./components/FeedBack";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    reviews: [
      { id: 1, title: "some title for review one in here." ,number:1},
      { id: 2, title: "some title for review one in here." ,number:3},
    ],
    rangeFeedBackNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };
  render() {
    return (
      <div className="bg-indigo-900	h-screen">
        <Header></Header>
        <NewFeedBack
          addNewFeedBack={this.addNewFeedBack}
          rangeFeedBackNumber={this.state.rangeFeedBackNumber}
        ></NewFeedBack>
        <Reviews reviewCount={this.reviewCount()} reviewAverage={this.reviewAverage()}>
          {this.state.reviews.map((review) => (
            <FeedBack key={review.id} review={review} number={review.number} removeOneFeedBack={this.removeOneFeedBack}></FeedBack>
          ))}
        </Reviews>
      </div>
    );
  }

  reviewAverage(){
    if(this.state.reviews.length==1){
      return this.state.reviews[0].number
    }
    let result=this.state.reviews.reduce((accumulator,current)=>{
      if(accumulator instanceof Object){
        accumulator = accumulator.number
      }
      return accumulator+current.number
    })
    return parseFloat(result/this.reviewCount()).toFixed(2);
  }


  reviewCount(){
    return this.state.reviews.length;
  }

  addNewFeedBack=(e, title, number)=> {
    e.preventDefault();
    let review = {
      id: Math.random().toString().substring(2),
      title: title,
      number: number,
    };


    let reviews = this.state.reviews;
    reviews.push(review);
    this.setState({ reviews: reviews });
  }

  removeOneFeedBack=(feedback_id)=>{
    let reviews = this.state.reviews.filter((review)=>{
      if(review.id==feedback_id){
        return false;
      }else{
        return true;
      }
    });

    this.setState({reviews:reviews})
  }
}

export default App;
