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
        return 'text-green-600';
      case 'Pending':
        return 'text-red-600';
      case 'Progress':
        return 'text-yellow-400';
    }
  };

  return (
    <div>
      <div className='relative flex justify-between bg-slate-400 border border-gray-200 px-4 py-5 my-2 rounded-md z-10'>
        <div className='flex flex-col gap-3 items-start'>
          {listItem.listName && (<div className='font-bold  text-gray-800 text-2xl form'>{listItem.listName}</div>)}
          {listItem.description && (<div className='font-semibold text-slate-200 desc'>{listItem.description}</div>)}
          {listItem.status && <div className='font-semibold text-slate-200 desc'>Status: <span className={`${getStatusColor(listItem.status)}`} >{listItem.status}</span></div>}
        </div>
        <div onClick={handleDotButton} className='cursor-pointer'>
          <BsThreeDotsVertical size={20} />
        </div>
        {isDotOpen && (
          <div className='absolute bg-white top-12 right-0 w-56 px-4 py-3 flex flex-col justify-center gap-5 shadow-2xl rounded-md z-30'>
            <div className='flex gap-2 items-center text-gray-500 cursor-pointer' onClick={handleEditClick}>
              <MdDriveFileRenameOutline size={20} />
              <div>Update</div>
            </div>
            <div className='flex gap-2 items-center text-red-500 cursor-pointer' onClick={handleDeleteClick}>
              <RiDeleteBinLine size={20} />
              <div>Delete</div>
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
