
import BannerDetail from '../components/Banner/BannerDetail'
import DetailNavbar from '../components/DetailPageComponent/DetailNavbar'
import Footer from '../components/Footer/Footer'
import { Title } from '../components/Utils/helmet/Title'

const CategoryOverview = () => {
  return (
    <>
        <Title title=''/>
        <DetailNavbar/>
        <BannerDetail/>
        <Footer/>
    </>
  )
}

export default CategoryOverview