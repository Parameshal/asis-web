import { ChakraProvider } from "@chakra-ui/react";
import '@fontsource/raleway/400.css'
import Nav from "./components/Header";
import theme from './theme';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
    </ChakraProvider>
  ) 
  }
export default MyApp
