import React from 'react'

function MyInfo() {
  return (

    <div className='flex flex-col gap-4'>

      <div className="w-ful rounded-2xl p-2 bg-white">
        <div className="bg-blue-50 h-24 rounded-2xl"></div>

        <div className="flex flex-col items-start m -mt-[70px] p-5 ">
          <div className="w-24 h-24 bg-gray-100 border-[7px] border-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-gray-700 text-2xl font-semibold">ZJ</span>
          </div>

          <p className="mt-4 text-gray-700 text-lg font-semibold">
            zerd Jursinova
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
            Ma’lumotlarni o‘zgartirish
          </button>
        </div>
      </div>

      <div className='flex justify-between p-4 bg-white rounded-2xl'>
        <div className=''>
          <p className='mb-1.5 text-[#434D54]'>Telefon raqamingiz</p>
          <h1 className='font-semibold text-[#434D54]'>+998991449406</h1>
        </div>
        <div>
          <p className='text-[#434D54]'>Elektron manzilingiz</p>
        </div>
      </div>

      <div className='flex justify-between p-4 bg-white rounded-2xl'>
        <div className=''>

          <h1 className='font-semibold mb-1.5 text-[#434D54]'>Porolni ozgartirish</h1>
          <p className='text-[#7F868B]'>Bu yerda hisobingiz parolini oʻzgartirishingiz mumkin</p>
        </div>
        <div>
          <button className='border-2 border-blue-500 rounded-xl px-2 py-2 flex'>

            <p className='text-blue-500 mr-3'>Porolni ozgartirish </p>
            <i class="bi bi-box-arrow-up-right text-blue-500 "></i>
          </button>
        </div>
      </div>


      <div className='flex justify-between p-4 bg-white rounded-2xl'>
        <div className=''>

          <h1 className='font-semibold mb-1.5 text-[#434D54]'>Maolumatlarni Korsatish</h1>
          <p className='text-[#7F868B] text-sm'>Bu yerda hisobingiz parolini oʻzgartirishingiz mumkin</p>
        </div>
        <div>
          <input type="checkbox"
            className="toggle toggle-primary mt-4 peer checked:bg-blue-500 bg-gray-500"
          />

        </div>
      </div>




    </div>

  )
}

export default MyInfo