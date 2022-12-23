import React from 'react'

export const Contattami = () => {
  return (
    <div id='Contattami' className='w-full h-[25vh] bg-black'>
        <div className='flex flex-col justify-start items-center h-[50vh] w-full max-w-[900px]'>
            <div className='px-[5vh] pt-[21vh] lg:pt-[18vh]'>
                <h3 className='text-[#00FFFF] text-3xl lg:text-6xl'>Contattami,</h3>
                <p className='text-[#FF0099] font-bold text-xs lg:text-sm'>compila il form oppure inviami una mail all'indirizzo liviodimola@gmail.com</p>
            </div>
        </div>
        <form action='https://getform.io/f/6cf70ce0-c943-4c56-bc85-b91dee3d6de0' method="POST" className='flex flex-col items-center w-full h-[50vh]'>
            <div className='flex flex-col'>
                <input className='bg-[#E1D9D1] py-[1vh]' type='text' name='name' placeholder='Nome' />
                <input className='bg-[#E1D9D1] my-3 py-[1vh]' type='email' name='email' placeholder='Email' />
                <textarea className='bg-[#E1D9D1] py-[1vh]' rows='5' cols='30' name='message' placeholder='Messaggio'></textarea>
                <div className='text-center'><button formTarget='_blank' rel='noopener' className='text-black mx-auto w-[10vh] my-3 font-bold border-2 lg:border-4 border-[#FF0099] p-2 hover:bg-black hover:text-[#F0F8FF] active:scale-90'>Invia</button></div>
            </div>
        </form>
    </div>
  )
}
