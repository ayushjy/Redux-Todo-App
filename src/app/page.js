'use client'

import React,{useState} from 'react'
import Header from './components/Header'
import Todolist from './components/Todolist'
import Background from './components/Background'
import AddModule from './components/AddModule'
import { useAppSelector } from '../../lib/hooks'
const page = () => {
  const [addlist, setAddlist] = useState(false);
  const lists = useAppSelector((state) => state.list.list);
  return (
    <div className='px-36 py-16 bg-slate-300 h-full'>
      <Header addlist={addlist} setAddlist={setAddlist}/>
      {(lists.length===0)&&<Background/>}

      {addlist && (
          <AddModule addlist={addlist} setAddlist={setAddlist}/>
      )}
      {lists.length > 0 && (
                <div>
                    {lists.map((listItem, index) => (
                        <Todolist key={index} listItem={listItem} addlist={addlist} setAddlist={setAddlist}/>
                    ))}
                </div>
            )}
    </div>
  )
}

export default page