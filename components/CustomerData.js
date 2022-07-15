import { Divider, Stack, Text, Box } from '@chakra-ui/react'

export default function CustomerData({
  creditCard,
  firstName,
  lastName,
  telephone
}) {
  return(
    <Box>
      <Divider />
      <Stack isInline>
        <Box>
          <Text fontSize="lg" my={4} mx={4}>
            {firstName} {lastName}
          </Text>
        </Box>
      </Stack>
      <Divider border="4" />
      <Stack isInline>
        <Box>
          <Text fontSize="lg" my={4} mx={4}>
            {telephone}
          </Text>
        </Box>
      </Stack>
      <Divider border="4" />
      <Stack isInline>
        <Box>
          <Text fontSize="lg" my={4} mx={4}>
            {creditCard}
          </Text>
        </Box>
      </Stack>
      <Divider border="4" />
    </Box>
  )
}