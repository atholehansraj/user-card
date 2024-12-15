import React from 'react'


const Profile = ({values,eventHandle,index}) => {
 
    // const {name,email,phone,image,friends} = values
    // console.log(friends);
    
   
  return (
    
        <div className='h-[550px] w-[350px] bg-[#D6C0B3] m-10 flex flex-col flex-wrap items-center p-4 rounded-3xl hover:scale-[1.1] ease-linear duration-200' >
            <div className='h-2 w-28 bg-slate-400 mb-4 rounded-3xl'>

            </div>
            <div className='h-[40%] w-full bg-lime-500 rounded-[1em]'>
                <img src={values.image} alt="" className='object-cover object-center w-full h-full rounded-2xl' />
            </div>
            <div className=' h-[50%] w-full p-5 flex flex-col gap-2 '>
                <h1 className=' text-3xl font-semibold'>Name :{values.name}</h1>
                <p className='text-xl'>Email : {values.email}</p>
                <h1 className='text-2xl '>Mo :{values.phone}</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, voluptatem.</p>
                <button onClick={()=>eventHandle(index)} className={`w-full p-2 ${values.friends? "bg-green-400":"bg-blue-500"} rounded-md font-bold`}>{values.friends ? "remove friend":"add friend"}</button>
            </div>
        </div>
   
  )
}

export default Profile;