import React from "react";
import NextLink from "next/link"
import Fonts from "../components/font";

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
           <Button fontWeight='bold' 
              title="FAQs- Asista | Customer Engagement Software"><Text textColor='gray.800' _hover={{ color: "#48BB78" }}>FAQs</Text> 
              </Button>
              </NextLink>

              <NextLink href='/Blog' passHref>
              <Button fontWeight='bold' 
              title="Blog- Asista | Customer Engagement Software"><Text textColor='gray.800' _hover={{ color: "#48BB78" }}>Blog</Text> 
              </Button>
              </NextLink>

              <NextLink href='/Partner' passHref>
              <Button fontWeight='bold' 
              title="Partner- Asista | Customer Engagement Software"><Text textColor='gray.800' _hover={{ color: "#48BB78" }}>Partner</Text> 
              </Button>
              </NextLink>

              <NextLink href='/Free Trial' passHref>
              <Button fontWeight='bold' 
              title="Free Trial- Asista | Customer Engagement Software"><Text textColor='gray.800' _hover={{ color: "#48BB78" }}>Free Trial</Text> 
              </Button>
              </NextLink>

              <NextLink href='/Book a Call' passHref>
              <Button fontWeight='bold' 
              title="Book a Call- Asista | Customer Engagement Software"><Text textColor='gray.800' _hover={{ color: "#48BB78" }}>Book a Call</Text> 
              </Button>
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
