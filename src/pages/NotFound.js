import Breadcrumb from '../components/breadcrumb'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import Sitemap from '../parts/HomePage/Sitemap'
import PageErrorMessage from '../parts/PageErrorMessage'

function NotFound() {
  return (
    <>
      <Header theme={'black'} />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  )
}

export default NotFound
