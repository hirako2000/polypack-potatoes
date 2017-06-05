import Component from 'inferno-component'

export default class BuyComponent extends Component {
  render() {
    return (
      <footer className="white-bg px4 py2">
        <div className="clearfix px4 py2 h6">
          <div>
            Live design from <a href="https://dribbble.com/shots/2042501-Potato-landing-page">
            Eldin Herić</a>.
          </div>
          <div className="sm-col sm-col-6 pb2">
            Made with <a href="http://basscss.com/">basscss</a> & <a href="https://infernojs.org/">Inferno</a>
            , bundled with <a href="https://webpack.js.org/">Webpack</a>.
          </div>
          <div className="sm-col sm-col-6 ">
            <div className="right">
              Coded by <a href="http://github.com/hirako2000">Hirako</a>, off <a href="https://github.com/hirako2000/polypack">
              Polypack
              </a>.
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
