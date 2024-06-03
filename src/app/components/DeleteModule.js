
import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { useAppDispatch } from '../../../lib/hooks';
import { deleteSingleTodo } from '../../../lib/features/list/listSlice';

const DeleteModule = ({setIsDeleteOpen,listItem,updatedList}) => {
  const dispatch = useAppDispatch();

    const handleCancelButton = () => {
      setIsDeleteOpen(false);
    }

    const handleDeleteButton = ()=> {
      dispatch(deleteSingleTodo({ id: listItem.id}))
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-30">
            <div className="bg-white py-4 px-6 rounded-lg shadow-lg w-1/2">
                <div className='flex justify-between'>
                    <div className='text-xl font-bold form'>Are you sure to delete Todo</div>
                    <div onClick={handleCancelButton}><IoCloseOutline size={25} className='cursor-pointer' /></div>
                </div>           
                <div className='flex gap-3 justify-end mt-6'>
                    <button onClick={handleCancelButton} className='form px-5 py-3 text-gray-600 text-base font-medium rounded-md border border-gray-300 hover:border-gray-400 hover:text-gray-700 form'>
                        Cancel
                    </button>
                    <button onClick={handleDeleteButton} className='form px-5 py-3 text-white text-base font-medium rounded-md bg-green-800 form'>
                        yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModule;
