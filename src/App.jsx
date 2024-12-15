import React, { useState } from 'react'
import Profile from './components/Profile';

const data = [
  {
    name: "Michael John",
    email: "michael.john@example.com",
    phone: "+1456789012",
    image: "https://plus.unsplash.com/premium_photo-1661317230910-b19bd874f19b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friends : true
  },
  {
    name: "jonny roy",
    email: "jonny.row@example.com",
    phone: "+123489012",
    image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friends : false
  }, 
  {
    name: "roil yadav",
    email: "roil.yadav@example.com",
    phone: "+1456789012",
    image: "https://images.unsplash.com/photo-1588376483402-acc965d4ac21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friends : true
  },
  {
    name: "Samanth",
    email: "samantha@example.com",
    phone: "+1578943201",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friends : false
  },
  {
    name: "David Miller",
    email: "david.miller@example.com",
    phone: "+1987654320",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friends : true
  },
  {
    name: "Emily Wilson",
    email: "emily.wilson@example.com",
    phone: "+1234987654",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    friends : false
  }
];


const App = () => {
  
  
  const [RealData, setRealData] = useState(data)
  const eventHandle = (cardIndx)=> {
      
      setRealData((prev)=>{ return prev.map((item,index)=>{
          if(index === cardIndx){
            return {...item, friends : !item.friends}
          }else{
            return item
          }
      })})
      
  }

  return (
    <div className='flex flex-wrap justify-around bg-[#E4E0E1]'>
      {RealData.map((item, indx)=>{
       return <Profile key={indx} index={indx} eventHandle={eventHandle}  values={item} />

      })}
      

    </div>
  )
}

export default App