"use client";
import { Text, SimpleGrid, GridItem, Box, Grid, Heading } from "@chakra-ui/react";
import Container from "./Container";
import MarketCard from "./MarketCard";

export default function MarketList() {
  return (
    <>
      <Container className="pt-28">
        <Heading size={{
          base: "sm",
          md: "md",
          lg: "lg",
        }} className="font-bold text-center">
          The Malaika&apos;s Marketplace
        </Heading>
        <Text className="py-3 text-sm text-center md:text-md" >Explore and support projects that you care about.</Text>
        <Text className="py-3 pt-20 text-lg font-semibold">Trending projects</Text>
       <Box  className="p-2 mx-auto border rounded-lg md:p-6 shadow-primary border-slate-300">
      <Grid gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }} gap={5} >
        <GridItem>
          <MarketCard/>
        </GridItem>
        <GridItem>
          <MarketCard/>
        </GridItem>
        <GridItem>
          <MarketCard/>
        </GridItem>
        <GridItem>
          <MarketCard/>
        </GridItem>
        <GridItem>
          <MarketCard/>
        </GridItem>
        <GridItem>
          <MarketCard/>
        </GridItem>
      </Grid>
       </Box>
      </Container>
    </>
  );
}
