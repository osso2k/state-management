import { useState } from 'react';
import as from './assets/as.mp4';
import useGroceryStore from './stores/useGroceryStore';


const App = () => {
  const [input, setInput] = useState<string>("")
  const { items , add , remove} = useGroceryStore()


  const handleSubmit = (e:React.SubmitEvent)=>{
    e.preventDefault()
    if (!input){
      alert("NO?")
    }
    else{
      add(input)
      setInput('')
    }

  }
  return (
    <div className={`h-screen w-screen overflow-hidden relative text-zinc-600`}>
      <video autoPlay loop muted playsInline className="absolute top-0 min-w-full min-h-full left-0 w-auto h-auto object-cover">
        <source src={as} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/5">
      <div className='w-full h-full flex flex-col  items-center'>
        <h1 className='text-4xl text-black mt-40 mb-5'>State management</h1>
        <form className='flex flex-col' onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input} className='border border-black rounded-lg w-52 h-10 ml-2 pl-2' />
        <button className="px-4 py-2 border bg-green-200 text-2xl w-fit rounded-lg mx-auto mt-2" type='submit'>Add</button>
        </form>
        <ul className="w-full">
          <h1 className="text-4xl font-bold italic mt-25 mb-3 text-center">List</h1>
          {items ? items.map((item)=>(
            <li className="mx-auto border border-black rounded-lg w-[40%] h-28" key={item.id}>
              <span className="text-3xl mb-1">{item.text}</span>
              <button className="px-4 py-2 border bg-red-200 text-lg w-fit rounded-lg mx-auto mt-2 " onClick={()=>remove(item.id)}>remove</button>
            </li>))
            :(<><p>Noitems</p> </>)
          }
        </ul>
      </div>
      </div>
        
    </div>
  )
}

export default App