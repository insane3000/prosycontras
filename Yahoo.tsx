"use client";

import React, { useState, useEffect } from "react";
import YahooFinance from "yahoo-finance2";

const StockData = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const result = await YahooFinance.quote("^GSPC"); // El símbolo para el S&P 500 en Yahoo Finance
        setData(result);
      } catch (err) {
        //@ts-ignore
        setError(err?.message || "");
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>S&P 500 Data</h1>
      {data && (
        <div>
          <p>Symbol: {data.symbol}</p>
          <p>Price: ${data.regularMarketPrice}</p>
          <p>Change: {data.regularMarketChange}%</p>
          <p>Change in Price: ${data.regularMarketChange}</p>
        </div>
      )}
    </div>
  );
};

export default StockData;
