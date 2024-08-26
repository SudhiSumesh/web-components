import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const tableRef = useRef(null);
  const tableData = [
    ["123", "Amal", "Krish", "443"],
    ["124", "Jackson", "Sam", "423"],
  ];

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.data = tableData;
    }
  }, [tableData]);
  return (
    <>
      <h1>Web Component in React App</h1>
      <trillium-table
        id="users"
        data-headers="ID, First Name,Last Name,MRN"
        ref={tableRef}
      >
        {" "}
      </trillium-table>
    </>
  );
}

export default App;
