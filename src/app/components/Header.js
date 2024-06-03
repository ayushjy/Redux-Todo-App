
import React, { useState,useEffect, useRef } from 'react';
import { IoAddOutline } from "react-icons/io5";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsListTask } from "react-icons/bs";
import { useAppDispatch } from '../../../lib/hooks';
import { deleteLists } from '../../../lib/features/list/listSlice';
const Header = ({setAddlist}) => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const dispatch = useAppDispatch();
  

  const handleAddButton = () => {
    setIsAddOpen(!isAddOpen);
  };

  const AddTodo = () => {
    setAddlist(true);
    setIsAddOpen(false);
  };

  const ResetTodo = () => {
    dispatch(deleteLists())
    setIsAddOpen(false);
  };

  return (
    <div className='flex justify-between pb-12'>
      <div className='text-2xl text-[#ff5722] font-bold form'>Redux ToDo App</div>
      <div onClick={handleAddButton} className='flex rounded gap-1 px-2 py-2 justify-center items-center bg-red-700 cursor-pointer'>
        <div className='text-white'><IoAddOutline size={20} /></div>
        <div className='text-white form text-lg'>Add</div>
        <div className='text-white'>{isAddOpen ? <MdArrowDropUp size={20} /> : <MdArrowDropDown size={20} />}</div>
      </div>
      {isAddOpen && (
        <div  className='absolute bg-white top-28 right-36 w-64 px-4 py-3 flex flex-col justify-center gap-5 shadow-2xl rounded-md z-20'>
          <div onClick={AddTodo} className='flex gap-2 items-center cursor-pointer'>
            <div className='form'><BsListTask size={20} /></div>
            <div className='form text-lg'>Add ToDo</div>
          </div>
          <div onClick={ResetTodo} className='flex gap-2 items-center cursor-pointer'>
            <div className='form'><RiDeleteBinLine size={20} /></div>
            <div className='form text-lg'>Reset</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
