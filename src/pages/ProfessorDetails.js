import Header from "../components/Header";
import Footer from '../components/Footer'
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import {APIs} from "../const/APIs";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {
    Avatar,
    Box,
    Button,
    Center,
    Divider,
    Grid,
    GridItem,
    Progress, Text,
    Textarea,
    VStack,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import Swal from "sweetalert2";

export const ProfessorDetails = () => {
    let {id} = useParams();
    const [professorDetails, setProfessorDetails] = useState({})
    const [comments, professorComments] = useState({})
    const [commentRating, setCommentRatings] = useState({
        comment: "",
        rating: "",
        nickName: sessionStorage.getItem("student") && JSON.parse(sessionStorage.getItem("student")).nickName ? JSON.parse(sessionStorage.getItem("student")).nickName : '',
        professorId: `${id}`
    })

    const deleteComment = async (e, id) => {
        e.preventDefault()
        await axios.delete(APIs.COMMENT.DELETE_BY_ID + `${id}`).then(res => {
            getProfessorComments()
        }).catch(err => {
            console.error(err.response.message)
        })
    }

    useEffect(() => {
        console.log("Use Effect Called")
        axios.get(APIs.PROFESSOR.FIND_BY_ID + `${id}`).then(res => {
            setProfessorDetails(res.data)
            getProfessorComments()
        }).catch(err => {
            console.log(err.response.message)
        })
    }, [])

    const getProfessorComments = async () => {
        await axios.get(APIs.COMMENT.COMMENT_BY_PROFESSOR_ID + `${id}`).then(async res => {
            professorComments(res.data);
        }).catch(err => {
            console.log(err.message)
        })
    }

    const handleSubmitComment = async (e) => {
        if((!commentRating.comment) || (!commentRating.rating)){
            Swal.fire({
                icon: 'error',
                title: `خطأ`,
                text: 'قيم واكتب التعليق',
                showConfirmButton: false,
                timer: 2500
            })
        }else{
            e.preventDefault()
            await axios.post(APIs.COMMENT.POST_COMMENT, commentRating).then(async res => {
                setCommentRatings({
                    comment: "",
                    rating: "",
                    nickName: JSON.parse(sessionStorage.getItem("student")).nickName,
                    professorId: `${id}`
                })
                await getProfessorComments()
            }).catch(err => {
                console.log(err.response.message)
            })
        }

    }

    return (
        <>
            <Header/>
            {/*Comments form*/}
            <div className="row m-3">
                <div className="card p-3 col-md-12 mx-2 col-lg-6 col-sm-12">
                    <Box dir="RTL"
                        mt='1'
                        fontWeight='semibold'
                        as='h2'
                        lineHeight='tight'
                        noOfLines={1}
                    >
                        اسم الدكتور : {professorDetails.professorName}
                    </Box>
                    <Box dir="RTL">
                        الجامعة:
                        <Box as='span' my={3} color='gray.600' fontSize='sm' ms={2}>
                            {professorDetails.universityName}
                        </Box>
                    </Box>
                    <Divider orientation='horizontal'/>
                    <Center>
                        {
                            commentRating.rating ? <Box display='flex' my='5' fontSize='5rem' alignItems='center'>
                                    {Array(commentRating.rating)
                                        .fill('').map((_, i) => (
                                            <StarIcon key={i} sx={{fontSize: '2rem', color: '#FBB46E'}}/>
                                        ))}

                                </Box>

                                : <Box display='flex' my='5' fontSize='5rem' alignItems='center'>
                                    {Array(5)
                                        .fill('')
                                        .map((_, i) => (

                                            <StarOutlineIcon
                                                key={i}
                                                value={commentRating.rating}
                                                onClick={() => {
                                                    setCommentRatings({
                                                        ...commentRating, rating: i + 1
                                                    })
                                                }}
                                                sx={{fontSize: '2rem', color: '#FBB46E'}}
                                            />
                                        ))}
                                </Box>
                        }

                    </Center>
                    <Box mt={3}>
                        <Box>
                            <Textarea textAlign='right' value={commentRating.comment} onChange={(e) => setCommentRatings({
                                ...commentRating, comment: e.target.value
                            })} placeholder='اكتب تعليقك'/>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'end'}}>
                            <Button
                                mt={4}
                                color='white'
                                _hover={{backgroundColor: '#FFD05E', color: 'black'}}
                                backgroundColor='black'
                                colorScheme='teal'
                                onClick={(e) => handleSubmitComment(e)}
                                type='submit'
                            >
                                ارسال
                            </Button>
                        </Box>
                    </Box>
                </div>
                <div className="card p-3 col-md-12 mx-2 col-lg-5 col-sm-12">
                    <div className="row">
                        <div className="col-12">
                            <Center>
                                <Text fontSize='2xl' p={3}>التقييم الكلي</Text>
                            </Center>
                            <Center>

                                <div  >
                                    <Text fontSize='5xl' p={3}>{comments.avg}</Text>
                                </div>
                                <Text as='sup' pt={'30px'}>/ 5</Text>
                            </Center>
                            <div className="row">
                                <div className="col-2">5 <StarIcon sx={{color: '#FBB46E'}}/></div>
                                <div className="col-8"><Progress style={{backgroundColor: 'yellow'}} className={"my-2"} borderRadius={6}
                                                                 value={100}/></div>
                                <div className="col-2">{comments.numFive}</div>
                            </div>

                            <div className="row">
                                <div className="col-2">4 <StarIcon sx={{color: '#FBB46E'}}/></div>
                                <div className="col-8"><Progress className={"my-2"}  borderRadius={6}value={80}/></div>
                                <div className="col-2">{comments.numFour}</div>
                            </div>

                            <div className="row">
                                <div className="col-2">3 <StarIcon sx={{color: '#FBB46E'}}/></div>
                                <div className="col-8"><Progress className={"my-2"}  borderRadius={6}value={60}/></div>
                                <div className="col-2">{comments.numThree}</div>
                            </div>

                            <div className="row">
                                <div className="col-2">2 <StarIcon sx={{color: '#FBB46E'}}/></div>
                                <div className="col-8"><Progress className={"my-2"}  borderRadius={6}value={40}/></div>
                                <div className="col-2">{comments.numTwo}</div>
                            </div>

                            <div className="row">
                                <div className="col-2">1 <StarIcon sx={{color: '#FBB46E'}}/></div>
                                <div className="col-8"><Progress className={"my-2"}  borderRadius={6}value={20}/></div>
                                <div className="col-2">{comments.numOnes}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div style={{margin: '5%'}}>
                <h1 style={{fontSize: '30px'}}>التعليقات: </h1>
                <Grid templateColumns='repeat(1, 1fr)' gap={6} mt={2}>
                    {/*All Comments*/}
                    {
                        comments.commentRatingList && comments.commentRatingList.map(item => {
                            return <GridItem  key={item.id} w='100%' p='5' borderWidth='1px' borderRadius='lg'>
                                <Wrap >
                                    <WrapItem>
                                        <Avatar name={item.nickName} src='https://bit.ly/tioluwani-kolawole'/>
                                    </WrapItem>
                                    <WrapItem  width={'90%'}>
                                        <VStack
                                            align='stretch'
                                        >
                                            <Box>
                                                <Box
                                                    fontWeight='semibold'
                                                    as='h4'
                                                    lineHeight='tight'
                                                    noOfLines={1}
                                                >
                                                    {item.nickName}
                                                </Box>
                                                <Box>
                                                    {Array(item.rating)
                                                        .fill('')
                                                        .map((_, i) => (
                                                            <StarIcon
                                                                key={i}
                                                                sx={{color: '#FBB46E'}}
                                                            />
                                                        ))}
                                                </Box>
                                            </Box>
                                            <Box>
                                                {item.comment}
                                            </Box>
                                        </VStack>


                                    </WrapItem>
                                    <WrapItem>
                                        {
                                            JSON.parse(sessionStorage.getItem("admin")) && JSON.parse(sessionStorage.getItem("admin")).email && JSON.parse(sessionStorage.getItem("admin")).password &&
                                            <DeleteIcon onClick={(e) => deleteComment(e, item.id)}
                                                        style={{cursor: 'pointer'}}/>
                                        }
                                    </WrapItem>
                                </Wrap>
                            </GridItem>
                        })
                    }
                </Grid>
            </div>

            <Footer/>
        </>
    )
}
