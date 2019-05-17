import React, { FunctionComponent } from 'react'
import ReactGA from 'react-ga'
import { sendLinkClickToGA } from '../../Utils';
import './Footer.less'

const links: Array<LinkItemType> = [
  { text: 'Email', url: 'mailto:httpiago@gmail.com' },
  { text: 'Telefone', url: 'tel:+5588999892495' },
  { text: 'Facebook', url: 'https://www.facebook.com/httpiago' },
  { text: 'Instagram', url: 'https://www.instagram.com/httpsiago/' },
  // { text: 'Pinterest', url: 'https://pinterest.com/httpiago/' },
  // { text: 'Last.fm', url: 'https://www.last.fm/user/httpiago' },
  { text: 'Messenger', url: 'https://m.me/httpiago' },
  { text: 'LinkedIn', url: 'https://www.linkedin.com/in/iagobruno/' },
  { text: 'Github', url: 'https://github.com/httpiago/' },
]

const Footer: FunctionComponent = () => {

  function sendClickToGA(linkText: string) {
    // Enviar evento de clique em link de contato para o Google Analytics
    ReactGA.event({
      category: 'contact links',
      action: 'click',
      label: `Cliques em "${linkText}"`
    })
  }

  return (
    <footer className="footer" id="contact" role="contentinfo">
      <center>
        <h2 className="footer__title">Contato</h2>
        
        <ul className="links footer__links" aria-label="Lista de links para contato">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} onClick={() => sendClickToGA(link.text)}>{link.text}</a>
            </li>
          ))}
        </ul>

        <a
          className="footer__code-note"
          href="https://github.com/httpiago/iagobruno.com"
          onClick={() => sendLinkClickToGA('github.com/httpiago/iagobruno.com')}
          aria-label="Considerações finais: Feito com reaquite e amor por mim mesmo"
        >
          <svg viewBox="0 0 20 15" width="18" height="13"><path d="M13.197.39l-2.084 2.083 4.862 4.862-4.862 4.862 2.084 2.084 6.251-6.946-6.25-6.946zm-6.946 0L0 7.334l6.251 6.946 2.084-2.084-4.862-4.862 4.862-4.862L6.251.389z" fillRule="nonzero" fill="#444444"></path></svg>
          <span>com</span>
          <svg viewBox="0 0 841.9 595.3"  width="30" height="30" className="react-ico"><g fill="#00bff4"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>
          <span>e</span>
          <svg viewBox="0 0 18 16" width="14" height="13"><path d="M15.948 1.39C15.226.513 14.21.07 12.892 0c-1.348 0-2.348.583-3.056 1.39-.709.805-1.084 1.277-1.112 1.388-.028-.11-.389-.583-1.111-1.389C6.89.583 5.988 0 4.557 0 3.237.07 2.209.528 1.5 1.39.778 2.236.417 3.166.389 4.167c0 .722.125 2.111.93 3.709.807 1.597 3.252 4.084 7.405 7.404 4.14-3.32 6.627-5.793 7.418-7.404.792-1.612.917-3.015.917-3.71-.028-1-.389-1.93-1.111-2.806v.028z" fillRule="nonzero" fill="#EF5350"></path></svg>
          <span>por mim mesmo</span>
          <span style={{ fontSize: 14 }}>(/ n__n)/</span>
        </a>
      </center>
    </footer>
  )
}

export default Footer
