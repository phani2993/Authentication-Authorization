// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="Products">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="Products"
          className="ProductsImg"
        />
      </div>
    </>
  )
}
export default Products
