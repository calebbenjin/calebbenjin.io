import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { FiTwitter, FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi'
import logoImg from '../../public/logovmp.png'
import Image from 'next/image'

const navigation = [
  { name: 'Portfolio', href: '/' },
  { name: 'About me', href: '/aboutme' },
  { name: 'Blog', href: '/blog' },
  { name: 'Reviews', href: '/reviews' },
  { name: "Code Snippets", href: '/snippets' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <div className="px-6 pt-6 sm:px-20 sm:z-20">
      <nav className="flex items-center sm:z-20 justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Your Company</span>
            <Image className="h-16 w-12" src={logoImg} alt="LogoImage" width={100} height={100} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden sm:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold sm:text-xl leading-6 text-gray-900">
            <FiGithub />
          </Link>
          <Link href="#" className="text-sm font-semibold sm:text-xl sm:ml-8 leading-6 text-gray-900">
            <FiTwitter />
          </Link>
          <Link href="#" className="text-sm font-semibold sm:text-xl sm:ml-8 leading-6 text-gray-900">
            <FiLinkedin />
          </Link>
          <Link href="#" className="text-sm font-semibold sm:text-xl sm:ml-8 leading-6 text-gray-900">
            <FiYoutube />
          </Link>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-1 justify-center mt-32">
              <Link href="#" className="text-sm font-semibold text-xl leading-6 text-gray-900">
                <FiGithub />
              </Link>
              <Link href="#" className="text-sm font-semibold text-xl ml-8 leading-6 text-gray-900">
                <FiTwitter />
              </Link>
              <Link href="#" className="text-sm font-semibold text-xl ml-8 leading-6 text-gray-900">
                <FiLinkedin />
              </Link>
              <Link href="#" className="text-sm font-semibold text-xl ml-8 leading-6 text-gray-900">
                <FiYoutube />
              </Link>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}

export default Navbar
