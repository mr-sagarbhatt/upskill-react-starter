import { Container, Heading1, Btn, BtnDark, StyledLink } from './components'

const Index = () => {
  return (
    <Container>
      <Heading1 color="#202020">Styled Component</Heading1>
      <Btn>Light</Btn>
      <BtnDark>Dark</BtnDark>
      {/* // * to change which tag or component a styled component renders. */}
      {/* // * use the "as" polymorphic prop to dynamically swap out the element that receives the styles you wrote */}
      <BtnDark as="a">Link</BtnDark>
      <div>
        <StyledLink to="/" target="_blank">
          Home
        </StyledLink>
      </div>
    </Container>
  )
}

export default Index
