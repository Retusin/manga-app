import React from 'react'
import Link from 'next/link'

function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <h2 className="text-2xl">Ooooooops...</h2>
      <h3 className="text-2xl">That page cannot be found.</h3>
      <p>Go back to the</p>
      <Link href="/">
        <button
          type="button"
          className="rounded-xl bg-pink-500 py-2 px-3 font-semibold"
        >
          Home
        </button>
      </Link>
    </div>
  )
}

export default NotFound
