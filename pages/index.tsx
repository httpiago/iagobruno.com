import React, { Fragment } from 'react'
import { NextFunctionComponent } from 'next'

import Header from '../components/Header/Header'
import About from '../components/About/About'
import CreativeProcess from '../components/CreativeProcess/CreativeProcess'
import Skills from '../components/Skills/Skills'
import Works from '../components/Works/Works'
import Footer from '../components/Footer/Footer'
import SocialTags from '../components/SocialTags'
import BlogList from '../components/BlogList/BlogList'

const HomePage: NextFunctionComponent = () => {
  return (
    <Fragment>
      <SocialTags
        page_title="Iago Bruno &#8212; Full Stack Developer"
        description="Programador de websites com experiência vasta em JavaScript, Node, React, CSS, entre outros."
        url="https://www.iagobruno.com/"
        image="https://www.iagobruno.com/static/images/website-print.jpg"
      />

      <div className="page home-page">
        <Header mode="full" />
        <About />
        <CreativeProcess />
        <Skills />
        <Works />
        {/*<BlogList length={3} />*/}
        <Footer />
      </div>
    </Fragment>
  )
}

export default HomePage
