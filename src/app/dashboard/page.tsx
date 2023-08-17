'use client'
import Container from '@/components/Container'
import CustomButton from '@/components/CustomButton'
import SecondaryHeading from '@/components/SecondaryHeading'
import { Flex, Stack } from '@chakra-ui/react'
import { Metadata } from 'next'
import { FaExchangeAlt } from 'react-icons/fa'
import { BsCurrencyExchange } from 'react-icons/bs'
import DashboardCard from '@/components/DashboardCard'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { TbUsersGroup } from 'react-icons/tb'
import CardAvatar from '@/components/CardAvatar'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Crowda User personal dashboard',
}

export default function Dashboard() {
  return (
    <>
      <Container className='pt-28' >
        <Stack spacing={8} >
          <Flex gap={4} flexDir={{
            base: 'column',
            lg: 'row'
          }} alignItems={{
            base: 'flex-start',
            lg: 'center'
          }} justifyContent={{
            base: 'flex-start',
            lg: 'space-between'
          }} >
            <SecondaryHeading heading='Hello Poppins,' title='You can manage your listed projects and do much more here.' />
            <Flex flexDir={{
              base: 'column',
              md: 'row'
            }} gap={6}>
              <CustomButton title='Change Ownership' textColor='black' border icon={FaExchangeAlt} />
              <CustomButton title='Change Buy-in' textColor='black' border icon={BsCurrencyExchange} />
            </Flex>
          </Flex>
          <Flex flexDir={{
            base: 'column',
            md: 'row'
          }} gap={5}>
            <DashboardCard bgColor='limegreen.400' icon={HiOutlineCurrencyDollar} iconLabel='Current balance' currencyValue='$5,000.66' footerText='Available to withdraw' />
            <DashboardCard bgColor='gray.200' icon={TbUsersGroup} iconLabel='Total backers' currencyValue='10,000' link='view all' />
          </Flex>
          <CardAvatar />
        </Stack>
      </Container>
    </>
  )
}