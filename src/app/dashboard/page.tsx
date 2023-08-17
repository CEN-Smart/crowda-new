
import Container from '@/components/Container'
import CustomButton from '@/components/CustomButton'
import SecondaryHeading from '@/components/SecondaryHeading'
import { FaExchangeAlt } from 'react-icons/fa'
import { BsCurrencyExchange } from 'react-icons/bs'
import DashboardCard from '@/components/DashboardCard'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { TbUsersGroup } from 'react-icons/tb'
import CardAvatar from '@/components/CardAvatar'
import {Metadata} from 'next'
export const metadata:Metadata = {
  title: 'Crowda | dashboard',
  description: 'User dashboard'
}

export default function Dashboard() {
  return (
    <>
      <Container className='pt-28' >
        <div className='space-y-10' >
          <div className='flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-start lg:justify-between' >
            <SecondaryHeading heading='Hello Poppins,' title='You can manage your listed projects and do much more here.' />
            <div className='flex flex-col md:flex-row gap-8'>
              <CustomButton title='Change Ownership' textColor='black' border icon={FaExchangeAlt} />
              <CustomButton title='Change Buy-in' textColor='black' border icon={BsCurrencyExchange} />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-8'>
            <DashboardCard bgColor='limegreen.400' icon={HiOutlineCurrencyDollar} iconLabel='Current balance' currencyValue='$5,000.66' footerText='Available to withdraw' />
            <DashboardCard bgColor='gray.200' icon={TbUsersGroup} iconLabel='Total backers' currencyValue='10,000' link='view all' />
          </div>
          <CardAvatar />
        </div>
      </Container>
    </>
  )
}