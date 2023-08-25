'use client'
import { Avatar, AvatarGroup, ButtonGroup, Card, CardBody, CardHeader, Flex, Heading, Stack, Text, useDisclosure } from '@chakra-ui/react'
import moonImg from '../../public/cardImg.svg'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { GiCardExchange } from 'react-icons/gi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import CustomModal from './CustomModal'
import { useRef } from 'react'

const CardAvatar = () => {
  const { isOpen:IsOpen1, onClose:OnClose1, onOpen:OnOpen1 } = useDisclosure()
  const { isOpen:IsOpen2, onClose:OnClose2, onOpen:OnOpen2 } = useDisclosure()
  const cancelRef = useRef()
  return (
    <>

    {/* Custom dialog 1*/}
    <CustomModal
    hasTextField
     motionPreset='slideInBottom'
     leastDestructiveRef={cancelRef}
     onClose={OnClose1}
     isOpen={IsOpen1}
     isCentered
      iconClassName='text-blue-600'
    icon={GiCardExchange} iconLabel='Withdraw funds' address='Wallet address:' 
    addressText='000XA...0Xe'
    primaryText='Confirm wallet address'
    placeholder='000Xe...0Xe'
    addressNumber='0xaB6B4...14E' >
      <CustomButton title='Withdraw' textColor='white' bgColor='black' shadow  className='hover:bg-gray-900 hover:font-medium' />
    </CustomModal>
    {/* Custom dialog 2*/}
    <CustomModal
    hasTextField
     motionPreset='slideInBottom'
     leastDestructiveRef={cancelRef}
     onClose={OnClose2}
     isOpen={IsOpen2}
     isCentered
     iconClassName='text-rose-600'
    icon={IoIosCloseCircleOutline} iconLabel='Cancel project' secondaryText='You will no longer have access to this project after canceling. Funds will be automatically transferred to all backers.' >
      <CustomButton title='Cancel project' textColor='white' bgColor='red.500' shadow  className='hover:bg-rose-600 hover:font-medium' />
      <CustomButton onClick={OnClose2}  title='Go Back' textColor='black' shadow border  className=' hover:font-medium' />
    </CustomModal>
      <Heading as="h3" size={{
        base: 'md',
        lg: 'lg'
      }} mb="2">Published projects (3)</Heading>
      <Card bgColor='gray.200' className='shadow-primary pb-28'>
        <CardHeader>
          <Flex className=' items-center justify-between gap-4 w-[60%]'>
            <Heading as="h4" size="sm" >Name</Heading>
            <Heading as="h4" size="sm"  >Goal</Heading>
            <Heading as="h4" size="sm"  >Progress</Heading>
            <Heading as="h4" size="sm"  >Backers</Heading>
          </Flex>
        </CardHeader>
        <CardBody className='' >
          {/* 1ST AVATAR CONTAINER */}
          <Flex alignItems='center' className=' rounded-md border mb-4 w-full bg-slate-900 border-black overflow-auto'>
            <Flex className='items-center justify-between px-6 gap-2 text-white flex-1'>
              <Flex alignItems='center ' className='shrink-0 '>
                <Image className=' rounded-full object-cover' width={25} height={25} src={moonImg} alt='The moon Image' />
                <Text ml="2">The Moon</Text>
              </Flex>
              <Text className=''>$2,000</Text>
              <progress className=' h-2 bg-white w-[20rem] rounded-full' max='100' value='60' >60%</progress>
              <Stack direction='row' pr='1rem' spacing={2} alignItems='center' >
                <AvatarGroup size="sm">
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                  <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                </AvatarGroup>
                <Text className='shrink-0'>+30 others.</Text>
              </Stack>

            </Flex>
            <ButtonGroup spacing={8} className='bg-white px-4 py-2'>
              <CustomButton onClick={OnOpen1} iconClassName='text-blue-600'  icon={GiCardExchange} textColor='black' border title='Withdraw funds' />
              <CustomButton onClick={OnOpen2} iconClassName='text-rose-600' icon={IoIosCloseCircleOutline} textColor='black' border title='Cancel project' />
            </ButtonGroup>
          </Flex>

          {/* 2ND AVATAR CONTAINER */}

          <Flex alignItems='center' className=' rounded-md border w-full bg-slate-900 border-black overflow-auto'>
            <Flex className='items-center justify-between px-6 gap-2 text-white flex-1'>
              <Flex alignItems='center ' className='shrink-0 '>
                <Image className=' rounded-full object-cover' width={25} height={25} src={moonImg} alt='The moon Image' />
                <Text ml="2">The Moon</Text>
              </Flex>
              <Text className=''>$2,000</Text>
              <progress className=' h-2 bg-white w-[20rem] rounded-full' max='100' value='60' >60%</progress>
              <Stack direction='row' pr='1rem' spacing={2} alignItems='center' >
                <AvatarGroup size="sm">
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                  <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                </AvatarGroup>
                <Text className='shrink-0'>+30 others.</Text>
              </Stack>

            </Flex>
            <ButtonGroup spacing={8} className='bg-white px-4 py-2'>
              <CustomButton iconClassName='text-blue-600'   icon={GiCardExchange} textColor='black' border title='Withdraw funds' />
              <CustomButton iconClassName='text-rose-600'  icon={IoIosCloseCircleOutline} textColor='black' border title='Cancel project' />
            </ButtonGroup>
          </Flex>
        </CardBody>
      </Card>
    </>
  )
}

export default CardAvatar