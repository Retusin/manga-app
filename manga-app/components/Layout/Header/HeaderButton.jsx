import React from 'react'
import Link from 'next/link'

function HeaderButton({ title, bg, path }) {
  return (
    <Link href={`${path}`}>
      <button type="button">
        <div className={`py-1 px-2 ${bg} rounded-xl`}>{title}</div>
      </button>
    </Link>
  )
}

export default HeaderButton
