import { Box, Grid, Typography ,Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { moreAuctions } from '../../data/DummyData'

const MoreAuctions = () => {
  return (
    <Box width={"90%"} mx="auto">
        <Grid container spacing={2} marginBottom={40} width={"100%"}>
            {moreAuctions.map((auction)=>(
                <Grid item xs={12} sm={6} md={3}>
                    <Box  sx={{
                        height:{
                            xs:"400px",
                            sm:"300px"
                        },
                        backgroundImage:`url(${auction.url})`,
                        backgroundPosition: "50% 50%",
						backgroundSize: "cover",
						backgroundAttachment: "scroll",
                        display:"flex",
                        justifyContent:"flex-end",
                        flexDirection:"column",
                        color:"white",
                        textAlign:"center",
                        pb:4
                    }}>
                        <Typography variant="h4" fontWeight={"bold"}>
							{auction.name}
						</Typography>
						<Link to={`${auction.name}`}>
							<Button
                                disableElevation
                                disableRipple
								color="warning"
								variant="contained"
								sx={{
									textTransform: "none",
									borderRadius: 10,
									width: "35%",
									mx: "auto",
									fontWeight: "medium",
									fontSize: 16,
									mt: 3,
									py: "10px",
									"&:hover": {
										backgroundColor: "#102343",
									},
								}}
							>
								Discover
							</Button>
						</Link>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}

export default MoreAuctions