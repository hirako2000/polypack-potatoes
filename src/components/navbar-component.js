import Component from 'inferno-component'
import smoothScroll from 'smoothscroll'

export default class NavbarComponent extends Component {

  componentDidMount() {
    const aboutButton = document.querySelector('.about')
    const aboutSection = document.querySelector('.sabout')
    aboutButton.addEventListener('click', event => {
      event.preventDefault()
      smoothScroll(aboutSection)
    })

    const featureButton = document.querySelector('.features')
    const featureSection = document.querySelector('.sfeatures')
    featureButton.addEventListener('click', event => {
      event.preventDefault()
      smoothScroll(featureSection)
    })

    const nutritionButton = document.querySelector('.nutrition')
    const nutritionSection = document.querySelector('.snutrition')
    nutritionButton.addEventListener('click', event => {
      event.preventDefault()
      smoothScroll(nutritionSection)
    })

    const buyitButton = document.querySelector('.buyit')
    const buyitSection = document.querySelector('.sbuyit')
    buyitButton.addEventListener('click', event => {
      event.preventDefault()
      smoothScroll(buyitSection)
    })
  }

  render() {
    return (
      <nav className="nav">
        <div className="clearfix items-baseline">
          <div className="sm-col sm-col-2 menu-item pt2"/>
          <div className="sm-col sm-col-2 menu-item pt2">
            <a className="h3 pl2">
              <img className="logo pl1" src="img/potato-simple.svg"/>
              Potato
            </a>
          </div>
          <div className="sm-col sm-col-2 menu-item pt2">
          </div>
          <div className="sm-col sm-col-6 pt2">
            <div className="flex items-baseline align-left menu-item h8 caps scale-up">
              <a className="about">About</a>
              <a className="features">Features</a>
              <a className="nutrition">Nutrition</a>
              <a className="border-circle buyit">Buy it now</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
