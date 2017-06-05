import Component from 'inferno-component'

export default class BuyComponent extends Component {
  render() {
    return (
      <section className="white-bg dark lightweight pt2 sbuyit">
        <div className="flex justify-around pt3 pb3 h2">
          <div>
            Order one (or more) today!
          </div>
        </div>
        <div className="clearfix justify-around vertical-divider">
          <div className="sm-col xs-col-12 sm-col-4 md-col-4 lg-col-4 one-third">
            <div className="center">
              <span className="bold">Potato</span>
              <span> Lite</span>
            </div>
            <ul className="list-reset left-align pb2 pl4 pr2">
              <li>Small and compact</li>
              <li>Highly portable</li>
              <li>Unapologeticly delicious</li>
            </ul>
            <div className="order center show-small pt1 pb3">
              <a className="border-circle">Order</a>
              <div className="pt2 pb2">starting at $9.99</div>
              <img src="img/potato-small.png"/>
            </div>
          </div>
          <div className="sm-col xs-col-12 sm-col-4 md-col-4 lg-col-4 one-third">
            <div className="center">
              <span className="bold">Potato</span>
              <span> Pro</span>
            </div>
            <ul className="list-reset left-align pb2 pl4 pr2">
              <li>Portable</li>
              <li>Easily sliceable</li>
              <li>Equally delicious</li>
              <li>Very nutrituous</li>
            </ul>
            <div className="order center show-small pt1 pb3">
              <a className="border-circle">Order</a>
              <div className="pt2 pb2">starting at $19.99</div>
              <img src="img/potatoe.png"/>
            </div>
          </div>
          <div className="sm-col xs-col-12 sm-col-4 md-col-4 lg-col-4 one-third">
            <div className="center">
              <span className="bold">Potato</span>
              <span> Team</span>
            </div>
            <ul className="list-reset left-align pb2 pl4 pr2 mb0">
              <li>Ideal for bigger groups</li>
              <li>Best value</li>
              <li>Various sizes</li>
              <li>Buffet suitable</li>
            </ul>
            <div className="order center show-small pt1 pb3">
              <a className="border-circle">Order</a>
              <div className="pt2 pb2">starting at $39.99</div>
              <img src="img/potatoes.png"/>
            </div>
          </div>
        </div>
        <div className="flex justify-around vertical-divider hide-small">
          <div className="col col-4 one-third">
            <ul className="list-reset pl2 left-align mb2 pr2">
              <div className="order center">
                <a className="border-circle">Order</a>
                <div className="pt2 pb2">starting at $9.99</div>
                <img src="img/potato-small.png"/>
              </div>
            </ul>
          </div>
          <div className="col col-4 one-third">
            <ul className="list-reset pl2 left-align mb2 pr2">
              <div className="order center">
                <a className="border-circle">Order</a>
                <div className="pt2 pb2">starting at $19.99</div>
                <img src="img/potatoe.png"/>
              </div>
            </ul>
          </div>
          <div className="col col-4 one-third">
            <ul className="list-reset pl2 left-align mb2 pr2">
              <div className="order center">
                <a className="border-circle">Order</a>
                <div className="pt2 pb2">starting at $39.99</div>
                <img src="img/potatoes.png"/>
              </div>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
