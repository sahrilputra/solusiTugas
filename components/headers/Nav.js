import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa"
import { Button } from "@material-tailwind/react";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimate, stagger } from "framer-motion"


export const Nav = () => {


  const [showMenu, isShowMenus] = useState(false);
  const onClicked = () => {
    isShowMenus(!showMenu)
  }

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  const transition = {
    duration: 0.5,
  };

  return (
    <>
      <nav className={`${styles.nav} shadow-lg`}>
        <div className={styles.nav__container}>
          <div className={styles.nav__logo}>
            <Link href="/">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt='logo'
              className=' m-3'
            />
            </Link>
          </div>


          <AnimatePresence>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={transition}
            >
              <div className={`${styles.nav__list} ${showMenu ? styles.show : ''}`}>


                <motion.ul
                  className={styles.nav__ul}
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={transition}
                >
                  <motion.li className={styles.nav__item} key="1">
                    <Link href="./"><p>Home</p></Link>
                  </motion.li>
                  <motion.li className={styles.nav__item} key="2">
                    <Link href="orders"><p>Order</p></Link>
                  </motion.li>
                  <motion.li className={styles.nav__item} key="3">
                    <Link href="tugas"><p>Tugas</p></Link>
                  </motion.li>
                  <motion.li className={styles.nav__item} key="4">
                    <Link href="faq"> <p>Faq</p> </Link>
                  </motion.li>
                </motion.ul>


                <div className={styles.nav__innerHub}>
                  <Link href="https://wasap.at/RJbAiR">
                    <Button className={styles.hub_btn}>
                      <FaPhoneAlt /> Konsultasi Sekarang
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <Link href="https://wasap.at/RJbAiR">
            <div className={styles.nav__contact}>
              <FaPhoneAlt size={35} className={styles.icon_phone} />
              <div className={styles.nav__phone}>
                <p>Mulai Konsultasi </p>
                <p className=' text-sm font-thin'>+62 8222 9903 963</p>
              </div>
            </div>
          </Link>

          <div className={styles.nav__menu}>
            <Button variant='outlined' size='sm' onClick={onClicked}>
              {showMenu ? (
                <AiOutlineClose size={20} className={styles.hamburger} />
              ) : (
                <AiOutlineMenu size={20} className={styles.hamburger} />
              )}
            </Button>


          </div>
        </div>
      </nav>
    </>
  )
}
