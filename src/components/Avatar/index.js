import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const Avatar = () => {
    const { avatarImage } = useStaticQuery(
      graphql`
        query {
          avatarImage: file(relativePath: { eq: "profile-photo.png" }) {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          } 
        }
      `
    )
    
    return <GatsbyImage image={avatarImage.childImageSharp.gatsbyImageData} />
}

export default Avatar