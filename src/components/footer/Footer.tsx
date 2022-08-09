import './footer.scss'

const Footer = () => {
  return (
    <footer className="flex_container_footer color_footer">
      <div className="flex">
        <div className="flex_item_footer">
          <h3 className="title_footer">Главное</h3> <br />
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span>О TMDB</span> <br />
          </a>
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span> Связаться с нами </span>
            <br />
          </a>
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span> Форумы поддержки </span> <br />
          </a>
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span> API </span> <br />
          </a>
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span> Статус системы </span>
            <br />
          </a>
        </div>
        <div className="flex_item_footer">
          <h3 className="title_footer">Участвуйте</h3> <br />
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span>Писание об участии</span> <br />
          </a>
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span>Добавить новый фильм</span>
            <br />
          </a>
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span>Добавить новый сериал</span> <br />
          </a>
        </div>
        <div className="flex_item_footer">
          <h3 className="title_footer">Сообщество</h3> <br />
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span>Руководства</span> <br />
          </a>
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span>Обсуждения</span>
            <br />
          </a>
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span>Доска почёта</span> <br />
          </a>
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span>Twitter</span> <br />
          </a>
        </div>
        <div className="flex_item_footer">
          <h3 className="title_footer">О праве</h3> <br />
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span>Условия использования</span> <br />
          </a>
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span>API Правила использования</span>
            <br />
          </a>
          <a className="a" target={'_blank'} href="#" rel="noreferrer">
            <span>Политика конфиденциальности</span> <br />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
