import React from 'react';
import Link from 'next/link';

const HeaderButton = ({title, bg, path}) => {
  return (
    <Link href={`${path}`}>
      <button>
        <div className={`py-1 px-2 ${bg}`}>{title}</div>
      </button>
    </Link>
  );
};

export default HeaderButton;
