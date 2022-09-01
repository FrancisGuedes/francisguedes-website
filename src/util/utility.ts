import * as endpoint from '../api/endpoints';

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

export namespace WindowSizeSpace {
  export interface IWindowSize {
  innerWidth: number, 
  innerHeight: number
  }

  export function getWindowSize(): IWindowSize {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
}

export interface INavbar {
  hero: string,
  who: string,
  work: string,
  play: string
}

export function changingCssVariableBasedOnNavbarUrl(cssVariableName: string, cssValues: INavbar): void {
  // use when it's needed to change css based on current navbar url
  // 1st param is the name of the param that goes to the css
  // 2nd param is an object of type Navbar that will be the value of the 1st param
  const currentLocationUrl: string = window.location.pathname;
  const urlHomeLocation: string = endpoint.urlHome;
  const urlWhoLocation: string = endpoint.urlWho;
  const urlWorkLocation: string = endpoint.urlWork;
  const urlPlayingLocation: string = endpoint.urlPlaying;

  const urls: Array<string> = [urlHomeLocation, urlWhoLocation, urlWorkLocation, urlPlayingLocation];
  const cssValue: Array<string> = Object.values(cssValues);

  // mapps the navbar url with the value of object to be injected on the name css param
  // {url: cssValue}
  const urlMappedValue = cssValue.map((value, index) => {
      const urlMappingCssValue: Record<string, string> = {};
      const key = urls[index];
      urlMappingCssValue[key] = value;
      return urlMappingCssValue;
    }
  );

  // looping through the mapped object so it can map the correct
  // navbar url with the value to go to the css
  for (const key in urlMappedValue) {
    const navbarUrl = Object.keys(urlMappedValue[key]).toString();
    const valueToCss = Object.values(urlMappedValue[key]).toString();
    switch(currentLocationUrl) {
      case navbarUrl:
        document.documentElement.style.setProperty(`--${cssVariableName}`, valueToCss);
        break;
    }
  }
};
