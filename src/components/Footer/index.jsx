import './Footer.css'

const Footer = () => {
  return (
    <footer className="foot">
      <section>
        <ul>
          <li>
            <a href="http://facebook.com" target="_blank">
                <img src="/imagens/fb.png" alt="logo facebook" />
            </a>
          </li>
          <li>
            <a href="http://twitter.com" target="_blank">
                <img src="/imagens/tw.png" alt="logo twitter" />
            </a>
          </li>
          <li>
            <a href="http://facebook.com" target="_blank">
                <img src="/imagens/ig.png" alt="logo instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="logo organo" />
      </section>
      <section>
        <p>
            Desenvolvido por Willslima
        </p>
      </section>
    </footer>
  )
}

export default Footer
