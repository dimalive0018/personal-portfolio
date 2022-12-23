import React from 'react';

export const Progetti = () => {
    const progetti = [
        {
            id: 'Tris (tutorial React con Css)',
            url: 'https://tris-tic-tac-toe.netlify.app/',
            key: 1,
        },
        {
            id: 'Random Quote Machine',
            url: 'https://random-machine-quote.netlify.app/',
            key: 2,
        },
        {
            id: 'Markdown Previewer',
            url: 'https://mark-previewer.netlify.app/',
            key: 3,
        },
        {
            id: 'Drum Machine',
            url: 'https://drummm-machine.netlify.app/',
            key: 4,
        },
        {
            id: 'Calculator',
            url: 'https://react-calcolatrice.netlify.app/',
            key: 5,
        },
        {
            id: 'Pomodoro Clock',
            url: 'https://react-25-clock.netlify.app/',
            key: 6,
        }
    ];
  return (
    <div id='Progetti' className='w-full h-[100vh] bg-black flex flex-col justify-center'>
        <div className='w-full grid lg:grid-cols-2 lg:pr-[10vh]'>
            <h3 className='text-[#00FFFF] pl-[10vh] text-3xl lg:text-6xl'>Progetti</h3>
            <div className='grid grid-cols-6'>
                {progetti.map((progetto) => (
                    <div className='bg-[#beef00]' key={progetto.key}><a href={progetto.url} target='_blank' rel='noreferrer'><h3 className='font-alfa mt-2 text-center text-xs text-[#F0F8FF]'>{progetto.id}</h3></a></div>
                ))}
            </div>
        </div>
        <p className='text-[#F0F8FF] font-bold text-xs py-[10vh] pl-[10vh] pr-[10vh] text-left lg:text-sm'>
            In questa pagina ci sono i progetti, creati utilizzando la tecnologia elencata nella bio, che ho compiuto per la piattaforma FreeCodeCamp e per il conseguimento della certificazione Front End Development Libraries.
        </p>
    </div>
  )
}
