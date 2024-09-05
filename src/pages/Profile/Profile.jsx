import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  followers: 0,
  likes: 0,
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
        return <div> {/* Aquí irían las fotos */} </div>;
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
    <div className="p-4 max-w-screen-md mx-auto">
      <button onClick={() => {/* Lógica para volver al dashboard */}} className="text-blue-500">&#8592; Back</button>
      
      <div className="relative w-full h-40 bg-gray-200 mt-4">
        {/* Placeholder para la foto de portada */}
        <img src="https://via.placeholder.com/600x200" alt="Cover" className="object-cover w-full h-full" />
      </div>
      
      <div className="flex flex-col items-center">
        <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full w-32 h-32 mt-4 border-4 border-white -mt-16 z-10"/>
        <div className="flex justify-around w-full mt-4">
          <div className="text-center">
            <p className="font-bold">{state.followers}</p>
            <p>Followers</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{state.likes}</p>
            <p>Likes</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <h1 className="font-bold text-xl">Jennie Kim, J.</h1>
          <p>Hello Guys, Follow me and like my post</p>
        </div>
        <div className="flex justify-around w-full mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Follow</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Message</button>
        </div>
        <div className="flex justify-around w-full mt-4 border-b border-gray-300">
          <button onClick={() => dispatch({ type: 'SET_SECTION', payload: 'photos' })} className={`px-4 py-2 ${state.section === 'photos' ? 'border-b-2 border-blue-500' : ''}`}>Photos</button>
          <button onClick={() => dispatch({ type: 'SET_SECTION', payload: 'videos' })} className={`px-4 py-2 ${state.section === 'videos' ? 'border-b-2 border-blue-500' : ''}`}>Videos</button>
          <button onClick={() => dispatch({ type: 'SET_SECTION', payload: 'album' })} className={`px-4 py-2 ${state.section === 'album' ? 'border-b-2 border-blue-500' : ''}`}>Album</button>
          <button onClick={() => dispatch({ type: 'SET_SECTION', payload: 'tag' })} className={`px-4 py-2 ${state.section === 'tag' ? 'border-b-2 border-blue-500' : ''}`}>Tag</button>
        </div>
        <div className="mt-4 w-full">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
