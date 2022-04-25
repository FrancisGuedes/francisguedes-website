import { useState, useEffect } from "react";

// ir buscar as words e colocar um array de strings
const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex(index + 1);
  }, 5000);
  return () => clearInterval(interval);
});
