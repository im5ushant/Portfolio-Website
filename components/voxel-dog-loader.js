import DogContainer from './dogcontainer';
import { Box, Spinner } from '@chakra-ui/react'

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader