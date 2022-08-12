import './wiggle.css';
import { useState, useEffect } from 'react';
import { convertPXToVW, getTextWidthInPixels } from '../../util/utility';
import { useLocation } from 'react-router-dom';

interface wiggleProps {
  wordText?: string;
  htmlClassName?: any;
  labelTextProps?: any;
} 
const Wiggle = ({wordText, htmlClassName, labelTextProps}: wiggleProps) => {
  // TODO 1 refactorizar: logica não está generalista.
  const [wiggleWidthList, setWiggleWidthList] = useState<number[]>([]);
  const location = useLocation();

  const urlHomeLocation = "/"

  useEffect(() => {
    cssWiggleWidthForObjectProps(labelTextProps);
    renderWiggleSvgColors();
  }, [location])

  const cssWiggleWidthForObjectProps = (props: object): void => {
    const labelTextObject: object = {...props};

    let labelTextValues: string[] = Object.values(labelTextObject);

    let labelTextItem: number[] = labelTextValues.map(value => 
    getTextWidthInPixels(value))
  
    let labelTextValue: number[] = labelTextItem.map(value => convertPXToVW(value));
    setWiggleWidthList(labelTextValue);

    document.documentElement.style.setProperty('--wiggleLength1', labelTextValue[0] + 'vw');
    document.documentElement.style.setProperty('--wiggleLength2', labelTextValue[1] + 'vw');
    document.documentElement.style.setProperty('--wiggleLength3', labelTextValue[2] + 'vw');

    /* return labelTextValue.forEach((value: any, index: any) => {
      document.documentElement.style.setProperty(`--wiggleLength${index+1}`, value[index] + 'vw');
    }) */
  }

  const renderWiggleSvgColors = () => {
    const svgUrlWhite = process.env.PUBLIC_URL +  '/wiggle-white.svg';
    const svgUrlYellow = process.env.PUBLIC_URL +  '/wiggle-yellow.svg';

    window.location.pathname === urlHomeLocation ? document.documentElement.style.setProperty('--wiggleSvg', `url('${svgUrlWhite}')`) : document.documentElement.style.setProperty('--wiggleSvg', `url('${svgUrlYellow}')`);
  }

  return ( 
    <>
      <span
        id='canvas' 
        className="wiggle"
      ></span>
    </>
  );
}

export default Wiggle;