import * as React from 'react'
import { NextPage, NextPageContext } from 'next'
import Button from '../../components/Button'
import Card from '../../components/Card'

import Hero from '../../components/Fawwaz/Sections/Hero';
import FunnelSVG from '../../components/assets/svg/FunnelSVG';

interface Props {
  query: { name?: string }
}

const Home: NextPage<Props> = ({ query }) => {
  const greetName = query.name ? query.name : 'World'

  return (
    <>
      <Hero 
          title={"Landing Page Design Services for PPC Campaigns"} 
          description = {''} 
          // heroSVG = {FunnelSVG}
          input 
      />
    </>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const query = {
    name: ctx.query.name || null,
  }
  return { props: { query } }
}

export default Home
