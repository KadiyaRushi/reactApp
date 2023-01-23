import "./App.css";

function App() {
  const productList = [
    { name: "Spaker", prise: 20000 },
    { name: "Speaker cover", prise: 2000 },
    { name: "IPhone", prise: 130000 },
    { name: "Table Fan", prise: 3000 },
  ];
  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="nameAndPrise">
        <h3>Name</h3>
        <h3>Prise</h3>
      </div>

      {productList.map((item) => {
        console.log(item.name);
        return (
          <div className="flex_container">
            <h4>{item.name}</h4>

            <p>₹ {item.prise}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
