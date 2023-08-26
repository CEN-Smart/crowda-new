'use client'
import Container from '@/components/Container'
import CustomButton from '@/components/CustomButton'
import SecondaryHeading from '@/components/SecondaryHeading'
import { FaExchangeAlt } from 'react-icons/fa'
import { BsCurrencyExchange } from 'react-icons/bs'
import DashboardCard from '@/components/DashboardCard'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { TbUsersGroup } from 'react-icons/tb'
import CardAvatar from '@/components/CardAvatar'
import CustomModal from '@/components/CustomModal'
import { useDisclosure } from '@chakra-ui/react'
import { useRef, useState, useEffect } from 'react'
import {GrLink} from 'react-icons/gr'
import { GiCardExchange } from 'react-icons/gi'
import { getAccount, readContract } from '@wagmi/core'
import { factoryAbi } from '@/constants'


export default function Dashboard() {

  const { isOpen:IsOpen1, onClose:OnClose1, onOpen:OnOpen1 } = useDisclosure()
  const { isOpen:IsOpen2, onClose:OnClose2, onOpen:OnOpen2 } = useDisclosure()
  const cancelRef = useRef()
  
  const { isConnected, address } = getAccount();
  const [contractAddress, setContractAddress] = useState("")


  async function getters() {
    const  request  = await readContract({
      //@ts-ignore
      address: contractAddress,
      abi: factoryAbi,
      functionName: 'amountNeeded',
      args : []
    })
    console.log(request)
  }

  async function isContract(contractAddress:string, msgSender:string) {
    const  request  = await readContract({
      address: '0xd3924Aed3dbE4bdBC12FBc5917bBa7202141FE6F',
      abi: factoryAbi,
      functionName: 'isOwner',
      args : [contractAddress,msgSender]
    })
    return request

  }
  
  async function isCreator() {
    const  request  = await readContract({
      address: '0xd3924Aed3dbE4bdBC12FBc5917bBa7202141FE6F',
      abi: factoryAbi,
      functionName: 'isCreator',
      args : [address]
    })
    console.log('request is',request)
    if (request) {
      
      const marketplace = await readContract({
        address: '0xd3924Aed3dbE4bdBC12FBc5917bBa7202141FE6F',
        abi: factoryAbi,
        functionName: 'getMarketPlace',
        args : []
      })
      console.log(marketplace)
      for (let i = 0; i < marketplace.length; i++) {
        //@ts-ignore
        const exists = await isContract(marketplace[i], address);
        console.log('exists is', exists)
        //@ts-ignore
        if (exists) {
          return (marketplace[i]);
        }
      }

    }
  }
  useEffect(() => {
    async function updateUI() {
      if (isConnected) {
        const contractAddr = await isCreator()
        console.log(contractAddr);
        setContractAddress(contractAddress);
      }
    }updateUI()
  },)



  return (
    <section>
       {/* Custom dialog 1*/}
    <CustomModal
    hasInputField
     motionPreset='slideInBottom'
     leastDestructiveRef={cancelRef}
     onClose={OnClose1}
     isOpen={IsOpen1}
     isCentered
    icon={GrLink} iconLabel='Change Address' address='Current address:' 
    addressText='000XA...0Xe'
    primaryText='New address'
    placeholder='000Xe...0Xe'
    addressNumber='0xaB6B4...14E' >
      <CustomButton title='Change' textColor='white' bgColor='black' shadow  className='hover:bg-gray-900 hover:font-medium' />
    </CustomModal>
    {/* Custom dialog 2*/}
    <CustomModal
    hasTextField
     motionPreset='slideInBottom'
     iconClassName='text-blue-600'
     leastDestructiveRef={cancelRef}
     onClose={OnClose2}
     isOpen={IsOpen2}
     isCentered
    icon={ GiCardExchange} iconLabel='Withdraw funds' address='Wallet address:' 
    addressText='000XA...0Xe'
    primaryText='Confirm wallet address'
    placeholder='000Xe...0Xe'
    addressNumber='0xaB6B4...14E' >
      <CustomButton title='Withdraw' textColor='white' bgColor='black' shadow  className='hover:bg-gray-900 hover:font-medium' />
    </CustomModal>
      <Container className='pt-28' >
        <div className='space-y-10' >
          <div className='flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-start lg:justify-between' >
            <SecondaryHeading heading='Hello Poppins,' title='You can manage your listed projects and do much more here.' />
            <div className='flex flex-col md:flex-row gap-8'>
              <CustomButton onClick={OnOpen1} title='Change Ownership' textColor='black' border icon={FaExchangeAlt} />
              <CustomButton onClick={OnOpen2} title='Change Buy-in' textColor='black' border icon={BsCurrencyExchange} />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-8'>
            <DashboardCard bgColor='limegreen.400' icon={HiOutlineCurrencyDollar} iconLabel='Current balance' currencyValue='$5,000.66' footerText='Available to withdraw' />
            <DashboardCard bgColor='gray.200' icon={TbUsersGroup} iconLabel='Total backers' currencyValue='10,000' link='view all' />
          </div>
          <CardAvatar />
        </div>
      </Container>
    </section>
  )
}