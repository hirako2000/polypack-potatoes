import Component from 'inferno-component'

export default class NutritionComponent extends Component {

  render() {
    return (
      <section className="white-bg dark lightweight pt2 snutrition">
        <div className="flex justify-around py3 px3 center h2">
          <div>
          Is <span className="regular">Potato</span> healthy? Yes it is!
          </div>
        </div>
        <div className="flex justify-around px3 center">
          <div>
            The majority of carbohydrates in potato are complex
          </div>
        </div>
        <div className="flex justify-around px3 center">
          <div>
            "carbohydrates, your body's main energy source"
          </div>
        </div>
        <div className="flex justify-around">
          <img src="img/healthy.png" className="full-height col sm-col-12 md-col-8 lg-col-6"/>
        </div>
      </section>
    )
  }
}
