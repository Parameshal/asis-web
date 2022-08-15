import React from "react";
import NextLink from "next/link"
import Fonts from "../font";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  CloseButton,
  LinkOverlay,
  Badge,
  Text
} from "@chakra-ui/react";

export default function Nav(){
  const bg = useColorModeValue("white", "gray.100");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
     <Fonts />
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={4}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
             <NextLink href='/solutions' passHref>
              <Button textColor='gray.800' fontWeight='bold' 
              title="Solutions - Asista | Customer Engagement Software"> <Text _hover={{ color: "#48BB78" }}>Solutions</Text>
                <Badge ml='2' variant='solid' colorScheme="purple" color='#E9D8FD'>
                 <Text fontWeight='bold'>New</Text>
                </Badge>
              </Button>
           </NextLink>

           <NextLink href='/pricing' passHref>
              <Button fontWeight='bold' 
              title="Pricing- Asista | Customer Engagement Software"><Text textColor='gray.800' _hover={{ color: "#48BB78" }}>Pricing</Text> 
              </Button>
           </NextLink>

           <NextLink href='/FAQs' passHref>
              <Button variant="ghost" textColor='gray.800'>FAQs</Button>
              </NextLink>

              <NextLink href='/Blog' passHref>
              <Button variant="ghost" textColor='gray.800'>Blog</Button>
              </NextLink>

              <NextLink href='/Partner' passHref>
              <Button variant="ghost" textColor='gray.800'>Partners</Button>
              </NextLink>

              <NextLink href='/Free Trial' passHref>
              <Button colorScheme='white' variant='outline' textColor='gray.800' borderRadius='2px'>Free Trial</Button>
              </NextLink>

              <NextLink href='/Book a Call' passHref>
              <Button variant="ghost" textColor='gray.800'>Book a Call</Button>
              </NextLink>

            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>              
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Solutions
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  FAQs
                </Button>
                <Button w="full" variant="ghost" _hover='red'>
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Partners
                </Button>
                <Button w="full" variant="ghost">
                  Free Trial
                </Button>
                <Button w="full" variant="ghost">
                  Book a Call
                </Button>


              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
