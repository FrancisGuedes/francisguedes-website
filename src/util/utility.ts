export function createClassName(defaultClass: string, classes?: string): string {
  return classes ? `${classes} ${defaultClass}` : defaultClass;
}

export function getTextWidthInPixels(wordText: string): number {
  const canvas: any = document.createElement('canvas');
  const context: any = canvas.getContext('2d');
  let text = context.measureText(wordText);
  return text.width;
}

export function convertPXToVW(px: number): number {
  return +(px * (100 / document.documentElement.clientWidth)).toFixed(1)*1.5;
}

export function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}