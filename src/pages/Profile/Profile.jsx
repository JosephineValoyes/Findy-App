import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  followers: 10.7,
  likes: 108.3,
  section: 'photos',
  data: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.payload };
    case 'SET_SECTION':
      return { ...state, section: action.payload };
    default:
      return state;
  }
}

const Profile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api-redsocial.vercel.app/');
        dispatch({ type: 'SET_DATA', payload: response.data });
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }
    fetchData();
  }, []);

  const renderSection = () => {
    switch (state.section) {
      case 'photos':
        return <div> 
          <div className="grid grid-cols-2  items-center ml-4">
          <img src="src\assets\common\img\1100278 1 (1).png" alt="Photos" className="w-[190px] h-[190px] rounded-[20px] " />
          <img src="src\assets\common\img\325591-Jennie-BLACKPINK-Photoshoot-4K-iphone-wallpaper 1.png" alt="Jennie-Blackpink" className="w-[190px] h-[190px]  mt-4 rounded-[20px]" />
          <img src="src\assets\common\img\Jennie BLACKPINK images Jennie HD wallpaper and background 1.png" alt="Roseanne Park" className="w-[190px] h-[190px] rounded-[20px]" />
          <img src="src\assets\common\img\325583-Jennie-BLACKPINK-K-Pop-4K-iphone-wallpaper 1.png" alt="Blackpink Pop" className="w-[190px] h-[190px] mt-4 rounded-[20px]" />
          <img src="src\assets\common\img\Jennie-Wallpaper 1.png" alt="Jennie wallpaper" className="w-[190px] h-[120px] rounded-[20px]" /> 
          <img src="src\assets\common\img\Jennie BLACKPINK images Jennie Kim HD wallpaper and 1.png" alt="Jennie Kim" className="w-[190px] h-[100px] mt-4 rounded-[20px]" /> 
        </div>
               </div>;
      case 'videos':
        return <div> {/* Aquí irían los videos */} </div>;
      case 'album':
        return <div> {/* Aquí irían los álbumes */} </div>;
      case 'tag':
        return <div> {/* Aquí irían las fotos etiquetadas */} </div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-[428px] h-[926px] mt-[-18px] ">
          
      <header className="relative w-[428px] h-60 bg-gray-200 mt-4">
        <img src="src\assets\common\img\blackpink-jennie-calvin-klein-photoshoot-uhdpaper.com-hd-6 1.png" alt="Cover" className="object-cover w-full h-full" />
        <button >  <img src="src\assets\common\Icon\flecha.png" alt="flecha" className='flex absolute top-10 left-4'/>
             
        </button>
        <p className='text-black font-bold absolute left-2 top-[4px] '>9:41</p>
        <img src="src\assets\common\Icon\cellular.png" alt="cellular bars" className='absolute right-16 top-[8px]' />
        <img src="src\assets\common\Icon\wi-fi.png" alt="wifi" className='absolute right-11 top-[8px]'/>
        <img src="src\assets\common\Icon\battery.png" alt="batery" className='absolute right-6 top-[8px]' />
        
      </header>
       
      <main className="flex flex-col items-center ">
        <div className=" mt-8 " />
          <img src="src\assets\common\img\jennie-blackpink-uhdpaper.com-hd-4 1.png" alt="Profile " className="rounded-full w-32 h-32 border-2 border-2 border-[#EB5E5C#FF7674] -mt-16 z-10"/>
        <div className="flex justify-around w-full mt-4">
          <div className="text-center">
            <p className="font-bold">{state.followers} M </p>
            <p>Followers</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{state.likes} M </p>
            <p>Likes</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <h1 className="font-bold text-xl">Jennie Kim, J.</h1>
          <p>Hello Guys, Follow me and like my post</p>
        </div>
        <div className="flex justify-around w-full mt-4">
          <button className="bg-[linear-gradient(92.69deg,_#EB5E5C_-0.64%,_#FF7674_101.09%)] text-white px-8 py-1 rounded">Follow</button>
          <button className="bg-[linear-gradient(92.69deg,_#EB5E5C_-0.64%,_#FF7674_101.09%)] text-white px-8 py-1 rounded">Message</button>
           
        </div>    
        <section className="flex justify-around w-full mt-4 border-b border-gray-300 rounded">
          <button onClick={() => dispatch({ type: 'SET_SECTION', payload: 'photos' })} className={`px-4 py-2 ${state.section === 'photos' ? 'border-b-2 border-[#EB5E5C#FF7674]' : ''}`}>Photos</button>
          <button onClick={() => dispatch({ type: 'SET_SECTION', payload: 'videos' })} className={`px-4 py-2 ${state.section === 'videos' ? 'border-b-2 border-[#EB5E5C#FF7674]' : ''}`}>Videos</button>
          <button onClick={() => dispatch({ type: 'SET_SECTION', payload: 'album' })} className={`px-4 py-2 ${state.section === 'album' ? 'border-b-2 border-[#EB5E5C#FF7674]' : ' '}`}>Album</button>
          <button onClick={() => dispatch({ type: 'SET_SECTION', payload: 'tag' })} className={`px-4 py-2 ${state.section === 'tag' ? 'border-b-2 border-[#EB5E5C#FF7674]' : ''}`}>Tag</button>
       </section>
       <div className="mt-4 w-full">
          {renderSection()}
       </div>  
      
      </main>      
      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-2 flex items-center justify-between text-white w-[428px] mx-auto bg-[linear-gradient(92.69deg,_#EB5E5C_-0.64%,_#FF7674_101.09%)]">
        <button>
          <img src="src\assets\common\Icon\Vector (3).png" alt="Home" className="w-6 h-6" />
        </button>
        <button>
          <img src="src\assets\common\Icon\Vector (5).png" alt="Search" className="w-6 h-6" />
        </button>
        <button className="bg-white text-pink-500 rounded-full p-4">
          <img src="src\assets\common\Icon\Ellipse 9.png" alt="Add" className="w-6 h-6" />
        </button>
        <button>
          <img src="src\assets\common\Icon\Notifitation.png" alt="Like" className="w-6 h-6" />
        </button>
        <button>
           <a href="src\pages\Profile\Profile.jsx">
            </a><img src="src\assets\common\img\Ellipse 11.png" alt="Profile" className="w-6 h-6" />
        </button>
      </footer>


    </div>
  );
};

export default Profile;
