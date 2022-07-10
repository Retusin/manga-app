import React from 'react';

const HeaderButton = ({title, bg}) => {
  return (
    <button>
      <div
        className={`${bg} white hover:border border-black/5 capitalize hover:border-white ease-in-out rounded-xl py-2 px-3 transition duration-100`}
      >
        {title}
      </div>
    </button>
  );
};

export default HeaderButton;
