import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className="py-10 px-0 font-mono">
      <div className="container">
        <div className="">
          <div className="">
            <div className="text-center">
              <div className="h-[400px] bg-center bg-no-repeat bg-[url:url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] w-full">
                <h1 className="text-center text-3xl lg:text-5xl tracking-[2px]">404</h1>
              </div>

              <div className="-mt-5">
                <h3 className="text-3xl lg:text-5xl tracking-[1px]">Look like you're lost</h3>

                <p className="tracking-[1px] text-xs lg:text-base mt-4">
                  The page you are looking for is not available!
                </p>

                <Link
                  to="/"
                  className="text-white py-3 px-5 bg-black my-5 mx-0 inline-block hover:text-[color:#7dd3fc] transition-colors duration-300"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound
