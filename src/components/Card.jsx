import React, { Component } from "react";
class Card extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className={this.createClassName()}>
        <div className="p-1">
          {this.props.head}
        </div>
        <div className="px-5 pb-5 ">{this.props.children}</div>
      </div>
    );
  }

  createClassName(){
    let className='bg-white border-2  text-center my-3 rounded-lg border-sky-100';
    className+=' '+this.props.className;
    return className;
  }
}

export default Card;
