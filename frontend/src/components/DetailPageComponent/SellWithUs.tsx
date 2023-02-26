import {Box} from "@mui/material"
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const SellWithUs = () => {
  return (
		<Box width={"90%"} mx="auto">
			<Box width={"100%"}>
				<Box width={"50%"}>
					<Typography>
						<span color="#28589B">Sell</span> <span color="#102343">With</span>{" "}
						<span color="#F65A03">Us</span>
					</Typography>
				</Box>
				<Box width={"50%"}>
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABC8A…1/HUPDgQCgUAgEAgEnmT8f0/38BWWhC1XAAAAAElFTkSuQmCC"
						alt="cooking item"
					/>
				</Box>
			</Box>
			<Box>
				<Typography>Got something to sell?</Typography>
				<Typography>
					There’s never been a better time to sell with us. With a wide audience
					of buyers, no seller commission, free listings in collectives and a
					dedicated account manager on hand should you need them, William George
					is the perfect place to sell.
				</Typography>
				<Button>Start Selling</Button>
			</Box>
		</Box>
	);
}

export default SellWithUs