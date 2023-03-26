import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/NestedComponents/Person'
import Card from './components/Card/Card'
import Message from './components/NestedComponents/Message'
import {guns} from '../test'

function App() {
  // const guns = [
  //   {
  //     id: 1,
  //     name: "GLOCK 17 Gen5",
  //     img: "https://raw.githubusercontent.com/mir-hussain/guns/main/guns/glock.png",
  //     bullet: "9mm",
  //     capacity: "17 + 1",
  //     action: "Semi-Automatic",
  //     price: "540",
  //     category: "Pistol",
  //   },
  //   {
  //     id: 2,
  //     name: "FN 509 Tactical",
  //     img: "https://raw.githubusercontent.com/mir-hussain/guns/main/guns/FN.png",
  //     bullet: "9mm",
  //     capacity: "10 + 1",
  //     action: "Semi-Automatic",
  //     price: "900",
  //     category: "Pistol",
  //   },
  //   {
  //     id: 3,
  //     name: "Kimber Custom 1911",
  //     img: "https://raw.githubusercontent.com/mir-hussain/guns/main/guns/ki%2Cber.png",
  //     bullet: "45 ACP",
  //     capacity: "7 + 1",
  //     action: "Semi-Automatic",
  //     price: "900",
  //     category: "Pistol",
  //   },
  //   {
  //     id: 4,
  //     name: "Beretta M9A4 RDO",
  //     img: "https://raw.githubusercontent.com/mir-hussain/guns/main/guns/beretta.png",
  //     bullet: "9mm",
  //     capacity: "18 + 1",
  //     action: "Semi-Automatic",
  //     price: "1000",
  //     category: "Pistol",
  //   }
  // ];

  return (
    <>
      <Person />  
      <Message></Message>
      {/* <div className='grid grid-cols-3 px-12 gap-4'>

      </div> */}
     <div className='grid grid-cols-3 px -12 gap-3'>
     {
       guns.map(item => (
        <Card {...item} key={item.id}/>
        ) )
      }
     </div>

    </>
  )
}

export default App
