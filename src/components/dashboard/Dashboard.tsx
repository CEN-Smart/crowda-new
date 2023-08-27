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
import { factoryAbi, malaikaAbi } from '@/constants'
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core'




export default function Dashboard() {

  const { isOpen:IsOpen1, onClose:OnClose1, onOpen:OnOpen1 } = useDisclosure()
  const { isOpen:IsOpen2, onClose:OnClose2, onOpen:OnOpen2 } = useDisclosure()
  const cancelRef = useRef()
  
  const { isConnected, address } = getAccount();
  const [AmountRemaining, setAmountRemaining] = useState("loading.....")
  const [Providers, setProviders] = useState("loading.......")
  const [OwnerContract, setOwnerContract] = useState("")
  
  const localhostAddr = "0xd3924Aed3dbE4bdBC12FBc5917bBa7202141FE6F"
  //@ts-ignore
  //const sliceAddr = `${address.slice(0, 5)}...${address.slice(-4)}`;



  async function changeOwner(newOwner:string) {
    if (isConnected) {
      const request = await prepareWriteContract({
        //@ts-ignore
        address: OwnerContract,
        abi: malaikaAbi,
        functionName: 'changeOwner',
        args: [newOwner]
      })
      console.log('value is ', request)
      const { hash } = await writeContract(request)
      const data = await waitForTransaction({
        confirmations: 1,
        hash,
      })
      console.log(hash);
      if (data.status == 'success') {
        console.log(data);
        return true
      }
    } 
  }

  async function changeMinAmount(newAmount:string) {
    if (isConnected) {
      const request = await prepareWriteContract({  
        //@ts-ignore
        address: OwnerContract,
        abi: malaikaAbi,
        functionName: 'changeMinAmount',
        args: [newAmount]
      })
      console.log('value is ', request)
      const { hash } = await writeContract(request)
      const data = await waitForTransaction({
        confirmations: 1,
        hash,
      })
      console.log(hash);
      if (data.status == 'success') {
        console.log(data);
        return true
      }
    } 
  }

  async function getAmount(contractAddress:string) {
    const  receipt  = await readContract({
      //@ts-ignore
      address: contractAddress,
      abi: malaikaAbi,
      functionName: 'getRemainderBalance',
      args : []
    })
    const  response  = await readContract({
      //@ts-ignore
      address: contractAddress,
      abi: malaikaAbi,
      functionName: 'getAmountNeeded',
      args : []
    })
    //@ts-ignore
    const request = response - receipt
    console.log('remaining balance is', request)
    console.log('amount needed is is', response)

    return request
  }
  async function getProvider(contractAddress:string) {
    const  request  = await readContract({
      //@ts-ignore
      address: contractAddress,
      abi: malaikaAbi,
      functionName: 'getShareHolders',
      args : []
    })
    console.log('providers is', request)
    return request
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
    console.log('isCreator is',request)
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
        //@ts-ignore
        setOwnerContract(contractAddr)
        //@ts-ignore
        const amount = await getAmount(contractAddr)
        console.log('amount is', amount)
        //@ts-ignore
        setAmountRemaining((BigInt(amount)).toString())
        //@ts-ignore
        console.log('amount is remaining',AmountRemaining)
        //@ts-ignore
        const backers = await getProvider(contractAddr);
        console.log('backers are', backers)
        //@ts-ignore
        setProviders(backers.toString())
        console.log("provider is ",Providers)
      }
    }updateUI()
  },[isConnected,AmountRemaining,Providers,OwnerContract])



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
    addressNumber={address} >
        <CustomButton title='Change' textColor='white' bgColor='black' shadow className='hover:bg-gray-900 hover:font-medium' onClick={async () => {
          await changeOwner("placeholder")
        }} />
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
    addressText={address}
    primaryText='Confirm wallet address'
    placeholder="0x67h4...05c"
    addressNumber="0xe798...9c7" > 
        <CustomButton title='Withdraw' textColor='white' bgColor='black' shadow className='hover:bg-gray-900 hover:font-medium' onClick={async () => {
          await changeMinAmount("placeholder") //change in database too
        }} />
    </CustomModal>
      <Container className='pt-28' >
        <div className='space-y-10' >
          <div className='flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-start lg:justify-between' >
            <SecondaryHeading heading='Hello Poppins,' title='You can manage your listed projects and do much more here.' />
            <div className='flex flex-col md:flex-row gap-8'>
              <CustomButton onClick={OnOpen1} title='Change Ownership' textColor='black' border icon={FaExchangeAlt} />
              <CustomButton onClick={OnOpen2} title='Change Buy-in' textColor='black' border icon={BsCurrencyExchange}  />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-8'>
            <DashboardCard bgColor='limegreen.400' icon={HiOutlineCurrencyDollar} iconLabel='Current balance' currencyValue={`$${AmountRemaining}.00`} footerText='Available to withdraw' />
            <DashboardCard bgColor='gray.200' icon={TbUsersGroup} iconLabel='Total backers' currencyValue={Providers} link='view all' />
          </div>
          <CardAvatar contractAddress={OwnerContract} />
        </div>
      </Container>
    </section>
  )
}