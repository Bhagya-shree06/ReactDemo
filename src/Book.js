function Book(props) {
  function clickHandler(title){
    console.log(title);
    var text = "Thanks For Purchasing " + title + " Book";
    alert(text);
  }
  return (
    <>
      <h1>{props.item.title}</h1>
      <p>{props.item.author}</p>
      <button type = "button" onClick={() => clickHandler(props.item.title)}>Purchase</button>
    </>
  );
}

export default Book;

