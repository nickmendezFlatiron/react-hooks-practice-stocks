import React from "react";
import Stock from "./Stock";

function StockContainer({stocks , search , setPortfolio , sort}) {

  
  const numberSort = [...stocks].sort((a , b) => {return a.price - b.price})
  const abcSort = [...stocks].sort((a , b) => a.name.localeCompare(b.name))
  console.log("numberSort " , numberSort)
  console.log("stocks" , stocks)
  console.log("abc sort" , abcSort)
  
  // if(sort === "Price") {
  //   sortedArray = numberSort
  // } else if(sort === "Alphabetically"){
  //   sortedArray = abcSort
  // } else return stocks
  const end = sort === "" ? stocks : abcSort
  const finish = sort === "Price" ? numberSort : end 
 

  const filterStocks = finish.filter(stock => stock.type === search)

  const renderStocks = filterStocks.map(stock => <Stock stock={stock} key={stock.id} setPortfolio={setPortfolio}/>)
  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
