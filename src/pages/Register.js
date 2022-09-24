import React, {useState} from 'react'
import {Button, Flex, Heading, HStack, Image, Input, VStack} from '@chakra-ui/react'
import Footer from '../components/Footer'
import IconUni from "../img/IconUni.png"
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import {APIs} from "../const/APIs";
import Swal from "sweetalert2";


function Register() {
    const history = new useNavigate();
    const [user, setUser] = useState({
        nickName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'Student'
    })
    const handleSubmit = async () => {
        axios.post(APIs.USER.REGISTER_USER, user).then(res => {
            Swal.fire({
                icon: 'success',
                title: `تم التسجيل بنجاح`,
                text: 'تم التسجيل بنجاح.',
                showConfirmButton: false,
                timer: 1500
            })
            history("/")
        }).catch(err => {
            Swal.fire({
                showConfirmButton: false,
                timer: 1500,
                icon: 'error',
                title: `هناك خطا`,
                text: err.response.message,
            })
        })
    }


    return (
        <>
            <VStack>
                <Flex justifyContent='center' alignItems='center' height='90vh'>
                    <HStack spacing='10'>
                        <HStack width='50%' justifyContent='center' alignItems='center'>
                            <Image
                                src='https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740&t=st=1663176928~exp=1663177528~hmac=b5b1a84c76302e0d5272e0027053467566a2f136eb18eefdbc5601f177236ed1'/>
                        </HStack>
                        <HStack width='50%' justifyContent='center' alignItems='center'>
                            <VStack width='25rem' spacing='5' backgroundColor='#F4F3F3' padding='2rem' borderRadius='5'
                                    border='gray solid 1px'>
                                <Heading><Image src={IconUni} width='3rem'/>نموذج تسجيل </Heading>
                                <Input type='text' onChange={(e) => setUser({...user, nickName: e.target.value})}
                                       value={user.nickName} placeholder='اسم المستخدم'/>
                                <Input type='email' onChange={(e) => setUser({...user, email: e.target.value})}
                                       value={user.email} placeholder='الايميل'/>
                                <Input type='password' onChange={(e) => setUser({...user, password: e.target.value})}
                                       value={user.password} placeholder='كلمة المرور'/>
                                <Input type='password'
                                       onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
                                       value={user.confirmPassword} placeholder='تأكيد كلمة المرور'/>
                                <HStack spacing='10'>
                                    <Link to=''><Button onClick={(e) => handleSubmit(e)}
                                                        _hover={{backgroundColor: '#FFD05E', color: 'black'}}
                                                        color='white' padding='6'
                                                        backgroundColor='black'>ارسال</Button></Link>
                                    <Link to='/login'><Button _hover={{backgroundColor: '#FFD05E', color: 'black'}}
                                                              color='white' padding='6'
                                                              backgroundColor='black'> لدي حساب بالفعل</Button></Link>
                                </HStack>
                            </VStack>
                        </HStack>
                    </HStack>

                </Flex>
                <Footer/>
            </VStack>
        </>
    )
}

export default Register
