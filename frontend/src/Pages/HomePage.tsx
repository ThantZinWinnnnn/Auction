import { Box } from '@mui/material'
import ProdudctDetail from '../components/product/ProdudctDetail'
import SidebarLists from '../components/SidebarLists'

const HomePage = () => {
  return (
    <>
      <Box>
        <SidebarLists/>
        <ProdudctDetail/>
      </Box>
    </>
  )
}

export default HomePage