import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from './logo'

import { motion } from "framer-motion"


const parentAni = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0,
      duration: 1,
      ease: "easeOut",
      delay: 1
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const childAni = {
  visible: { opacity: 1},
  hidden: { opacity: 0},
}


const Header = ({ siteTitle, isVisible }) => {

  return (
    <>
      <motion.header className="header g-align-items-center" initial="hidden" animate="visible" viewport={{ once: true }} variants={parentAni} transition={{delay: 1}}>
        <motion.h1 className="header-logo g-m-1-3 g-t-1-2" variants={childAni}>
          <Link to="/"><Logo /></Link>
        </motion.h1>
        <motion.h2 className="t-36 header-content g-m-1-13 g-t-1-13 g-l-4-13 g-4-13" variants={childAni}>
          {siteTitle}
        </motion.h2>
      </motion.header>
    </>
  )
}
  

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
