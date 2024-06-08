'use client';

import OutlineButton from '@/components/ui/OutlineButton';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileNavbarItemList() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            value: "Strona Główna",
            href: "/"
        },
        {
            value: "Samochody",
            href: "/#our-cars"
        },
        {
            value: "Voucher",
            href: "/voucher"
        },
        {
            value: "Kontakt",
            href: "/kontakt"
        }
    ]

    const navContainer = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                x: { velocity: 100 },
                duration: 0.3,
            },
        },

        hidden: {
            x: 300,
            opacity: 0,
            transition: {
                x: { velocity: 100 },
                duration: 0.3,
            },
        },
    };

    const navList = {
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.07
          }
        },
        hidden: {
          opacity: 0,
          transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
          }
        }
      }

      const navItem = {
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 }
          }
        },
        hidden: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000, velocity: -100 }
          }
        }
      };

    return (
        <div className='flex lg:hidden'>
            <Bars3Icon
                className='text-neutral-200 size-8'
                onClick={() => setIsOpen(!isOpen)}
            />
            <AnimatePresence>
                {isOpen && (
                    <motion.div className='flex flex-col absolute top-[69.5px] right-0 min-w-[50vw] w-[300px] bg-neutral-900 rounded-l-xl z-30'
                    initial="hidden"
                    animate={isOpen ? "visible" : "hidden"}
                    exit="hidden"
                    variants={navContainer}
                    >
                        <motion.ul className='w-[80%] h-full mx-auto flex flex-col list-none my-10 justify-between'
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={navList}
                        >
                            {navItems.map((item, index) => {
                                return (<motion.li className='flex justify-center py-4' variants={navItem} onClick={() => setIsOpen(false)} key={index}>
                                    <Link href={item.href} className='text-neutral-200 text-lg text-center'>
                                        {item.value}
                                    </Link>
                                </motion.li>)
                            })}
                            <motion.li className='flex justify-center py-4' variants={navItem} onClick={() => setIsOpen(false)} key={4}>
                            <OutlineButton
                                value='Zarezerwuj'
                                href='?reserve=true'
                                styles='py-1 mb-1 px-6 transition-opacity duration-500 ease-in-out opacity-100'
                                scroll={false}
                            />
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
