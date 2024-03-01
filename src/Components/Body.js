import React from 'react';
import ItemCard from './ItemCard';
import Counter from './Counter';


const Body = () => {
  return (
    
      
      <div className="item-list">
        {/* <Counter/> */}
        <ItemCard image="https://freepngimg.com/thumb/tshirt/7-2-t-shirt-png-hd-thumb.png"  name={"Neckked Red"} price={100}/>
        <ItemCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM10F-9pndxwym54xAVc7Ph7LIuG8PhoQNQw&usqp=CAU" name={"Bindaas Formal Sh"} price={250}/>
        <ItemCard image="https://freepngimg.com/thumb/dress_shirt/11-2-dress-shirt-png-picture-thumb.png" name={"Bindaas Plane Blue"} price={450}/>
        <ItemCard image="https://freepngimg.com/thumb/dress/2-2-dress-free-download-png-thumb.png"  name="Butterfly Dress" price={1050}/>
        <ItemCard image="https://freepngimg.com/thumb/sports_wear/8-2-sports-wear-png-clipart-thumb.png" name={"B-Sports T-shirt"} price={350}/>
        <ItemCard image="https://freepngimg.com/thumb/sports_wear/7-2-sports-wear-free-download-png-thumb.png" name={"Black&white t-shirt"} price={250}/>
        <ItemCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDOVfHJdRlXuWTv-SwGIUtECPPYYL86nGkw&usqp=CAU"  name={"Scott Text neckked"} price={300}/>
        <ItemCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7dsC5KzlQrvLbPjrUiWg3UvJ614zpeX-1Qg&usqp=CAU" name={"Neckked Plane"} price={350}/>
        <ItemCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTD0K2LmNDdp6gRz6XR2-kgtkSLDezPnlwQ&usqp=CAU" name={"Black printed"} price={250}/>
        <ItemCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqtLscSEfuAyMYGW-0ihciJ3IixKW9leKuQ&usqp=CAU"  name="Bindaas Shirt" price={300}/>
        <ItemCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuXUlRb6O_1b2axqupLDVjKwTRPQ2ql0f5w&usqp=CAU" name={"Bindaas Printed"} price={350}/>
        <ItemCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLK1C2yQXoEfgu6pC62T-FHKI13kYi1kgIHw&usqp=CAU" name={"Bindaas Printed"} price={250}/>
      </div>
      
      
    
  );
};

export default Body;
