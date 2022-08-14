import React, { Component } from 'react';
import './Reviews'

class Reviews extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        
        return ( 
            <div className='w-3/5 m-auto'>
                <div className='flex mb-5  text-white text-center  justify-between'>
                    <p>{this.props.reviewCount} Reviews</p>
                    <p>Average Rating: {this.props.reviewAverage}</p>
                </div>
                {this.props.children}
            </div>
         );
    }
}
 
export default Reviews;