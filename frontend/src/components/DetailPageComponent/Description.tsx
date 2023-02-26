import { Box, Typography } from '@mui/material'

const Description = () => {
  return (
		<Box textAlign={'center'} width='50%' mx={'auto'} marginTop="4%">
			<Typography variant='h4' fontWeight={'bold'} marginBottom="2%">Gadgets and goods at hard to beat prices</Typography>
			<Typography variant='body1' fontWeight={'light'} lineHeight={2}>
				Here you’ll find an extensive choice of electronic gadgets and goods at
				hard to beat prices. Perhaps you’re after a slimline vacuum cleaner to
				replace your hefty old one or are looking for a piece of computing
				equipment to help you work, you can bid on them here. As well as sales
				of individual electrical items, we hold weekly sales of no reserve
				return pallets sourced from leading retailers, which contain many
				electronic gems. See what’s on offer today.
			</Typography>
		</Box>
	);
}

export default Description