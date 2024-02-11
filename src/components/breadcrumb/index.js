import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

function Breadcrumb({ list = [] }) {
  return (
    <section class="bg-gray-100 py-8 px-4">
      <div class="container mx-auto">
        <ul class="breadcrumb">
          {list?.map((item, index) => {
            const arias =
              index === list?.length ? { 'aria-label': 'current-page' } : {}
            return (
              <li key={item?.url}>
                <Link to={item.url} {...arias}>
                  {item.name}
                </Link>
              </li>
            )
          })}
          {/* <li>
            <Link to="index.html">Home</Link>
          </li>
          <li>
            <Link to="#">Office Room</Link>
          </li>
          <li>
            <Link to="#" aria-label="current-page">
              Details
            </Link>
          </li> */}
        </ul>
      </div>
    </section>
  )
}
export default Breadcrumb

Breadcrumb.prototype = {
  list: propTypes.array.isRequired,
}
