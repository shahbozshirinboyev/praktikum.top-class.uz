import React from 'react'

function PaymentHistory() {
  return (
    <div className='w-full p-8 bg-white rounded-lg'>
      <h1 className='font-semibold p-2 text-xl'>Tolovlar tarixi</h1>
      <div className="overflow-x-auto">


  <table className="table mt-4 p-6">
 
    <thead  className='bg-[#F5FAFF] rounded-xl boeder-none'>
      <tr className='text-[#3F9CFB] border-none rounded-xl '>
        <th>KURS NOMI 
          <i class="bi bi-caret-down-fill"></i>
        </th>
        <th>SANA
        <i class="bi bi-caret-down-fill"></i>
        </th>
        <th>QIYMAT
        <i class="bi bi-caret-down-fill"></i>
        </th>
        <th>TO'LOV TURI
        <i class="bi bi-caret-down-fill"></i>
        </th>
        <th>STATUS
        <i class="bi bi-caret-down-fill"></i>
        </th>
      </tr>
    </thead>
    <tbody>

      <tr className='border-none'>
        <td>Professional Node.js: noldan boshlab eʼlonlar sayti  <br /> yaratishni oʻrganing</td>
       <td>28.11.2024</td>
       <td className='text-[#3F9CFB]'>247,000 so'm</td>
       <td>Bir martalik toʻlov</td>
       <td className='text-[#FDC724]'>Jarayonda</td>
      </tr>
    
    

   
    </tbody>
  </table>
</div>

      </div>
  )
}

export default PaymentHistory