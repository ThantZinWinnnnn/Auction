
import BannerDetail from '../components/Banner/BannerDetail'
import DetailNavbar from '../components/DetailPageComponent/DetailNavbar'
import DetailPageWrapper from '../components/DetailPageComponent/DetailPageWrapper'
import Footer from '../components/Footer/Footer'
import { Title } from '../components/Utils/helmet/Title'

const CategoryOverview = () => {
  return (
    <>
        <Title title=''/>
        <DetailNavbar/>
        <DetailPageWrapper>
        <BannerDetail/>
        </DetailPageWrapper>
        <Footer/>
    </>
  )
}

export default CategoryOverview