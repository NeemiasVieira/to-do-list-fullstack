import { FooterStyle } from "./FooterStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
  return(
    <FooterStyle>
      <a href="https://github.com/NeemiasVieira"><FontAwesomeIcon icon={faGithub} /></a>
      <p>All rights reserved ℗ 2023 </p>
    </FooterStyle>
  )
}

