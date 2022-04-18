import {React , useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks , setStocks] = useState([])
  const [portfolio , setPortfolio] = useState([])
  const [search , setSearch] = useState('Tech')
  const [sort , setSort] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then (r =>r.json())
    .then (stocks => {
      const newStocks = stocks.map(stock => { return {...stock , portfolio: false }})
      setStocks(newStocks)
    })
  } , [])

  return (
    <div>
      <SearchBar setSearch={setSearch} setSort={setSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} setPortfolio={setPortfolio}  search={search} sort={sort}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} setPortfolio={setPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
