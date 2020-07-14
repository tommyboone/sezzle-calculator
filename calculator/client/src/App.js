import React from "react";
import "./styles/styles.css";
import Calculator from "./layout/Calculator/Calculator";
import ResultsTable from './layout/Calculator/Screen/ResultScreen/ResultsTable/ResultsTable'
const app = () => (
  <div className="app">
    <Calculator />
    <ResultsTable />
  </div>
);
export default app;
