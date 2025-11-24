import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";
import {Books} from './books'
import Book from './Book'

// use caps for naming cmpt - component
// function SayHello(){
//     return <h2>Welcome to React Demo!!!</h2>
// }

// function SayHello(){
//     return React.createElement('h2',{},'Welcome to React Demo!');
// }

// function SayHello(){
//     return(
//         <div>
//             <h1>Hello World</h1>
//         </div>
//     )
// }

// function SayHello(){
//     return React.createElement(
//         "div",
//         {},
//         React.createElement(
//             "h1",
//             {},
//             "Hello World!!"
//         )
//     );
// }

//JSX - Javascript XML
// component always  returns single element
//wraping elements like div/section/article or fragment
// function SayHello() {
//   return (
//     <div>
//       <div>
//         <h1>Hello World 1</h1>
//       </div>
//       <ul>
//         <li>Hello</li>
//       </ul>
//       <div>
//         <h2>Hello World 2</h2>
//       </div>
//     </div>
//   );
// }

// use camelCase for html attributes
// function SayHello() {
//   return (
//     <React.Fragment>
//       <div className="abc">
//         <h1 onClick>Hello World 1</h1>
//       </div>
//       <ul>
//         <li>Hello</li>
//       </ul>
//       <div>
//         <h2>Hello World 2</h2>
//       </div>
//     </React.Fragment>
//   );
// }

// close every element
// function SayHello() {
//   return (
//     <React.Fragment>
//       <div className="abc">
//         <h1 onClick>Hello World 1</h1>
//       </div>
//       <ul>
//         <li>Hello</li>
//       </ul>
//       <div>
//         <h2>Hello World 2</h2>
//         <input type="text" />
//       </div>
//     </React.Fragment>
//   );
// }

// Formatting
// function SayHello() {
//   return ( <React.Fragment>
//       <div className="abc">
//         <h1 onClick>Hello World 1</h1>
//       </div>
//       <ul>
//         <li>Hello</li>
//       </ul>
//       <div>
//         <h2>Hello World 2</h2>
//         <input type="text" />
//       </div>
//     </React.Fragment>
//   )
// }

// function SayHello() {
//   return (
//     <>
//       <HelloWorld />
//       <Message />
//     </>
//   );
// }

// function HelloWorld() {
//   return <h1 className ='heading'>Hello World !!</h1>;
// }

// function Message() {
//   return <p style={{color : "red", fontSize : "40px"}}>This is React Demo</p>;
// }

// function SayHello() {
//   return <React.Fragment>
//       <div>
//         <h1>Hello World 1</h1>
//       </div>
//       <ul>
//         <li>Hello</li>
//       </ul>
//       <div>
//         <h2>Hello World 2</h2>
//       </div>
//     </React.Fragment>

// }

//render has two params(arguments)
// a) what do you want to render
// b)where do you want to render
// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<SayHello />);

//-------------------------------------Basic & CSS---------------------------------------------

// // function declaration
// function SayHello(name){
//     console.log(`Hello, ${name}`);
// }

// SayHello('test');

// // function expression
// const hello = function(name){
//     console.log(`Hello, ${name}`);
// }

// hello('test1');

// const hello1 = (name) => {
//     console.log(`Hello, ${name}`)
// }

// hello1('test2');

//-----------------------------------------Props-----------------------------------------------

// const firstBook = {
//   title : "Kannada",
//   author : "Raj"
// }

// const secondBook = {
//   title : "MicroDegree",
//   author : "Bhagyashree"
// }

// function BookList() {
//   return (
//     <>
//       <Book title={firstBook.title} author={firstBook.author} />
//       <Book title={secondBook.title} author={secondBook.author} />
//     </>
//   );
// }


function BookList() {
  return (
    <>
      {Books.map((bk) => {
        return (
          <Book item = {bk} />
        )        
      })}
    </>
  )
}

//Parent component
// function BookList(){
//   return (
//     <>
//       <Book title = "Kannada" author = "Raj" age = {30} />
//       <Book title = "MicroDegree" author = "Bhagyashree" />
//       <Book title = "UI">
//         <p>Author of this book is upendra</p>
//       </Book>
//     </>
//   )
// }

//Child component
//Child component
// function Book(props){
//   console.log(props);
//   return(
//   <>
//     <h1>{props.title}</h1>
//     <p>{props.author}</p>
//     <p>{props.age}</p>
//   </>
//   )
// }
// -----------------OR--------------------
// function Book(props){
//   console.log(props);
//   const{title, author} = props;
//   return(
//   <>
//     <h1>{title}</h1>
//     <p>{author}</p>
//   </>
//   )
// }
// -----------------OR--------------------
// function Book({ title, author, children }) {
//   console.log(children);
//   return (
//     <>
//       <h1>{title}</h1>
//       <p>{author}</p>
//       {children}
//     </>
//   );
// }

// function Book(props) {
//   function clickHandler(){
//     alert("Thanks For Purchasing");
//   }
//   return (
//     <>
//       <h1>{props.item.title}</h1>
//       <p>{props.item.author}</p>
//       <button type = "button" onClick={clickHandler}>Purchase</button>
//     </>
//   );
// }



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);
