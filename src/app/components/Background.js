
import React from 'react'

const Background = () => {
    return (
        <div>
            <div className='flex flex-col gap-6 justify-center items-center h-full py-12'>
                <div className=''>
                    <img src="/img/background-image.png" alt="stuff" className='w-80' />
                </div>
                <div className='flex flex-col justify-center gap-2'>
                    <div className='font-bold text-center text-lg desc'>Nothing added here yet</div>
                    <div className='text-gray-700 font-semibold desc'>Click on the [+] Add button to add items to this course</div>
                </div>
            </div>
        </div>
    )
}

export default Background