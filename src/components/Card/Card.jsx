import React from 'react';
import Image from './Image';
import Title from './Title';
import Price from './Price'
import "./Card.css"

const Card = ({name,img,price}) => {
    // console.log(props);
//  const {name,img,price} = props;
    return (
        <div >
           <img
            className='w-64'
             src={img} alt="" />
             <h2>{name}</h2>
             <p>{price}</p>

        </div>
    );
};

export default Card;