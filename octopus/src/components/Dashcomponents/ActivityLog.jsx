import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { CalendarClock } from "lucide-react";

function ActivityLog({ actData }) {
  return (
    <Box
      w="100%"
      h="100%"
      px={4}
      backdropFilter="blur(25px)"
      borderRadius="md"
      boxShadow="lg"
      ml={10}
      my={10}
    >
      <Text fontSize="xl" fontWeight="bold" color="white" ml={5} mb={5}>
        Activity Log
      </Text>

      {actData
        .map((item) => (
          <Box
            key={item.id}
            display="flex"
            px={5}
            mb={4}
            flexDirection="column"
            bg="whiteAlpha.200"
            py={2}
            borderRadius={10}
            _hover={{ bg: "whiteAlpha.300" }}
          >
            <Box display="flex" flexDirection="row" gap={2}>
              <CalendarClock size={24} color="white" />
              <Text color="lightgreen" fontWeight="bold">
                {item.user}
              </Text>
              <Text color="white">{item.activity}</Text>
            </Box>
            <Text mx={8} color="whiteAlpha.400">
              {item.date}
            </Text>
          </Box>
        ))
        .reverse()}
    </Box>
  );
}

export default ActivityLog;
