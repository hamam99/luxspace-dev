import Breadcrumb from '../components/breadcrumb'
import Clients from '../parts/Clients'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import Sitemap from '../parts/HomePage/Sitemap'

function Details() {
  return (
    <>
      <Header theme={'black'} />
      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/categories/91231', name: 'Office Room' },
          { url: '/categories/91231/products/7888', name: 'Details' },
        ]}
      />

      <Clients />
      <Sitemap />
      <Footer />
    </>
  )
}

export default Details
