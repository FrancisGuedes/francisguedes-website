import { useEffect, useState } from 'react'

function useGreyBody() {
  useEffect(() => {
    document.body.style.backgroundColor = '#ffd42d'

    console.log("document.body.style.backgroundColor:", document.body.style.backgroundColor)

    return () => {
      document.body.style.backgroundColor = '#fff'
      console.log("document.body.style.backgroundColor return", document.body.style.backgroundColor)
    }
  })
}

const useGenerateRandomColor = () => {
  const [color, setColor] = useState("")

  const generateColor = () =>{
      setColor(Math.random().toString(16).substr(-6));
  };
  return {color, generateColor};
    
};

export default {useGreyBody, useGenerateRandomColor};