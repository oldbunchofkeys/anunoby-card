import "./App.css";
import { useState, useEffect } from "react";
import Card from "./Card.jsx";

function App() {
  const API_URL = "https://anunoby-scraper.onrender.com/scrapedata";
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchItems();
  }, []);
  return (
    <>
      <Card items={items}></Card>
    </>
  );
}

export default App;
