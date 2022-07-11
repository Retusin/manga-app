import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <h2 className="text-2xl">Ooooooops...</h2>
      <h3 className="text-2xl">That page cannot be found.</h3>
      <p>Go back to the</p>
      <Link href="/">
        <button className="bg-pink-500 rounded-xl py-2 px-3 font-semibold">Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
