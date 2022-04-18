import {React} from "react";

function Stock({stock , setPortfolio }) {
  const { name , price  } = stock
  

  function handleClick(){
      if (stock.portfolio === false) {
        setPortfolio(current => [...current , stock])
        stock.portfolio = true
      } else { 
        setPortfolio(current => current.filter(stock => stock.name !== name))
        stock.portfolio = false}
      
      
  }
  
  return (
    <div >
      <div className="card">
        <div className="card-body" onClick={handleClick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
