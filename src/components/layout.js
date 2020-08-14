import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../styles/theme"
import GlobalStyles from "../styles/GlobalStyles"
import "../styles/fonts/fonts.css"

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
  )
export default Layout
