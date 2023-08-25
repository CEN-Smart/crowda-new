"use client";

import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Progress,
  Stack,
  Text,
  Box,
  Image,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Field, Form, Formik } from 'formik';
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";
import CustomButton from "./CustomButton";

export default function SingleMarketCard() {
  return (
    <>
      <Box className="pt-32 lg:px-12 md:px-8 px-4 mx-auto">
        <Box>
          <Heading as="h3" mb={2}>
            The Moon project
          </Heading>
          <Text>
            You are supporting this <Text as="strong">Moon project</Text>. Your
            will matter
          </Text>

          <Card
            className="mt-5 border shadow-primary border-slate-400"
            overflow="hidden"
          >
            <Image
              className="object-fill"
              src="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHRoZSUyMG1vb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80"
              alt="Green double couch with wooden legs"
              height="auto"
            />
            <CardBody>
              <Stack mt="6" spacing="3">
                <Text>Created by Poppins</Text>
                <Heading size="lg">Moon</Heading>
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero incidunt, quasi facere in quos accusantium laboriosam
                  placeat id eum ad dicta illo ex? Ad voluptates enim impedit
                  nobis ut velit!
                </Text>
                <Box mt="4">
                  <Progress
                    className="mb-2 font-semibold rounded-full"
                    value={60}
                    size="lg"
                    colorScheme="green"
                  />

                  <Text className="font-semibold" fontSize="md">
                    <span className="text-slate-600">$1500 raised of</span>{" "}
                    $2000
                  </Text>
                </Box>
              </Stack>
              <Stack spacing={3}>
                <Heading size="md" mt={6}>
                  Current backers(3)
                </Heading>
                <Text>
                  0xaB6B4b11378a57933333e4Acfdc45567Dd78F14E{" "}
                  <span className="block font-bold">$500</span>
                </Text>
                <Text>
                  0xaB6B4b11378a57933333e4Acfdc45567Dd78F14E{" "}
                  <span className="block font-bold">$500</span>
                </Text>
                <Text>
                  0xaB6B4b11378a57933333e4Acfdc45567Dd78F14E{" "}
                  <span className="block font-bold border-b border-slate-600 pb-8">$500</span>
                </Text>
              </Stack>
            </CardBody>
            <CardFooter className="flex flex-col  lg:flex-row items-start justify-between -mt-8 ">
              <Stack>
              <Heading size="md" mt={6}>
                  Enter how much you&apos;re pledging
                </Heading>
                <Formik initialValues={{
            howMuch: '',
          }}
            onSubmit={(values) => (
              alert(JSON.stringify(values, null, 2))
            )}>
            {({ handleSubmit, errors, touched, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <FormControl isInvalid={!!errors.howMuch && touched.howMuch}>
                    <FormLabel htmlFor='howMuch'>Minimum buy-in for this project is $500. <Link className='underline transition hover:no-underline duration-300' href='/marketplace/marketId/learnmore'>Learn More</Link>
                  </FormLabel>
                    <Box border='1px solid gray' borderRadius='md' >
                      <InputGroup>
                        <InputLeftElement>
                          <Text >$</Text>
                        </InputLeftElement>
                        <Field className={`pl-8 pr-20`} as={Input} name='howMuch' id='howMuch' placeholder='500' type='number' variant='outline' validate={(value: string) => {
                          let error
                          if (!value) {
                            error = 'Please enter an amount'
                          }
                          return error
                        }} />
                        <InputRightElement>
                          <span className='-ml-10 mr-4'> USD </span>
                          <LuChevronDown color='green.500' />
                        </InputRightElement>
                      </InputGroup>
                    </Box>

                    <FormErrorMessage>
                      {errors.howMuch}
                    </FormErrorMessage>
                  </FormControl >
                  <CustomButton type='submit' className='w-fit hover:font-semibold mt-6' title='Buy-in' bgColor='black' textColor='white' />
              </Form>

            )}
          </Formik>
          
              </Stack>
              <Stack>
              <Heading size="md" mt={6}>
                  Contact address
                </Heading>
                <Text> 0xaB6B4b11378a57933333e4Acfdc45567Dd78F14E<Link className='underline transition block font-[500] hover:no-underline duration-300' href='/marketplace/marketId/view-on-etherscan'>View on etherscan</Link>
                  </Text>
              </Stack>
            </CardFooter>
          </Card>
        </Box>
      </Box>
    </>
  );
}
