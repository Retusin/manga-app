import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Thumbnail = ({manga}) => {
  return (
    <div className="relative h-[230px] min-w-[180px]  cursor-pointer transition duration-200 ease-in-out md:h-[300px] md:min-w-[260px]">
      <Link href={'/anime/' + manga.mal_id}>
        <Image
          src={manga.images.jpg.image_url}
          layout="fill"
          className="rounded-sm object-cover md:rounded"
          alt="manga"
        />
      </Link>
    </div>
  );
};

export default Thumbnail;
