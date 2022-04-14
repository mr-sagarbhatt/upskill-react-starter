import { Container, Heading1, Btn, BtnDark } from './components'

const Index = () => {
  return (
    <Container>
      <Heading1 color="#68D0C2">Styled Component: based on props</Heading1>
      <Btn>Light</Btn>
      <BtnDark>Dark</BtnDark>
      {/* // * to change which tag or component a styled component renders. */}
      {/* // * use the "as" polymorphic prop to dynamically swap out the element that receives the styles you wrote */}
      <BtnDark as="a">Link</BtnDark>
    </Container>
  )
}

export default Index
