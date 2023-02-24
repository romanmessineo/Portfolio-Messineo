import React, { useState, useEffect } from 'react';

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > window.innerHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
  className={`fixed bottom-5 right-5 p-3 rounded-full bg-green-500 border-2 border-gray-900 ${
    isVisible ? 'visible' : 'invisible'
  }`}
  onClick={handleClick}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mx-auto my-auto text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
</button>
  );
};

export default ButtonUp;


    {/* <button
      onClick={handleClick}
      className={`fixed bottom-8 right-8 bg-blue-500 text-white rounded-full w-12 h-12 ${
        showButton ? "block" : "hidden"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mx-auto my-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button> */}