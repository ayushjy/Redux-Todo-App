import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import EditModule from './EditModule';
import DeleteModule from './DeleteModule';

const Todolist = ({ listItem }) => {
  const id = listItem.id;
  const [isDotOpen, setIsDotOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(false);

  const handleDotButton = () => {
    setIsDotOpen(!isDotOpen);
  };

  const handleEditClick = () => {
    setIsEditOpen(true);
    setIsDotOpen(false);
  };

  const handleDeleteClick = () => {
    setIsDeleteOpen(true);
    setIsDotOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-[#062925]';
      case 'Pending':
        return 'text-[#8f0e0e]';
      case 'Progress':
        return 'text-[#F9BE02]';
    }
  };

  return (
    <div>
      {/* bg-[#4ABDAC] */}
      <div className='relative flex justify-between bg-[#3f72af] shadow-md shadow-zinc-600 hover:shadow-zinc-800 px-4 py-5 my-2 rounded-lg z-10 	'>
        <div className='flex flex-col gap-3 items-start'>
          {listItem.listName && (<div className='font-bold  text-slate-100 text-2xl form'>{listItem.listName}</div>)}
          {listItem.description && (<div className='font-medium text-slate-200 text-lg desc'><span className='text-[#E5E338]'>Desc:</span> {listItem.description}</div>)}
          {listItem.status && <div className='font-medium text-lg desc'><span className='text-[#E5E338]'>Status:</span> <span className={`${getStatusColor(listItem.status)}`} >{listItem.status}</span></div>}
        </div>
        <div onClick={handleDotButton} className='cursor-pointer text-slate-200'>
          <BsThreeDotsVertical size={20} />
        </div>
        {isDotOpen && (
          <div className='absolute bg-[#f9f7f7] top-12 right-0 w-56 px-4 py-3 flex flex-col justify-center gap-5 shadow-2xl rounded-md z-30'>
            <div className='flex gap-2 items-center text-slate-700 cursor-pointer' onClick={handleEditClick}>
              <MdDriveFileRenameOutline size={20} />
              <div className='form'>Update</div>
            </div>
            <div className='flex gap-2 items-center text-red-700 cursor-pointer' onClick={handleDeleteClick}>
              <RiDeleteBinLine size={20} />
              <div className='form'>Delete</div>
            </div>
          </div>
        )}
      </div>

      {isEditOpen && (
       <EditModule setIsEditOpen={setIsEditOpen} setUpdateTodo={setUpdateTodo} id={id} />
      )}
      {isDeleteOpen && (
        <DeleteModule listItem={listItem} setIsDeleteOpen={setIsDeleteOpen} />
      )}
    </div>
  );
};

export default Todolist;
