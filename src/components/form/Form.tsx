'use client'

import { Box, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Radio, Textarea, Text, Stack, RadioGroup, Center, VisuallyHidden, Modal, ModalContent, ModalOverlay, useDisclosure, ButtonGroup, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik'
import Image from 'next/image'
import CustomButton from '../CustomButton';
import imgPlaceholder from '../../../public/fileplaceholder.png'
import { LuChevronDown } from 'react-icons/lu';


const FormPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Grid minH='auto' px={{
        base: 1,
        md: 4,
      }} overflowY='auto' maxW={{
        base: 'full',
        md: '70%',
        lg: '60%',
        xl: '50%'
      }} marginX='auto'
        pt={32} pb={10}>
        <Box bg='white' color='black' p={6} borderRadius='md' >
          <Formik initialValues={{
            name: '',
            title: '',
            description: '',
            category: '',
            howMuch: '',
            minimum: '',
            percentage: '',
            upload: ''
          }}
            onSubmit={(values) => (
              alert(JSON.stringify(values, null, 2))
            )}>
            {({ handleSubmit, errors, touched, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor='name'>Your nickname</FormLabel>
                    <Box border='1px solid gray' borderRadius='md' >
                      <Field as={Input} name='name' id='name' type='text' variant='outline' validate={(value: string) => {
                        let error
                        if (!value) {
                          error = 'Nickname is required'
                        }
                        return error
                      }} />
                    </Box>
                    <FormErrorMessage>
                      {errors.name}
                    </FormErrorMessage>
                  </FormControl >
                  {/* Title Field */}
                  <FormControl isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor='title'>Your project title</FormLabel>
                    <Box border='1px solid gray' borderRadius='md' >
                      <Field as={Input} name='title' id='title' type='text' variant='outline' validate={(value: string) => {
                        let error
                        if (!value) {
                          error = 'Project title is required'
                        }
                        return error
                      }} />
                    </Box>
                    <FormErrorMessage>
                      {errors.title}
                    </FormErrorMessage>
                  </FormControl >
                  {/* TextArea Field */}
                  <FormControl isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor='description'>Your project description</FormLabel>
                    <Box border='1px solid gray' borderRadius='md' >
                      <Field as={Textarea} name='description' id='description' type='text' placeholder='Describe your project and why you need a support' variant='outline' validate={(value: string) => {
                        let error
                        if (!value) {
                          error = 'Project description is required'
                        }
                        return error
                      }} />
                    </Box>
                    <FormErrorMessage>
                      {errors.description}
                    </FormErrorMessage>
                  </FormControl >
                  {/* Radio Items */}
                  <Text>Your project&apos;s category</Text>
                  <RadioGroup py={4} fontSize='sm' name='category'>
                    <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                      <GridItem>
                        <Stack spacing={4}>
                          <Field as={Radio} name='category' value='realEstate' id='realEstate' colorScheme='whatsapp' variant='filled' >
                            Real Estate
                          </Field>
                          <Field as={Radio} name='category' value='blockChain' id='blockChain' colorScheme='whatsapp' variant='filled' >
                            Blockchain
                          </Field>
                          <Field as={Radio} name='category' value='DeFi' id='DeFi' colorScheme='whatsapp' variant='filled' >
                            DeFi
                          </Field>
                        </Stack>
                      </GridItem>
                      <GridItem>
                        <Stack spacing={4}>
                          <Field as={Radio} name='category' value='poppins' id='poppins' colorScheme='whatsapp' variant='filled' >
                            Poppins
                          </Field>
                          <Field as={Radio} name='category' value='gaming' id='gaming' colorScheme='whatsapp' variant='filled' >
                            Gaming
                          </Field>
                          <Field as={Radio} name='category' value='other' id='other' colorScheme='whatsapp' variant='filled' >
                            Other
                          </Field>
                        </Stack>
                      </GridItem>
                    </Grid>
                  </RadioGroup>
                  {/* How Much */}
                  <FormControl isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor='howMuch'>How much would you like to raise?</FormLabel>
                    <Box border='1px solid gray' borderRadius='md' >
                      <InputGroup>
                        <InputLeftElement>
                          <Text >$</Text>
                        </InputLeftElement>
                        <Field as={Input} name='howMuch' id='howMuch' type='number' variant='outline' validate={(value: string) => {
                          let error
                          if (!value) {
                            error = 'Please enter an amount'
                          }
                          return error
                        }} />
                        <InputRightElement>
                          <LuChevronDown color='green.500' />
                        </InputRightElement>
                      </InputGroup>
                    </Box>

                    <FormErrorMessage>
                      {errors.howMuch}
                    </FormErrorMessage>
                  </FormControl >
                  {/* Minimum Buy */}
                  <FormControl isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor='minimum'>Minimum Buy-in?</FormLabel>
                    <Box border='1px solid gray' borderRadius='md' >
                      <InputGroup>
                        <InputLeftElement>
                          <Text >$</Text>
                        </InputLeftElement>
                        <Field as={Input} name='minimum' id='minimum' type='number' variant='outline' validate={(value: string) => {
                          let error
                          if (!value) {
                            error = 'Please specify a minimum Buy-in'
                          }
                          return error
                        }} />
                        <InputRightElement>
                          <LuChevronDown color='green.500' />
                        </InputRightElement>

                      </InputGroup>
                    </Box>
                    <FormErrorMessage>
                      {errors.minimum}
                    </FormErrorMessage>
                  </FormControl >
                  {/* Percentage */}
                  <FormControl isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor='percentage'>How much would you like to raise?</FormLabel>
                    <Box border='1px solid gray' borderRadius='md' >
                      <InputGroup>
                        <InputLeftElement>
                          <Text >$</Text>
                        </InputLeftElement>
                        <Field as={Input} name='percentage' id='percentage' type='number' variant='outline' validate={(value: string) => {
                          let error
                          if (!value) {
                            error = 'Please provide a percentage'
                          }
                          return error
                        }} />
                        <InputRightElement>
                          <LuChevronDown color='green.500' />
                        </InputRightElement>
                      </InputGroup>
                    </Box>
                    <FormErrorMessage>
                      {errors.percentage}
                    </FormErrorMessage>
                  </FormControl >
                  {/* Upload Content */}
                  <Center textAlign='center'>
                    <Stack>
                      <FormControl isInvalid={!!errors.name && touched.name}>
                        <FormLabel htmlFor='upload' cursor='pointer'>
                          <Image className=' mx-auto' src={imgPlaceholder} alt='File upload Image' />
                        </FormLabel>
                        <VisuallyHidden>
                          <Field as={Input} name='upload' id='upload' type='file' />
                        </VisuallyHidden>
                      </FormControl >
                      <Text>Project photo/video</Text>
                      <Text mb={3}>A high quality photo is required</Text>
                      <CustomButton className='hover:font-semibold' title='Upload' textColor='black' border />
                    </Stack>
                  </Center>
                  {/* Next Button */}
                  <CustomButton onClick={() => {
                    isSubmitting ? null : onOpen()
                  }} type='submit' title='Submit' bgColor='black' textColor='white' className='hover:font-semibold hover:bg-slate-900' />
                </Stack>
              </Form>

            )}
          </Formik>
        </Box>
      </Grid>
      {/* Modal Popup */}
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent py={16}>
          <Center>
            <Stack spacing={20}>
              <Text textAlign='center' as='strong'>Congratulations! <br />Your project has been listed successfully. </Text>
              <ButtonGroup gap={2} flexDirection='column'>
                <CustomButton title='Continue to dashboard' bgColor='black' textColor='white' className='hover:font-semibold hover:bg-slate-900' />
                <CustomButton title='Share project' border textColor='black' className='hover:font-semibold' />
              </ButtonGroup>
            </Stack>
          </Center>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FormPage
