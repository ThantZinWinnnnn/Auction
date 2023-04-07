import { SelectChangeEvent } from "@mui/material";


export const productHandler = (event: SelectChangeEvent,setFinalState: (arg0: string) => void) => {
  setFinalState(event.target.value as string);
};