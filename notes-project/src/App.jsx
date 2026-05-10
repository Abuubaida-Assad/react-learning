import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState()
  const [details, setDetails] = useState()
  const [task, setTask] = useState([])
  const submitHandler= (e) =>{
    e.preventDefault()
    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form  onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex items-start flex-col'>
        <div className='flex gap-4 w-1/2 items-start flex-col '>
            <input type="text" placeholder='Enter Notes Heading'
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}    
            />
            {/* /// */}
           <textarea 
              className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
              placeholder='Write Details'
              rows="5"
              value={details}
              onChange={(e)=>{
                setDetails(e.target.value)
              }}
/>
            <button className='bg-white font-medium w-full outline-none text-black px-5 py-2 rounded'>Add Note</button>
        </div>
      </form>
        <div className='lg:w-1/2 lg:border1/2 p-10'>
        <h1 className='text-4xl font-bold'>Your notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
      {task.map(function (elem, idx) {

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        
  
          
          

        </div>

        </div>
    </div>
  )
}

export default App

  
