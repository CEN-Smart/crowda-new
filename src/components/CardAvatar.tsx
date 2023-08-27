'use client';
import {
  Avatar,
  AvatarGroup,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Progress,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import moonImg from '../../public/cardImg.svg';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { GiCardExchange } from 'react-icons/gi';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import CustomModal from './CustomModal';
import { useRef } from 'react';

const CardAvatar = () => {
  const {
    isOpen: IsOpen1,
    onClose: OnClose1,
    onOpen: OnOpen1,
  } = useDisclosure();
  const {
    isOpen: IsOpen2,
    onClose: OnClose2,
    onOpen: OnOpen2,
  } = useDisclosure();
  const cancelRef = useRef();
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
        icon={GiCardExchange}
        iconLabel='Withdraw funds'
        address='Wallet address:'
        addressText='000XA...0Xe'
        primaryText='Confirm wallet address'
        addressNumber='0xaB6B4...14E'
      >
        <CustomButton
          title='Withdraw'
          textColor='white'
          bgColor='black'
          shadow
          className='hover:bg-gray-900 hover:font-medium mt-6 ml-[35%]'
        />
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
        icon={IoIosCloseCircleOutline}
        iconLabel='Cancel project'
        secondaryText='You will no longer have access to this project after canceling. Funds will be automatically transferred to all backers.'
      >
        <ButtonGroup className='flex-col gap-2 ml-[30%] '>
          <CustomButton
            title='Cancel project'
            textColor='white'
            bgColor='red.500'
            shadow
            className='hover:bg-rose-600 hover:font-medium'
          />
          <CustomButton
            onClick={OnClose2}
            title='Go Back'
            textColor='black'
            shadow
            border
            className=' hover:font-medium'
          />
        </ButtonGroup>
      </CustomModal>
      <Heading
        as='h3'
        size={{
          base: 'md',
          lg: 'lg',
        }}
        mb='2'
      >
        Published projects (3)
      </Heading>
      <Card bgColor='gray.100' className='shadow-primary'>
        <CardHeader>
          <Flex className=' items-center gap-2 justify-between w-[58%]'>
            <Heading as='h4' size='sm'>
              Name
            </Heading>
            <Heading as='h4' size='sm' className='md:-ml-[2.5rem]'>
              Goal
            </Heading>
            <Heading as='h4' size='sm'>
              Progress
            </Heading>
            <Heading as='h4' size='sm'>
              Backers
            </Heading>
          </Flex>
        </CardHeader>
        <CardBody className=''>
          {/* 1ST AVATAR CONTAINER */}
          <Flex
            alignItems='center'
            className='w-full mb-4 overflow-auto border border-black rounded-md bg-slate-900'
          >
            <Flex className='items-center justify-between flex-1 gap-2 px-6 text-white'>
              <Flex alignItems='center ' className='shrink-0 '>
                <Image
                  className='object-cover rounded-full '
                  width={25}
                  height={25}
                  src={moonImg}
                  alt='The moon Image'
                />
                <Text ml='2'>The Moon</Text>
              </Flex>
              <Text className=''>$2,000</Text>
              <Progress
                className='rounded-full'
                value={60}
                w={80}
                size='sm'
                colorScheme='green'
              />
              <Stack direction='row' pr='1rem' spacing={2} alignItems='center'>
                <AvatarGroup size='sm'>
                  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                  <Avatar
                    name='Prosper Otemuyiwa'
                    src='https://bit.ly/prosper-baba'
                  />
                  <Avatar
                    name='Christian Nwamba'
                    src='https://bit.ly/code-beast'
                  />
                </AvatarGroup>
                <Text className='shrink-0'>+30 others.</Text>
              </Stack>
            </Flex>
            <ButtonGroup spacing={8} className='px-4 py-2 bg-white'>
              <CustomButton
                onClick={OnOpen1}
                iconClassName='text-blue-600'
                icon={GiCardExchange}
                textColor='black'
                border
                title='Withdraw funds'
              />
              <CustomButton
                onClick={OnOpen2}
                iconClassName='text-rose-600'
                icon={IoIosCloseCircleOutline}
                textColor='black'
                border
                title='Cancel project'
              />
            </ButtonGroup>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default CardAvatar;
