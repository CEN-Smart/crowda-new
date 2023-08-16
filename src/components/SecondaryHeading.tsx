'use client'

import { Flex, Heading, Text } from '@chakra-ui/react';

interface Props {
  number?: string,
  heading: string,
  title: string,
  center?: boolean,
  className?: string
}
const SecondaryHeading = ({ number, heading, title, center, className }: Props) => {
  return (
    <>
      <Flex textAlign={
        center ? 'center' : 'left'
      } flexDir='column' gap={3}>
        <Heading className={className} >
          {number && number} {heading} </Heading>
        <Text className='text-gray-800 text-sm'>
          {title}
        </Text>
      </Flex>
    </>
  )
}

export default SecondaryHeading