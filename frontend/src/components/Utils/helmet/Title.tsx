import {Helmet} from "react-helmet";


interface helmetProps{
  title :string
}

export const Title:React.FC<helmetProps> = ({title}) => {
  return <Helmet>
    <meta charSet="utf-8"/>
    <title>{title}</title>
    <meta name="keywords" content="Auction Clone,React,Mui,Typescript"/>
    <meta name="description" content="Auction Clone Using React"/>
  </Helmet>
}
