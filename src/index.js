import * as base from 'basscss/css/basscss.css'
import smoothScroll from 'smoothscroll'
import Inferno from 'inferno'
import * as styles from './styles/styles.less'

import NavbarComponent from './components/navbar-component'
import TopComponent from './components/top-component'
import FeatureComponent from './components/feature-component'
import NutritionComponent from './components/nutrition-component'
import TransformableComponent from './components/transformable-component'
import CustomersComponent from './components/customers-component'
import BuyComponent from './components/buy-component'
import FooterComponent from './components/footer-component'

Inferno.render(
  <div>
    <NavbarComponent/>
    <TopComponent/>
    <FeatureComponent/>
    <NutritionComponent/>
    <TransformableComponent/>
    <CustomersComponent/>
    <BuyComponent/>
    <FooterComponent/>
  </div>,
  document.getElementById('app')
)

export default {base, styles}
