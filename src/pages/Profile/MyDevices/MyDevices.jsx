import React from 'react'

function MyDevices() {
  return (
    <div className='w-full p-8 bg-white rounded-lg '>

      <div>
        <h1 className='font-semibold text-xl'>Faol qurilmalar</h1>
        <p className='text-[#7F868B] text-base mt-4 font-light'>Siz bir vaqtning oʻzida faqat 2ta qurilma orqali taʻlim olishingiz mumkin. Ilovalarni uchinchi qurilmada <br /> faollashtirish uchun avval mavjud ikkita qurilmalardan birini oʻchirishingiz kerak.</p>
      </div>

      <div className='bg-[#FFFCED] px-2 py-2 rounded-xl mt-4 flex'>
        <i class="bi bi-exclamation-circle-fill text-yellow-300 mr-3"></i>
        <h1 className='text-[#1A202C]'>Faqatgina 2ta qurilmadan kirishingiz mumkun </h1>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="table table-zebra mt-4">
    
          <thead className='bg-[#F5FAFF] rounded-xl '>
            <tr className=' text-[#3F9CFB] border-none rounded-xl'>
              <th>QURUIMA NOMI</th>
              <th>FAILLASHTIRILGAAN SANA </th>
              <th>HARAKARLAR</th>
            </tr>
          </thead>

          <tbody>
           
            <tr>
           
              <td className='flex'>
              <i class="bi bi-laptop bg-[#3F9CFB] text-white px-2 rounded-md text-xl inline-flex items-center justify-center"></i>
              <div className='ml-3'>
              <h1 className='font-medium'> Mac OS 10.15.7, Chrome 133</h1>
               <p className='text-green-500 text-xs'>Mazkur qurilma</p>
              </div>
              </td>

              <td>11:05:01, 04.03.2025</td>
              <td></td>
            </tr>

            <tr>
            <td className='flex items-center'>
              <i class="bi bi-phone bg-[#3F9CFB] text-white px-2 p-2 rounded-md text-xl inline-flex items-center justify-center"></i>
              <div className='ml-3'>
              <h1 className='font-medium text-center'> Mac OS 10.15.7, Chrome 133</h1>
              </div>
              </td>
              <td>13:38:34, 01.03.2025</td>
              <td>
                <button>
                <i class="bi bi-trash-fill text-red-500 hover:bg-red-200 "></i>
                  </button></td>
          
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyDevices