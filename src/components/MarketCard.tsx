"use client";

import {
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  Text,
  Image,
  Badge,
  Box,
  Progress,
} from "@chakra-ui/react";
import { PiArrowUpRightBold } from "react-icons/pi";
import Link from "next/link";

export default function MarketCard() {
  return (
    <>
      <Card className="relative rounded-2xl">
    
        <CardBody>
        <Image
            src="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHRoZSUyMG1vb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            w='100%'
          />
          <Badge
            bg="gray.400"
            className="absolute p-1 text-xs font-normal rounded-md top-8 left-8"
            color="white"
          >
            0.24 ETH
          </Badge>
        
          <Stack mt="6" spacing="3">
            <Heading size="md">#The Moon</Heading>
            <Text>A brief description of this project.</Text>
            <Box mt="4">
              <Text fontSize="sm">$1500 raised of $2000</Text>
              <Progress
                className="mt-1 rounded-full"
                value={60}
                size="sm"
                colorScheme="green"
              />
            </Box>
          </Stack>
        </CardBody>
        <CardFooter className="flex items-center justify-between ">
          <Text fontSize="sm">4d:7h:24m:2s</Text>
          <Link
            className="px-4 py-2 text-white transition duration-300 bg-black rounded-md hover:font-semibold shadow-primary-inner hover:shadow-primary-inner-lg hover:bg-opacity-80"
            href={`/marketplace/marketId`}
          >
            <div className="flex items-center gap-1">
              View <PiArrowUpRightBold className="inline-block" />
            </div>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
