import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from './containers/hero/hero';
import Work from './containers/work/work';
import Playground from './containers/playground/playground';
import NotFound from './containers/errors/notFound';
import Navbar from './components/navbar/navbar';
import Who from './containers/who/who';
import { urlHome, urlPlaying, urlWho, urlWork } from './api/endpoints';
import LoadingScreen from './components/loading-screen/loadingScreen';

function App() {
  const location = useLocation();

  const [previousRouteObject, setPreviousRouteObject] = useState(location.state as string);
  const [isHomeUrlClicked, setHomeUrlClicked] = useState<boolean>(false);
  const [isWhoUrlClicked, setWhoUrlClicked] = useState<boolean>(false);
  const [isWorkUrlClicked, setWorkUrlClicked] = useState<boolean>(false);
  const [isPlayingUrlClicked, setPlaygroundUrlClicked] = useState<boolean>(false);
  const [isVariantsRight, setVariantsRight] = useState<boolean>(false);
  const [isVariantsLeft, setVariantsLeft] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const currentLocationUrl = window.location.pathname;
  const urlHomeLocation = urlHome;
  const urlWhoLocation = urlWho;
  const urlWorkLocation = urlWork;
  const urlPlayingLocation = urlPlaying;
  let previousRoute: string;
  
  useEffect(() => {
    let validRoute: string = validateRouteObject(previousRouteObject, previousRoute);
    isVariantsMovingRight(validRoute);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [location, previousRouteObject]);
  
  function validateRouteObject(previousRouteObject: string, previousRoute: string): string {
    // this function validate the previous route.
    // on the first render there is no previous route, therefore the previous path will be the one the user is currently on.
    if(previousRouteObject === null || previousRouteObject === undefined) {
      previousRoute = urlHomeLocation;
    }
    else {
      previousRoute = previousRouteObject;
    }
    return previousRoute;
  }

  function isVariantsMovingRight(previousRoute: string): boolean {
    // When a user is on a current url and clicks on a new one, the current turns instantly on the new one even though it takes seconds to make the transition.
    // To know wich way the transition goes, it's imperative to know the previous route the user was.
    // Imagine an array with the navbar tabs [home, who, work, playground]:
      // if user goes from 0 to 3 the transition must go to the left
      // if user goes from 3 to 0 the transition must go to the right
    // TODO refactor!

    //debugger
    if(previousRoute === urlHomeLocation){
      if(isWhoUrlClicked || isWorkUrlClicked || isPlayingUrlClicked){
        // use VariantsRight
        setVariantsRight(true);
        setVariantsLeft(false);
        return isVariantsRight;
      }
    } 
    else if(previousRoute === urlWhoLocation){
      if(isWorkUrlClicked || isPlayingUrlClicked){
        // use VariantsRight
          setVariantsRight(true);
          setVariantsLeft(false);
          return isVariantsRight;
      } else if(isHomeUrlClicked){
        // use VariantLeft
        setVariantsRight(false);
        setVariantsLeft(true);
          return isVariantsRight;
      }
    }
    else if(previousRoute === urlWorkLocation) {
      if(isPlayingUrlClicked){
        // use VariantsRight
          setVariantsRight(true);
          setVariantsLeft(false);
          return isVariantsRight;
      } else if(isHomeUrlClicked || isWhoUrlClicked){
          // use VariantLeft
          setVariantsRight(false);
          setVariantsLeft(true);
          return isVariantsRight;
      }
    }
    else if(previousRoute === urlPlayingLocation) {
      if(isHomeUrlClicked || isWhoUrlClicked || isWorkUrlClicked) {
        // use VariantLeft
        setVariantsRight(false);
        setVariantsLeft(true);
      return isVariantsRight;
      }
    }
    return false;
  }

  function handlingIntroActiveOnClick(): void{
    setPreviousRouteObject(currentLocationUrl);
    setHomeUrlClicked(true);
    setWhoUrlClicked(false);
    setWorkUrlClicked(false);
    setPlaygroundUrlClicked(false);
  }

  function handlingWhoActiveOnClick(): void{
    setPreviousRouteObject(currentLocationUrl);
    setHomeUrlClicked(false);
    setWhoUrlClicked(true);
    setWorkUrlClicked(false);
    setPlaygroundUrlClicked(false);
  }

  function handlingWorkActiveOnClick(): void{
    setPreviousRouteObject(currentLocationUrl);
    setHomeUrlClicked(false);
    setWhoUrlClicked(false);
    setWorkUrlClicked(true);
    setPlaygroundUrlClicked(false);
  }

  function handlingPlaygroundActiveOnClick(): void{
    setPreviousRouteObject(currentLocationUrl);
    setHomeUrlClicked(false);
    setWhoUrlClicked(false);
    setWorkUrlClicked(false);
    setPlaygroundUrlClicked(true);
  }

  return (
    <>
      { 
        isLoading 
        ? 
        <LoadingScreen/> 
        :
        (
        <AnimatePresence initial={false}>
          <Navbar 
            homeUrlClicked={handlingIntroActiveOnClick} 
            whoUrlClicked={handlingWhoActiveOnClick} 
            workUrlClicked={handlingWorkActiveOnClick} 
            playgroundUrlClicked={handlingPlaygroundActiveOnClick}
          />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero isVariantsRight={isVariantsRight}/>}/>
            <Route path="/who" element={<Who isVariantsRight={isVariantsRight}/>}/>
            <Route path="/work" element={<Work isVariantsRight={isVariantsRight}/>}/>
            <Route path="/playground" element={<Playground isVariantsRight={isVariantsRight}/>}/>
            <Route path="*" element={<NotFound isNavbarActive={false}/>} />
          </Routes>
        </AnimatePresence>
        )
      }
    </>
  );
}

export default App;
