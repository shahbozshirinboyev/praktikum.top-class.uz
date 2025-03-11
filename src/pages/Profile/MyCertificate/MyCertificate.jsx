import React from 'react'

function MyCertificate() {
  return (
    <div className='w-full p-3 bg-white rounded-lg'>  <div className='w-full p-3 bg-white rounded-lg text-center'>
      <div className='flex flex-col items-center justify-center p-8'>
        <i class="bi bi-award-fill text-4xl text-[#c9c9c9] px-2 py-2 rounded-lg  mb-8" ></i>

        <div>
          <h1 className='font-semibold text-[#263039] mb-1.5'>Sizda hali sertifikatlar mavjud emas</h1>
          <p className='text-[#7F868B] mb-6'>Bu yerda kurslaringizni muvaffaqiyatli tamomlaganingiz uchun berilgan sertifikatlarni ko’rishingiz mumkin bo’ladi.</p>
        </div>
        <button className='bg-blue-500 px-3 py-3 rounded-xl text-white'>Kurs sotib ilish</button>
      </div>
    </div>
    </div>
  )
}

export default MyCertificate