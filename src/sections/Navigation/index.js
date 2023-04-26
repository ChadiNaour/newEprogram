import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import { Container } from "reusecore/Layout"
import logo from "assets/images/app/logo_eprogram.webp"

import Data from "./utility/data.js"
import ScrollspyMenu from "./utility/ScrollspyMenu.js"

import NavigationWrap from "./navigation.style"
import Button from "reusecore/Button";


const Navigation = ({ modalOpen, setModalOpen }) => {
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    const header = document.getElementById("navbar")

    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <NavigationWrap id="navbar" className={`nav-block ${expand ? "nav-expanded" : ""}`}>
      <Container >
        <div className="navbar-wrap">
          <Link to="/" className="logo">
            <img loading="lazy" src={logo} alt="Logo eProgram" />
          </Link>
          <nav className="nav">
            <FaBars
              className="mobile-menu-icon"
              onClick={() => setExpand(!expand)}
            />
            <ScrollspyMenu
              className={`collapsed ${expand ? "is-expanded" : ""}`}
              menuItems={Data.menuItems}
              expand={expand}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          </nav>
          <div className="action_button">
            {!expand &&
              <Button id="wide-nav" onClick={() => setModalOpen(true)} className="nav-btn">
                <span>Accéder à eProgram</span>
              </Button>
            }
          </div>
        </div>
      </Container>
    </NavigationWrap>
  )
}

export default Navigation
