import Image from "next/image"
import Navbar from "./Navbar"
import bgTopRight from '../../public/DecoreTopRight.png'
import bgBottomLeft from '../../public/bottombg.png'
import heroImg from '../../public/profileimg1.png'
// import heroImg from '../../public/HeroImg.png'
import Link from "next/link"
import workImg1 from '../../public/work1.png'
import workImg2 from '../../public/work2.png'
import workImg3 from '../../public/work3.jpg'


const works = [
  {
    id: 1,
    link: 'cases',
    img: workImg1
  },
  {
    id: 2,
    link: 'cases',
    img: workImg2
  },
  {
    id: 3,
    link: 'cases',
    img: workImg3
  }
]

export default function Hero() {

  return (
    <div className="isolate bg-white relative">
      <div className="hidden bgShape bg-red-100 absolute top-0 left-40"></div>
      <Image src={bgTopRight} alt="leftBg" className="absolute top-0 right-0 bgTopRIght" width={500} height={400} />
      <Image src={bgBottomLeft} alt="bottomBg" className="absolute bottom-0 left-0 bgBottomRIght" width={500} height={400} />
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Navbar />
      <main>
        <div className="relative px-6 sm:px-20">
          <div className="flex sm:justify-between items-start flex-row-reverse sm:flex-row flex-col mx-auto">
            <div className="mx-left max-w-1xl py-10 sm:py-32">
              {/* <div className="hidden sm:mb-8  sm:flex sm:justify-start">
                <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Announcing our next round of funding.{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div> */}
              <div className="text-left max-w-2xl">
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-8xl">
                  Caleb Benjamin 
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  I am a self driven enthusiastic ReactJS Expert with a touch of NodeJS. And
                  I helped PayForeign.com upgrade to PWA. I increase their website security and performance by 60%, leading to more revenue. I can help your business do the same.
                </p>
                <div className="mt-10 flex items-center justify-start gap-x-6">
                  <Link href="#" className="text-base border border-gray-300 px-6 py-3 font-semibold leading-7 text-gray-900">
                    Schedule a call <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 mt-10 sm:text-6xl">
                  Latest Work
                </h1>
                
              </div>
              <div className="latestWorks mb-10 sm:w-12/12 sm:h-6/12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
                {works.map(work => (
                  <Link href={`/projects/${work.link}`} className="workCard sm:h-auto sm:w-auto bg-gray-200 p-1 sm:p-3 shadow-xl">
                    <Image src={work.img} alt="WorkImage" className="h-full w-full" width={500} height={500} />
                  </Link>
                ))}
              </div>
              <Link href="/projects" className=" bg-white shadow-lg text-base border border-gray-300 px-6 py-3 font-semibold leading-7 text-gray-900">
                View All Projects <span aria-hidden="true">→</span>
              </Link>
            </div>
            <Image src={heroImg} alt="bottomBg" className="rounded-full sm:flex mt-20 mr-20 hidden border" width={400} height={400} />
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  )
}
