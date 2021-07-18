import * as React from 'react'

import Default from '@layouts/Default'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => (
  <Default>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Default>
)

export default IndexPage
