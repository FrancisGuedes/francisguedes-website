export function createClassName(defaultClass: string, classes?: string) {
  return classes ? `${classes} ${defaultClass}` : defaultClass;
}

export function getTextWidth(wordText: string, htmlTagId: string) {
  const canvas: any = document.createElement(htmlTagId);
  const context: any = canvas.getContext('2d');
  let text = context.measureText(wordText);
  return text.width;
}