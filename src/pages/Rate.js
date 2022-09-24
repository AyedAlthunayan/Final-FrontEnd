import {  Flex, HStack, VStack,Image ,Button, Input,Text,Link, Heading, Select,Menu, Textarea} from '@chakra-ui/react'
import React from 'react'
import IconUni from "../img/IconUni.png"
import ImgBody from "../img/ImgBody.jpeg"
import twitter from "../img/twitter.png"
import reddit2 from "../img/reddit2.png"
import facebook12 from "../img/facebook12.png"
import Footer from '../components/Footer'
import Home from './Home'

function Rate() {
  return (
    <>
    <Flex  height='100vh' >

<VStack spacing='270' backgroundImage={ImgBody} backgroundSize='cover'>
   {/* Heading */}
  <HStack spacing='500' backgroundColor='#353a40' paddingX='59' paddingY='3' color='white' >

    {/* Icons */}
  <HStack spacing='3' >
    <Link target='_blank' href='https://chakra-ui.com/docs/components/link'>
  <Image src={twitter} />
    </Link >
    <Link target='_blank' href='https://chakra-ui.com/docs/components/link'>
  <Image src={facebook12}  />
    </Link>
    <Link target='_blank' href='https://chakra-ui.com/docs/components/link'>
  <Image src={reddit2} />
    </Link>
  
  </HStack>

  {/* Logo */}
  <Link to={<Home />}><Image src={IconUni} width='3rem'/> قيمني</Link>
  <HStack>

    {/* sign is buttons */}
  <Button _hover={{backgroundColor:"red.800",color:"white"}} color='black'padding='6' backgroundColor='red.400'  borderRadius='10' >تسجيل الخروج</Button>
  <Button _hover={{backgroundColor:"#FFD05E",color:"black"}} color='black'padding='6' backgroundColor='White'  borderRadius='10' >حسابي</Button>
  </HStack>
  </HStack>

  {/* Body */}
<HStack spacing='150'>

  {/* Rate */}
  <VStack spacing='4' backgroundColor='whiteAlpha.700' padding='7' borderRadius='9'>
  <Heading textAlign='center' > Ayed Alshammari</Heading>
  <Heading> 4.6<sup> /5</sup></Heading>
  </VStack>
  <VStack spacing='4' width='100%'>
    <Text background='lightgray' padding='7' width='100%' border='2px solid black' borderRadius='5' textAlign='right'>المدرس جدا ممتاز والدروس سهله</Text>
    <Select placeholder='Select ' color='gray'>
      <option  value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>
      
    </Select>
    <Textarea backgroundColor='lightgray'></Textarea>
  </VStack>
</HStack>



</VStack>
</Flex>
<Footer />
    </>
    
    
  )
}

export default Rate;