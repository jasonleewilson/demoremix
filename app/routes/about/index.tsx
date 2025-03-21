import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "../../components/ui/card";

// import Lightdarkmode from "../../components/Lightdarkmode";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// const name = "Demo Remix";

export default function About() {
  return (
    <>
      <div className='bg-blue-500'>
        <div className='grid grid-cols-5 grid-rows-5 gap-4 h-screen'>
          <div className='col-span-5 bg-yellow-200'>
            <Navbar />
            <h2>About</h2>
          </div>
          <div className='col-span-2 bg-fuchsia-500 row-span-3 row-start-2'>
            2
          </div>
          <div className='col-span-3 bg-rose-400 hover:bg-rose-500 row-span-3 col-start-3 row-start-2'>
            3
            <Carousel className='w-full max-w-xs'>
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className='p-1'>
                      <Card>
                        <CardContent className='flex aspect-square items-center justify-center p-1'>
                          <img
                            src='https://picsum.photos/600/300?random=1'
                            alt='imagee'
                            className='h-full'
                          />
                          {/* <span className='text-4xl font-semibold'>
                            {index + 1}
                          </span> */}
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <Button>Click me</Button>
          </div>
          <div className='col-span-5 bg-sky-500 row-start-5'>
            4<Link to='/'>home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
