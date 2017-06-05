import Component from 'inferno-component'

export default class TransformableComponent extends Component {
  render() {
    return (
      <section className="white-bg dark lightweight pt2 stransformable">
        <div className="flex justify-around py3 center h2">
          <div>
            Easily transformable
          </div>
        </div>
        <div className="flex justify-around px3 center">
          <div>
            Because of its unique structure, <span className="regular">Potato</span> is easily useable
          </div>
        </div>
        <div className="flex justify-around px3 center">
          <div>
            and transformable in any way you can think of.
          </div>
        </div>
        <div className="flex justify-around pb4">
          <img src="img/transformable.png" className="full-height sm-col-19 md-col-8 lg-col-6"/>
        </div>
      </section>
    )
  }
}
