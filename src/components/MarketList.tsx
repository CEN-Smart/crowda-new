"use client";
import { Text, SimpleGrid } from "@chakra-ui/react";
import Container from "./Container";
import SecondaryHeading from "./SecondaryHeading";
import MarketCard from "./MarketCard";

export default function MarketList() {
  return (
    <>
      <Container className="pt-28">
        <SecondaryHeading
          center
          heading={`The Malaika's Marketplace`}
          title="Explore and support projects that you care about."
        />
        <Text className="text-lg font-semibold py-3 pt-20">Trending projects</Text>
        <SimpleGrid
          className="p-6 shadow-primary border border-slate-300 rounded-lg"
          minChildWidth="350px"
          spacing={5}
        >
          <MarketCard />
          <MarketCard />
          <MarketCard />
          <MarketCard />
          <MarketCard />
          <MarketCard />
        </SimpleGrid>
      </Container>
    </>
  );
}
