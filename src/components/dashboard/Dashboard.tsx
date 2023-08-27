'use client';
import Container from '@/components/Container';
import CustomButton from '@/components/CustomButton';
import SecondaryHeading from '@/components/SecondaryHeading';
import { FaExchangeAlt } from 'react-icons/fa';
import { BsCurrencyExchange } from 'react-icons/bs';
import DashboardCard from '@/components/DashboardCard';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { TbUsersGroup } from 'react-icons/tb';
import CardAvatar from '@/components/CardAvatar';
import CustomModal from '@/components/CustomModal';
import {
  Box,
  FormControl,
  Text,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { GrLink } from 'react-icons/gr';
import { GiCardExchange } from 'react-icons/gi';
import { getAccount, readContract } from '@wagmi/core';
import { factoryAbi, malaikaAbi } from '@/constants';
import {
  prepareWriteContract,
  writeContract,
  waitForTransaction,
} from '@wagmi/core';
import { Formik, Form, Field } from 'formik';
import { LuChevronDown } from 'react-icons/lu';

export default function Dashboard() {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? 'white' : 'slate-900';
  const textColor = colorMode === 'light' ? 'black' : 'white';
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

  const { isConnected, address } = getAccount();
  const [AmountRemaining, setAmountRemaining] = useState('');
  const [Providers, setProviders] = useState("")
  const [OwnerContract, setOwnerContract] = useState("");

  const localhostAddr = '0xd3924Aed3dbE4bdBC12FBc5917bBa7202141FE6F';
  //@ts-ignore
  //const sliceAddr = `${address.slice(0, 5)}...${address.slice(-4)}`;

  async function changeOwner(newOwner: string) {
    if (isConnected) {
      const request = await prepareWriteContract({
        //@ts-ignore
        address: OwnerContract,
        abi: malaikaAbi,
        functionName: 'changeOwner',
        args: [newOwner],
      });
      console.log('value is ', request);
      const { hash } = await writeContract(request);
      const data = await waitForTransaction({
        confirmations: 1,
        hash,
      });
      console.log(hash);
      if (data.status == 'success') {
        console.log(data);
        return true;
      }
    }
  }

  async function changeMinAmount(newAmount: string) {
    if (isConnected) {
      const request = await prepareWriteContract({  
        //@ts-ignore
        address: OwnerContract,
        abi: malaikaAbi,
        functionName: 'changeMinAmount',
        args: [newAmount],
      });
      console.log('value is ', request);
      const { hash } = await writeContract(request);
      const data = await waitForTransaction({
        confirmations: 1,
        hash,
      });
      console.log(hash);
      if (data.status == 'success') {
        console.log(data);
        return true;
      }
    }
  }

  async function getAmount(contractAddress: string) {
    const receipt = await readContract({
      //@ts-ignore
      address: contractAddress,
      abi: malaikaAbi,
      functionName: 'getRemainderBalance',
      args: [],
    });
    const response = await readContract({
      //@ts-ignore
      address: contractAddress,
      abi: malaikaAbi,
      functionName: 'getAmountNeeded',
      args: [],
    });
    //@ts-ignore
    const request = response - receipt
    console.log('getter is', request)
    return request
  }
  async function getProvider(contractAddress: string) {
    const request = await readContract({
      //@ts-ignore
      address: contractAddress,
      abi: malaikaAbi,
      functionName: 'getShareHolders',
      args: [],
    });
    console.log('providers is', request);
    return request;
  }

  async function isContract(contractAddress: string, msgSender: string) {
    const request = await readContract({
      address: '0xd3924Aed3dbE4bdBC12FBc5917bBa7202141FE6F',
      abi: factoryAbi,
      functionName: 'isOwner',
      args: [contractAddress, msgSender],
    });
    return request;
  }

  async function isCreator() {
    const request = await readContract({
      address: '0xd3924Aed3dbE4bdBC12FBc5917bBa7202141FE6F',
      abi: factoryAbi,
      functionName: 'isCreator',
      args: [address],
    });
    console.log('isCreator is', request);
    if (request) {
      const marketplace = await readContract({
        address: '0xd3924Aed3dbE4bdBC12FBc5917bBa7202141FE6F',
        abi: factoryAbi,
        functionName: 'getMarketPlace',
        args: [],
      });
      console.log(marketplace);
      for (let i = 0; i < marketplace.length; i++) {
        //@ts-ignore
        const exists = await isContract(marketplace[i], address);
        console.log('exists is', exists);
        //@ts-ignore
        if (exists) {
          return marketplace[i];
        }
      }
    }
  }
  useEffect(() => {
    async function updateUI() {
      if (isConnected) {
        const contractAddr = await isCreator();
        console.log(contractAddr);
        //@ts-ignore
        setOwnerContract(contractAddr)
        //@ts-ignore
        const amount = await getAmount(contractAddr);
        console.log('amount is', amount);
        //@ts-ignore
        setAmountRemaining(`$${(BigInt(amount)).toString()}.00`)
        //@ts-ignore
        console.log('amount is remaining', AmountRemaining);
        //@ts-ignore
        const backers = await getProvider(contractAddr);
        console.log('backers are', backers);
        //@ts-ignore
        setProviders(backers.toString());
        console.log('provider is ', Providers);
      }
    }
    updateUI();
  }, [isConnected, AmountRemaining, Providers,OwnerContract]);

  return (
    <section>
      {/* Custom dialog 1*/}
      <CustomModal
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={OnClose1}
        isOpen={IsOpen1}
        isCentered
        icon={GrLink}
        iconLabel='Change Address'
        address='Current address:'
        addressNumber={address}
      >
        <Formik
          initialValues={{
            howMuch: '',
          }}
          onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        >
          {({ handleSubmit, errors, touched, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <FormControl isInvalid={!!errors.howMuch && touched.howMuch}>
                <FormLabel htmlFor='howMuch'>New address</FormLabel>
                <Box border='1px solid gray' borderRadius='md'>
                  <Field
                    className='py-6 overflow-ellipsis'
                    as={Input}
                    name='howMuch'
                    id='howMuch'
                    placeholder={address}
                    type='text'
                    variant='outline'
                    validate={(value: string) => {
                      let error;
                      if (!value) {
                        error = 'Please enter a valid address';
                      }
                      return error;
                    }}
                  />
                </Box>

                <FormErrorMessage>{errors.howMuch}</FormErrorMessage>
              </FormControl>
              <CustomButton
                type='submit'
                title='Change'
                textColor='white'
                bgColor='black'
                shadow
                className='hover:bg-gray-900 hover:font-medium mt-4 ml-[35%]'
                onClick={async () => {
                  await changeOwner('placeholder');
                }}
              />
            </Form>
          )}
        </Formik>
      </CustomModal>
      {/* Custom dialog 2*/}
      <CustomModal
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={OnClose2}
        isOpen={IsOpen2}
        isCentered
        icon={GrLink}
        iconLabel='Change Address'
        address='Current address:'
        addressNumber={address}
      >
        <Formik
          initialValues={{
            howMuch: '',
          }}
          onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        >
          {({ handleSubmit, errors, touched, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <FormControl isInvalid={!!errors.howMuch && touched.howMuch}>
                <FormLabel htmlFor='howMuch'>New address</FormLabel>
                <Box border='1px solid gray' borderRadius='md'>
                  <Field
                    className='py-6 overflow-ellipsis'
                    as={Input}
                    name='howMuch'
                    id='howMuch'
                    placeholder={address}
                    type='text'
                    variant='outline'
                    validate={(value: string) => {
                      let error;
                      if (!value) {
                        error = 'Please enter a valid address';
                      }
                      return error;
                    }}
                  />
                </Box>

                <FormErrorMessage>{errors.howMuch}</FormErrorMessage>
              </FormControl>
              <CustomButton
                type='submit'
                title='Change'
                textColor='white'
                bgColor='black'
                shadow
                className='hover:bg-gray-900 hover:font-medium mt-4 ml-[35%]'
                onClick={async () => {
                  await changeMinAmount('placeholder'); //change in database too
                }}
              />
            </Form>
          )}
        </Formik>
      </CustomModal>
      <Container className='pt-28'>
        <div className='space-y-10'>
          <div className='flex flex-col items-start justify-start gap-6 lg:flex-row lg:items-center lg:justify-between'>
            <SecondaryHeading
              heading='Hello Poppins,'
              title='You can manage your listed projects and do much more here.'
            />
            <div className='flex flex-col gap-8 md:flex-row'>
              <CustomButton
                onClick={OnOpen1}
                title='Change Ownership'
                textColor={textColor}
                border
                icon={FaExchangeAlt}
              />
              <CustomButton
                onClick={OnOpen2}
                title='Change Buy-in'
                textColor={textColor}
                border
                icon={BsCurrencyExchange}
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-8'>
            <DashboardCard bgColor='limegreen.400' icon={HiOutlineCurrencyDollar} iconLabel='Current balance' currencyValue={AmountRemaining} footerText='Available to withdraw' />
            <DashboardCard bgColor='gray.200' icon={TbUsersGroup} iconLabel='Total backers' currencyValue={Providers} link='view all' />
          </div>
          <CardAvatar contractAddress={OwnerContract} />
        </div>
      </Container>
    </section>
  );
}
