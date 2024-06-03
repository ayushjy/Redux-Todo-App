
import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { useAppDispatch,useAppSelector } from '../../../lib/hooks';
import { update } from '../../../lib/features/list/listSlice';

const EditModule = ({id,setIsEditOpen}) => {  
    const existingList = useAppSelector((state) => state.list.list);
    const existinglistName=existingList[0].listName;
    const existingDesc=existingList[0].description;
    const [listName, setListName] = useState(existinglistName);
    const [description, setDescription] = useState(existingDesc);
    const [status, setStatus] = useState(''); 

    const dispatch = useAppDispatch();

    const handleEditButton = () => {
        dispatch(update({
                id,
                listName,
                description,
                status
            }))
            setIsEditOpen(false);
    };

    const handleCloseButton = () => {
        setIsEditOpen(false);
    }

    const handleStatusChange = (newStatus) =>()=> {
        setStatus(newStatus);
      };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-40">
            <div className="bg-white py-4 px-6 rounded-lg shadow-lg w-1/2">
                <div className='flex justify-between'>
                    <div className='text-xl font-bold form'>Update Todo</div>
                    <div onClick={handleCloseButton}><IoCloseOutline size={25} className='cursor-pointer' /></div>
                </div>
                <div className='flex flex-col gap-2 mt-6'>
                    <div className='font-semibold form'>Todo name</div>
                    <input
                        type="text"
                        value={listName}
                        onChange={(e) => setListName(e.target.value)}
                        className='form w-full px-2 py-3 border border-gray-300 rounded-md'
                    />
                </div>
                <div className='flex flex-col gap-2 mt-6'>
                    <div className='font-semibold form'>Description</div>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='form w-full px-2 py-3 border border-gray-300 rounded-md'
                    />
                </div>
                {/* <div className='flex flex-col gap-2 mt-6'>
          <div className='font-semibold'>Due Date</div>
          <input
            type="text"
            value={descriptionName}
            onChange={(e) => setModuleName(e.target.value)}
            className='w-full px-2 py-3 border border-gray-300 rounded-md'
          />
        </div> */}
                <div className='flex flex-col gap-2 mt-6'>
                    <div className='font-semibold formform '>Status</div>
                    <div className='space-x-4'>
                        <button onClick={handleStatusChange('Completed')} className='px-5 py-3 text-white text-base font-medium rounded-md bg-green-400 hover:bg-green-600 form'>Completed</button>
                        <button onClick={handleStatusChange('Progress')} className='px-5 py-3 text-white text-base font-medium rounded-md bg-yellow-400 hover:bg-yellow-500 form'>Progress</button>
                        <button onClick={handleStatusChange('Pending')} className='px-5 py-3 text-white text-base font-medium rounded-md bg-red-600 hover:bg-red-700 form'>Pending</button>
                    </div>
                </div>
                <div className='flex gap-3 justify-end mt-6'>
                    <button onClick={handleCloseButton} className='form px-5 py-3 text-gray-600 text-base font-semibold rounded-md border border-gray-300 hover:border-gray-400 hover:text-gray-700'>
                        Cancel
                    </button>
                    <button onClick={handleEditButton} className='form px-5 py-3 text-white text-base font-medium rounded-md bg-green-700 hover:bg-green-800'>
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditModule;
