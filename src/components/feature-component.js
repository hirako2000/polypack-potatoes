import Component from 'inferno-component'

export default class FeatureComponent extends Component {
  render() {
    return (
      <section className="white-bg dark lightweight sfeatures">
        <div className="flex justify-around px3 center pt4 pb3 h2 front">
          Different shapes and Sizes
        </div>
        <div className="flex justify-around px3 center front">
          <div>
            <span className="regular">Potato</span> comes in many different unique shapes and sizes.
          </div>
        </div>
        <div className="flex justify-around px3 center pb3 front">
          Find the one that fits you personal preferences.
        </div>
        <div className="flex pt3">
          <div className="col col-2 sm-col-4 px0 mx-auto">
            <div className="pota-shape">
              <hr className="separator"/>
            </div>
          </div>
          <div className="col px1 pl2 sm-col-2 mx-auto">
            <div className="">
              <img src="img/pota1.svg" className="pota-shape"/>
            </div>
          </div>
          <div className="col col-1 px1 sm-col-2 mx-auto">
            <div className=" pota-shape">
              <hr className="separator"/>
            </div>
          </div>
          <div className="col px1 sm-col-2 mx-auto">
            <div className="">
              <img src="img/pota2.svg" className="pota-shape"/>
            </div>
          </div>
          <div className="col col-1 sm-col-2 px1 mx-auto">
            <div className="pota-shape">
              <hr className="separator"/>
            </div>
          </div>
          <div className="col px1 mx-auto">
            <div className="">
              <img src="img/pota3.svg" className="pota-shape"/>
            </div>
          </div>
          <div className="col col-1 sm-col-2 px1 mx-auto">
            <div className="pota-shape">
              <hr className="separator"/>
            </div>
          </div>
          <div className="col px1 sm-col-2 mx-auto">
            <div className="">
              <img src="img/pota4.svg" className="pota-shape"/>
            </div>
          </div>
          <div className="col col-1 sm-col-2 px1 mx-auto">
            <div className="pota-shape">
              <hr className="separator"/>
            </div>
          </div>
          <div className="col px1 sm-col-2 mx-auto">
            <div className="">
              <img src="img/pota5.svg" className="pota-shape"/>
            </div>
          </div>
          <div className="col col-1 sm-col-2 px0 mx-auto">
            <div className="pota-shape">
              <hr className="separator"/>
            </div>
          </div>
        </div>
        <div className="flex justify-around pr2 pt3 pb4">
          <img src="img/different-shapes.png"/>
        </div>
      </section>
    )
  }
}
