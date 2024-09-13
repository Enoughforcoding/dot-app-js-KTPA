import React, { useState, useEffect } from "react";

//Functional Counter Component
const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

    useEffect (() => {
      document.title = `Func update ${count}'`
    })
  return (
    <div className="counter">
      <h2>This is a Functional counter</h2>
      <p>amount: {count} </p>
      <button
        onClick={() => {
          setCount(count + 1);
      } }
      >
        
        more</button>
      
    <button className= "add-btn"
    onClick={() => {
        setCount(count - 1);
      } }
      >
        reduce</button>  

    </div>
  );
} 
//Class component
class ClassCounter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {count: 1};
  }

  componentDidUpdate () {
    document.title = `amount: ${(this.state.count)}`; 
  }
  render () {
    return (
      <div className="counter">
        <h2>This is a Class counter</h2>
        <p>amount: {this.state.count} </p>
        <button
        onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
      } }
      >
        
        more</button>
      <button className= "add-btn"
        onClick={() => {
          this.setState({
            count: this.state.count -1,
          });
        } }
        >
      reduce</button>
      </div>
    );
  }
} 
//func
const Function = () => {
  const [like, setLike] = useState(0);

useEffect (() => {
  document.title = `Func update ${like}'`
})
return (
<div className="count">
  <h1> FUN FACT ABOUT CAT</h1>
  <p>You know what? Cat's love sign is not the same as a human, they usually 'slowly blink their eyes' to the person they like. 

    So if your cat is blinking at you, they totally say "I LOVE YOU!".
  </p>
  <img
  widht = {500}
  height = {300}
  src = "https://i.pinimg.com/originals/03/40/d9/0340d9c4771361442d0f85f1910a364e.gif"
  ></img>
  
  <button
  onClick={() => {
    setLike(like +1);
  }}
  >
    
    <img
    width={20}
    height={20}
    src="https://www.freeiconspng.com/thumbs/like-icon-png/black-like-icon-png-13.png" 
    ></img> 
  </button>
  <p>{like}</p>
</div>
);
};
const styles = {
  blogPostBtn: {
    display: "flex",
  },
};


//Blog
const BlogPost = (props) =>{
  
  return (
    <div className="blog">
      <Function></Function>
      <hr></hr>
      <h1>{props.title}</h1>
    <style jsx>
      {
        `.blog {
        max-width: 800px;
        margin: 50px;
        padding: 20px;
        text-align: left;
        }
        .count {
        margin: 20px;
        padding: 30px;
        font-size: 22px;
        border: 2px solid #ddd;
        border-radius: 10px;
        background-color: #faede3;
        }
        button {
        padding: 10px 20px;
        font-size: 15px;
        border: none;
        transition: background-color 0.3s
        .product-card (
        margin: 20px 0;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #71a2a6;
        )
        }
        `
      }
    </style>
    </div>
      
  );
};

//Product component
const ProductComp = (props) => {
  return (
    <div className="product-card">
      <h1>{props.pdtitle}</h1>
      <h2>{props.pddecs}</h2>
      <img
      className="product-main-img"
      src= {props.pdimg}
      ></img>
      <p>{props.pdprice}</p>
      <p>Product Component</p>
    </div>
  )
}


//Main component
const Day2 = () => {
  const pdtitle ="Zumba Dancing";
  const pddesc = "Happy and Healthy at the same time! Join us now!!!";
  const pdimg = "https://media.gettyimages.com/id/1068451812/photo/laos-vientiane-mekong-riverfront-outdoor-excercise-class.jpg?s=612x612&w=gi&k=20&c=cM6N3bAHgVnrZeis0IYLahTmCf_binb-z2x17XFK63g=";
  const pdprice ="20,000Kip/hr";
  const pdDetail = [
    {    
      title: "Zumba Dancing",
      desc: "Happy and Healthy at the same time! Join us now!!!",
      img: "https://media.gettyimages.com/id/1068451812/photo/laos-vientiane-mekong-riverfront-outdoor-excercise-class.jpg?s=612x612&w=gi&k=20&c=cM6N3bAHgVnrZeis0IYLahTmCf_binb-z2x17XFK63g=",
      price: "20,000Kip/hr",
    },
    {    
      title: "Zumba Dancing",
      desc: "Happy and Healthy at the same time! Join us now!!!",
      img: "https://media.gettyimages.com/id/1068451812/photo/laos-vientiane-mekong-riverfront-outdoor-excercise-class.jpg?s=612x612&w=gi&k=20&c=cM6N3bAHgVnrZeis0IYLahTmCf_binb-z2x17XFK63g=",
      price: "20,000Kip/hr",
    },
  ]
  return (
     <div className="app">
      <FunctionalCounter></FunctionalCounter>
      <ClassCounter></ClassCounter>
      <hr></hr>
      <BlogPost></BlogPost>
      <hr></hr>
      <p>5000</p>
      {pdDetail.map((el, index) => {
        <p>(index)</p>
      } )}
      {pdDetail.map((element, index) => (

        <ProductComp
          pdimg={element.img}
          pdtitle={element.title}
          pddecs={element.desc}
          pdprice={element.price}
        ></ProductComp>
      ))}
      
    
      <style jsx>
        {
          `.app {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
            }
            .counter {
            margin: 20px 0;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #71a2a6;
            }
            p{
            font-size: 18px;
            }
            
            button {
            padding: 10px 20px;
            margin: 10px;
            font-size: 16px;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            background-color: green;
            }
            .add-btn {
            margin: 20px 0;
            background-color: #36b6bf;}               
          .product-card {
          margin: 20px 0;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #71a2a6;
        }
          `
        }
      </style>
    </div>
  );
};

export default Day2;








