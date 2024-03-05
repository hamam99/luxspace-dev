import Breadcrumb from '../components/breadcrumb'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
// import ProductDetails from './Details/ProductDetails'
import { withRouter } from 'react-router'
// import Suggestion from '../parts/Details/Suggestion'
// import ProductDetails from '../parts/Details/ProductDetails'
import Sitemap from '../parts/HomePage/Sitemap'
import ShoppingCart from '../parts/Cart/ShoppingCart'
import ShippingDetail from '../parts/Cart/ShippingDetail'

function Cart() {
  return (
    <>
      <Header theme={'black'} />
      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/cart', name: 'Shopping Cart' },
        ]}
      />
      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetail />
          </div>
        </div>
      </section>

      <Sitemap />
      <Footer />
    </>
  )
}

export default withRouter(Cart)
