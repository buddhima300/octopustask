import { Box, Text } from "@chakra-ui/react";
import React from "react";

function StatCard({ statData }) {
  return (
    <Box
      w="100%"
      mt={{ base: 5, md: 10 }}
      ml={{ base: "80px", md: "10" }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-around"
      // gap={{ base: 2, md: 5 }}
    >
      {statData.map((item) => (
        <Box
          key={item.topic}
          w={{ base: "80%", md: "45%", lg: "30%" }}
          h={{ base: 200, md: 200 }}
          pl={5}
          pt={5}
          borderRadius="md"
          backdropFilter="blur(25px)"
          boxShadow="2xl"
          _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
          mb={{ base: 4, md: 0 }}
        >
          <Text color="whiteAlpha.500" fontWeight="medium">
            {item.topic}
          </Text>
          <Text
            color="white"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
          >
            {item.value}
          </Text>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            pr={5}
          >
            <Text color="whiteAlpha.600">{item.date}</Text>
            <Text color="lightgreen" fontWeight="bold">
              {item.status}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default StatCard;
