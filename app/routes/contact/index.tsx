import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import Navbar from "../../components/Navbar";

// import Lightdarkmode from "../../components/Lightdarkmode";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const name = "Demo Remix";

export default function Contact() {
  return (
    <>
      <div className='bg-blue-500'>
        <div className='grid grid-cols-5 grid-rows-5 gap-4 h-screen'>
          <div className='col-span-5 bg-yellow-200'>
            <Navbar />
            <h2>Contact</h2>
          </div>
          <div className='col-span-2 bg-fuchsia-500 row-span-3 row-start-2'>
            2 {name}
          </div>
          <div className='col-span-3 bg-rose-400 hover:bg-rose-500 row-span-3 col-start-3 row-start-2'>
            3
            <div className='snap-x snap-mandatory'>
              <div className='snap-center'>
                <img
                  src='https://picsum.photos/600/300?random=1'
                  alt='imagee'
                />
              </div>
              <div className='snap-center'>
                <img
                  src='https://picsum.photos/600/300?random=2'
                  alt='imagee'
                />
              </div>
              <div className='snap-center'>
                <img
                  src='https://picsum.photos/600/300?random=3'
                  alt='imagee'
                />
              </div>
              <div className='snap-center'>
                <img
                  src='https://picsum.photos/600/300?random=4'
                  alt='imagee'
                />
              </div>
              <div className='snap-center'>
                <img
                  src='https://picsum.photos/600/300?random=5'
                  alt='imagee'
                />
              </div>
              <div className='snap-center'>
                <img
                  src='https://picsum.photos/600/300?random=6'
                  alt='imagee'
                />
              </div>
            </div>
          </div>
          <div className='col-span-5 bg-sky-500 row-start-5'>
            4<Link to='/'>home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
