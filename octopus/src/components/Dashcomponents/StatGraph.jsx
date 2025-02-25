import { Box, Text } from "@chakra-ui/react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import React from "react";

// customizing the tooltip
const customToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        bg="transparent"
        p={3}
        borderRadius="md"
        boxShadow="md"
        _hover={{ boxShadow: "lg" }}
      >
        <Text color="white" fontWeight="bold">
          {`${label} : ${payload[0].value}`}
        </Text>
      </Box>
    );
  }
};

function StatGraph({ chartData }) {
  //   console.log(chartData);
  return (
    <Box
      w="100%"
      mt={10}
      ml={10}
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      gap={5}
    >
      <Box
        w="50%"
        h={500}
        pl={5}
        pt={5}
        borderRadius="md"
        backdropFilter="blur(25px)"
        boxShadow="lg"
        _hover={{ boxShadow: "lg" }}
      >
        <Text fontSize="xl" fontWeight="bold" color="white" mb={5}>
          User Activity
        </Text>
        {/* chart from reCharts */}
        <LineChart
          width={600}
          height={400}
          data={chartData}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <Line
            type="monotone"
            dataKey="value"
            stroke="white"
            activeDot={{ r: 8 }}
            strokeWidth="3"
          />
          <CartesianGrid stroke="gray" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis dataKey="value" />
          <Tooltip content={customToolTip} />
        </LineChart>
      </Box>
    </Box>
  );
}

export default StatGraph;
