import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro'
import Shimmer from './assets/ShimmerUI'
import Body from './components/Body'
import Head from './components/Head'
import Quotes from './components/Quotes'
import Welcome from './components/Welcome'
import WarmUp from './components/WarmUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Training from './components/Training'
import CoolDown from './components/Cooldown'

function App() {
  const[loading,setLoading]=useState(true);
  const [fadeOut,setFadeOut]=useState(false);

  useEffect(() => {
    // Fake loading for demo purposes
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(()=>setLoading(false), 500);
    },2000);
    return () => clearTimeout(timer);
  }, []);

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:(
        <>
        <Head/>
        <Quotes/>
        <Body/>
        </>
      ),
      children: [
        {
          path: "/",
          element: <Intro />,
        },
        {
          path: "/welcome", // You can define the parent route here
          element: <Welcome />, // This will load the Welcome component
        },
        {
          path: "/welcome/warmup", // Path for warmup page
          element: <WarmUp />,
        },
        {
          path: "/welcome/training", // Path for training page
          element: <Training />,
        },
        {
          path: "/welcome/cooldown", // Path for cooldown page
          element: <CoolDown />,
        },
      ],
    }
  ])



 

  return (
    <>
    {
      loading ? (
        <div
          className={`transition-opacity duration-500 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
          ><Shimmer/></div>)
           : (
          <RouterProvider router={appRouter}/>
           )
    } 

     
    </>
  )
}

export default App
