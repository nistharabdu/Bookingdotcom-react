import { Banner } from './components/banner/Banner'
import { Filter } from './components/filter/Filter'
import { Header } from './components/header/Header'
import { HotelList } from './components/hotel-list/HotelList'
import { Main } from './components/main/Main'
import { HotelContextProvider } from "./context/HotelContext";

function App() {
  return (
    <div className="wrapper">
      <div className="wrapper__inner">
		<HotelContextProvider>
			<Header />
			<Banner />
			<Main>
				<Filter />
				<HotelList />
			</Main>
		</HotelContextProvider>
      </div>
    </div>
  )
}

export default App
