import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import Header from "../components/header"
import AboutMe from "../components/aboutMe"
import Contact from "../components/contact"
// import Navigation from "../components/navigation/navigation"

export default function Home() {
  return (
    <Layout>
      {/* <Navigation /> */}
      <Header />
      <AboutMe />
      <Contact />
    </Layout>
  )
}
