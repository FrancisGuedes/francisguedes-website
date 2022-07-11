import './wiggle.css';

//TODO Adicionar logica para a width do wiggle sobre o length de cada titulo pois esta no css
interface wiggleProps {
  wordText: string;
} 
/* const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); */
const Wiggle = ({wordText}: wiggleProps) => {
  const canvas = document.createElement('canvas');
  const context:any = canvas.getContext('2d');
  let text = context.measureText(wordText);
  console.log('text.width', text.width);
  console.log('measureText:', context.measureText(text).width);
  context.font = getComputedStyle(document.body).font;
  //context.measureText(text).width;

  console.log("context.font",context.font);
  //document.documentElement.style.setProperty('--text', `'${text.width}'`);
  document.documentElement.style.setProperty('--wiggleLength', text.width + 'px');

  return ( 
    <>
      <span id='canvas' className="wiggle"></span>
    </>
  );
}

export default Wiggle;