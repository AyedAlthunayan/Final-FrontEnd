import { Flex, HStack, VStack,Image ,Button, Input,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Home from './Home'
import IconUni from "../img/IconUni.png"
import ImgBody from "../img/ImgBody.jpeg"
import twitter from "../img/twitter.png"
import reddit2 from "../img/reddit2.png"
import facebook12 from "../img/facebook12.png"

function Profile() {
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
      <HStack  >
        <VStack width='45rem' spacing='5'backgroundColor='lightgray' padding='8' borderRadius='5'>
           <HStack justifyItems='center' alignItems='center' justifyContent='center'>

            <Text >
                بياناتي
            </Text>
           </HStack>

            <HStack spacing='90'>
            <Image width='8rem' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsQh8tvclNkrB57vus8zpRAo72kuSDkBOXQ&usqp=CAU'/>
            <VStack>
            <Input placeholder='اسم المستخدم ' border='solid 2px ' borderColor='black' width='22rem' borderRadius='10' backgroundColor='white' /> 
            <Input placeholder='الايميل ' type='email' border='solid 2px ' borderColor='black' width='22rem' borderRadius='10' backgroundColor='white' /> 
            <Button color='black' _hover={{backgroundColor:'black', color:'white'}} backgroundColor='#FFD05E' >تغيير الرقم السري</Button>
            </VStack>
            </HStack>
        </VStack>
        </HStack>
    </VStack>
    </Flex>
    <Footer />
    </>
  )
}

export default Profile