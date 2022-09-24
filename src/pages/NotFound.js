import { Flex ,Text} from '@chakra-ui/react'
import React from 'react'

function NotFound() {
  return (
    <Flex justifyItems='center' justifyContent='center' backgroundColor='lightgray' height='100vh' alignItems='center'>
        <Text>
            عذرا لا توجد صفحة بهذا الاسم
        </Text>


    </Flex>
  )
}

export default NotFound