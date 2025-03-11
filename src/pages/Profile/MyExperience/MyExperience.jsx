import React from 'react'

function MyExperience() {
  return (
    <div>

      <div className='w-full p-3 bg-white rounded-lg text-center mb-6'>
        <div className='flex flex-col items-center justify-center p-8'>
          <i class="bi bi-book-fill text-white px-2 py-1 rounded-lg text-2xl bg-[#c9c9c9] mb-8" ></i>
          <div>
            <h1 className='font-semibold   mb-1.5'>Sizda hali ta'lim tajribasi mavjud emas</h1>
            <p className='text-[#7F868B] mb-6'>Bu yerda sizning ta'lim tajribalaringiz ko’rinib turadi.</p>
          </div>

          <button className="btn bg-blue-500 px-3 py-3 rounded-xl text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Ta'lim qo'shish</button>

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box p-5 text-left flex flex-col items-start">
              <h3 className="font-bold text-lg">Ta'lim qo'shish</h3>

              <fieldset className="fieldset w-full mt-5">
                <legend className="fieldset-legend text-sm flex items-center gap-1">
                  Yonalish nomi
                  <span className="text-red-500">*</span>
                </legend>

                <div className="relative w-full mt-2">
                  <input
                    type="text"
                    className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                    placeholder="Yonalishingizni yozing"
                    required
                  />
                  <i className="bi bi-book absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                </div>

              </fieldset>


              <fieldset className="fieldset w-full mt-5">

                <legend className="fieldset-legend text-sm flex items-center gap-1">
                  Oʻquv muassasasi nomi
                  <span className="text-red-500">*</span>
                </legend>
                <div className="relative w-full mt-2">
                  <input
                    type="text"
                    className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                    placeholder=" Oʻquv muassasasi nomini kiriting"
                    required
                  />
                  <i className="bi bi-buildings absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                </div>

              </fieldset>



              <legend className="fieldset-legend text-sm flex items-center gap-1 mt-5">
                Taʼlim turi
                <span className="text-red-500">*</span>
              </legend>

              <select className="select select-bordered w-full mt-2 border border-slate-300 bg-[#F5F7FA] ">
                <option className="text-gray-950">Kollej</option>
                <option className="text-gray-500">Mactab</option>
                <option className="text-gray-500">Universitet</option>
              </select>


              <fieldset className="fieldset w-full mt-5">
                <legend className="fieldset-legend text-sm flex items-center gap-1">
                  Muassasa veb sahifasi
                </legend>

                <div className="relative w-full mt-2">
                  <input
                    type="text"
                    className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                    placeholder="https://"
                    required
                  />
                  <i className="bi bi-link absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                </div>

              </fieldset>

              <fieldset className="fieldset w-full mt-5">
                <legend className="fieldset-legend text-sm flex items-center gap-1">
                  Muassasa veb sahifasi
                </legend>


                <div className="relative w-full mt-2">
                  <div className='relative'>
                    <input
                      type="date"
                      id='my-experience-date'
                      className="input border border-slate-300 bg-[#F5F7FA] w-full pr-3 text-gray-500"
                      required
                    />
                    <i className="bi bi-calendar absolute top-3 right-3 bg-gray-400 text-white px-1 rounded-lg"></i>
                  </div>
                </div>

              </fieldset>


              <div className="modal-action w-full flex justify-end">

                <form method="dialog">
                  <button className="bg-gray-400 rounded-lg px-2 py-1 text-white hover:bg-gray-500">Yopish</button>
                </form>
                <button className='bg-blue-400 rounded-lg px-2 py-1 text-white hover:bg-blue-500'>Qoshish</button>
              </div>

            </div>
          </dialog>

        </div>
      </div>

      <div className='w-full p-3 bg-white rounded-lg text-center'>
        <div className='flex flex-col items-center justify-center p-8'>
          <i class="bi bi-briefcase-fill text-4xl text-[#c9c9c9] px-2 py-2 rounded-lg  mb-8" ></i>

          <div>
            <h1 className='font-semibold text-[#263039] mb-1.5'>Sizda hali ish tajribasi mavjud emas</h1>
            <p className='text-[#7F868B] mb-6'>Bu yerda sizning ta'lim tajribalaringiz ko’rinib turadi.</p>
          </div>

          <button className="btn bg-blue-500 px-3 py-3 rounded-xl text-white" onClick={() => document.getElementById('my_modal').showModal()}>Ish tajribasi koshish</button>


          <dialog id="my_modal" className="modal">

            <div className="modal-box p-5 text-left flex flex-col items-start">
              <h3 className="font-bold text-lg">Ish tarjimasini qo'shish</h3>

              <fieldset className="fieldset w-full mt-5">
                <legend className="fieldset-legend text-sm flex items-center gap-1">
                Lovozim
                  <span className="text-red-500">*</span>
                </legend>
                <div className="relative w-full mt-2">
                  <input
                    type="text"
                    className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                    placeholder="Lovozimingizni yozing"
                    required
                  />
                  <i className="bi bi-briefcase-fill absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                </div>
              </fieldset>

              <fieldset className="fieldset w-full mt-5">
                <legend className="fieldset-legend text-sm flex items-center gap-1">
                  Kompaniya nomi
                  <span className="text-red-500">*</span>
                </legend>
                <div className="relative w-full mt-2">
                  <input
                    type="text"
                    className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                    placeholder=" Ish joigiz nomi"
                    required
                  />
                  <i className="bi bi-buildings absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                </div>
              </fieldset>


              <fieldset className="fieldset w-full mt-5">
                <legend className="fieldset-legend text-sm flex items-center gap-1">
                  Kompaniya veb sahifasi
                </legend>

                <div className="relative w-full mt-2">
                  <input
                    type="text"
                    className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                    placeholder="https://"
                    required
                  />
                  <i className="bi bi-link absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                </div>

              </fieldset>

              <fieldset className="fieldset w-full mt-5">
                <legend className="fieldset-legend text-sm flex items-center gap-1">
                  Bilim va k'onikmalar
                  <span className="text-red-500">*</span>
                </legend>
                <div className="relative w-full mt-2">
                  <input
                    type="text"
                    className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                    placeholder="Bilimingiz haqida yozing"
                    required
                  />
                  <i className="bi bi-book absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                </div>
              </fieldset>

              <fieldset className="fieldset w-full mt-5">
                <legend className="fieldset-legend text-sm flex items-center gap-1">
                 Muddati
                 <span className="text-red-500">*</span>
                </legend>

                <div className="relative w-full mt-2">
                  <div className='relative'>
                    <input
                      type="date"
                      id='my-experience-date'
                      className="input border border-slate-300 bg-[#F5F7FA] w-full pr-3 text-gray-500"
                      required
                    />
                    <i className="bi bi-calendar absolute top-3 right-3 bg-gray-400 text-white px-1 rounded-lg"></i>
                  </div>
                </div>

              </fieldset>


              <div className="modal-action w-full flex justify-end">
                <form method="dialog">
                  <button className="bg-gray-400 rounded-lg px-2 py-1 text-white hover:bg-gray-500">Yopish</button>
                </form>
                <button className='bg-blue-400 rounded-lg px-2 py-1 text-white hover:bg-blue-500'>Qoshish</button>
              </div>

            </div>

          </dialog>
        </div>
      </div>
    </div>

  )
}

export default MyExperience