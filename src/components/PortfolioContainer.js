import {React } from "react";
import { render } from "react-dom";
import Stock from "./Stock";

function PortfolioContainer({portfolio , setPortfolio}) {
  
  const renderPortfolio = portfolio.map(stock => <Stock stock={stock} portfolio={portfolio} setPortfolio={setPortfolio}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        renderPortfolio
      }
    </div>
  );
}

export default PortfolioContainer;
