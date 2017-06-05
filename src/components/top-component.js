import Component from 'inferno-component'

export default class NavbarComponent extends Component {

  render() {
    return (
      <section id="top" className="pt2 sabout">
        <div className="flex justify-around pt3">
          <div className="pt4 title px3 center">
            “Sweet, Nutruous and Delicious”
          </div>
        </div>
        <div className="flex justify-around px3 center pt1">
          <div className="sub-heading">
            <span className="trans5 lightweight">The key to happiness is hidden in the </span>
            <span className="regular">Potato.</span>
          </div>
        </div>
        <div className="flex justify-around pt3 pb3">
          <img src="img/potatoe.png"/>
        </div>
      </section>
    )
  }
}
