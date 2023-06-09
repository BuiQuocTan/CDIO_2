import { useEffect, useState } from 'react'
import '../style/buy.css'
import { useSelector } from 'react-redux'
import { selectWallet } from '../feature/walletSlice'
import Map from '../components/Map'
import HomeItem from '../components/HomeItem'
import Paginate from 'react-paginate'
import { getList, fetchDataFromDatabase } from '../utils'

function Buy() {
  const wallet = useSelector(selectWallet)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [postPerPage] = useState(4)


  const loadData = async () => {
    fetch('http://localhost:5000/api/home', {
      method: "get",
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then(async (res) =>{
        return res.json()
      })
      .then((receivedData) => {
        setData(receivedData)
      })
  }
  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    async function func() {
      const src = await getList(wallet, 'LandList')
      const res = src.map((ss) => parseInt(ss.toString()))
      var temp = []
      for (var i = 0; i < res.length; i++) {
        const tmp = await fetchDataFromDatabase(res[i])
        temp = [...temp, tmp[0]]
      }
      setData(temp)
    }
    if (wallet) {
      func()
    }
  }, [wallet])

  const indexOfFirstPost = currentPage * postPerPage
  const indexOfLastPost = indexOfFirstPost + postPerPage
  const currentData = data.slice(indexOfFirstPost, indexOfLastPost)

  const pageCount = Math.ceil(data.length / postPerPage)
  const changePage = ({ selected }) => {
    setCurrentPage(selected)
  }

  return (
    <div className="buy-content">
      <div className="searchBuy">
        <div className="selectBuy">
          <select name="Type">
            <option value="Type">Type</option>
            <option value="Rent">Rent</option>
            <option value="Buy">Buy</option>
          </select>
        </div>
        <div className="selectBuy">
          <select name="Category">
            <option value="Category">Category</option>
            <option value="Home">Home</option>
            <option value="Land">Land</option>
          </select>
        </div>
        <div className="selectBuy">
          <select name="Wards">
            <option value="Wards">Wards</option>
            <option value="Hai Chau">Hai Chau</option>
            <option value="Son Tra">Son Tra</option>
            <option value="Cam Le">Cam Le</option>
            <option value="Ngu Hanh Son">Ngu Hanh Son</option>
            <option value="Thanh Khe">Thanh Khe</option>
            <option value="Lien Chieu">Lien Chieu</option>
          </select>
        </div>
        <div className="selectBuy">
          <select name="City">
            <option value="City">City</option>
            <option value="Da Nang">Da Nang</option>
          </select>
        </div>
      </div>
      <div className="buy">
        <div className="buy-left">
          <Map />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flex: '50%'
        }}>
          <div className="buy-right">
            <div className="right-content">
              {currentData.map((home, index) => {
                return (
                  <HomeItem
                    fform={'buy'}
                    key={index}
                    id={home.id}
                    title={home.information.title}
                    price={home.information.price}
                    priceRent={home.information.priceRent}
                    address={home.street.address}
                    wards={home.street.wards}
                    city={home.street.city}
                    rooms={home.detail.rooms}
                    bedrooms={home.detail.bedrooms}
                    bathrooms={home.detail.bathrooms}
                    area={home.information.area}
                    image={home.detail.image?.[0]}
                    type={home.information.selectBuy}
                    path={home.information.path}
                  />
                )
              })}
            </div>
            <Paginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName="paginationBtn"
              previousLinkClassName="previousBtn"
              nextLinkClassName="nextBtn"
              disabledClassName="paginationDisabled"
              activeClassName="paginationActive"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Buy
