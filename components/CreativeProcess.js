import React, { Component } from 'react'
import Reveal from '../components/ScrollRevealHOC'

class CreativeProcess extends Component {
  static defaultProps = {
    revealViewFactor: 0.6
  }

  componentDidMount() {
    const isMobile = window.innerWidth < 859
    if (isMobile === true) return

    this.Cols = document.querySelectorAll('#creative-process .list > li')
    this.Cols[1].style.boxShadow = 'none'

  }

  // Criar uma animação com as sombras dos elementos
  componentDidAppear() {
    const isMobile = window.innerWidth < 859
    if (isMobile === true) return

    let i = 0

    // Aplicar ou remover uma sombra no elemento
    function applyShadow(element, method = 'add') {    
      let value = (method === 'remove') ? 'none' : '0 12px 30px rgba(0,0,0,.3)'

      element.style.boxShadow = value
      
    }

    // Fazer um loop nos elementos com um delay de diferença entre cada um
    var timer = setInterval(() => {
      // Aplicar simmbra no elemento
      applyShadow(this.Cols[i])
      
      // Remover a sombra do elemento após a transição terminar (300 milissegundos)
      setTimeout(applyShadow.bind(null, this.Cols[i], 'remove'), 500 )

      // Parar o timer quando chegar no último elemento
      if (i >= this.Cols.length - 1) clearInterval(timer)
      i++

    }, 500)

    // Após a animação, aplicar uma sombra no elemento do meio
    setTimeout(() => {
      this.Cols[1].style.transitionDuration = '1200ms'
      applyShadow(this.Cols[1])
    }, ((500) * 4))
  }

  render() {
    return (
      <section id="creative-process">
        <center>
          <h2 className="section-title">Processo criativo</h2>
          <ul className="list cols-3">
            <li>
              <div className="list-icon" style={{backgroundPosition: '-100px 0'}}></div>
              <div className="list-title">Planejamento</div>
              <p className="list-description">Assim como em qualquer projeto um bom planejamento evita uma grande quantidade de contratempos que venham ocorrer, então nesse ponto é definido com a equipe qual os objetivos do projeto, quais ferramentas serão usadas, em qual serviço será hospedado, entre outros.</p>
            </li>
            <li className="shadow">
              <div className="list-icon" style={{backgroundPosition: '1px 0'}}></div>
              <div className="list-title">Protótipo</div>
              <p className="list-description">Consiste em criar uma versão preliminar do site ou aplicativo com base na identidade visual da empresa. Nessa etapa não tem segredo, pego um lápis e papel para desenhar e posteriormente se necessário uso o InVision para criar uma versão testável.</p>
            </li>
            <li>
              <div className="list-icon"  style={{backgroundPosition: '-50px 0'}}></div>
              <div className="list-title">Desenvolvimento</div>
              <p className="list-description">Após esses passos anteriores vem a parte mais legal, CODAR! <br/>Minhas ferramentas favoritas para trabalhar são o Visual Studio Code, o Chrome Dev Tools, o Git para o controle de versão e o bom e velho amigo do programador: a linha de comando.</p>
            </li>  
          </ul>
        </center>
      </section>
    )
  }
}

export default Reveal(CreativeProcess)