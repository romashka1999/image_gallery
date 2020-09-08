import React, { useEffect, useState } from 'react';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('computer');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=18220328-5cd14199baafbeb7365a9c1e1&q=${term}&image_type=photo&pretty=true`, { mode: 'no-cors'})
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img 
        src="https://source.unsplash.com/random"
        alt=""
        className="w-full" />
      <div className="px-6 px-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          photo by roma
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            400
          </li>
          <li>
            <strong>Downloads: </strong>
            300
          </li>
          <li>
            <strong>Likes: </strong>
            400
          </li>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
