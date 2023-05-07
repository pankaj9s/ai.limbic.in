import React from 'react'
import { 
    Container,
    FormButton,
    FormLabel,
    FormContent,
    Icon,
    Form,
    FormH1,
    FormInput,
    FormWrap,
    Text
} from './SigninElements'

function SignIn() {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">{process.env.REACT_APP_PROJECT_NAME} </Icon>
                    <FormContent>
                        <Form action='#'>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                       <FormInput type='email' required/>
                       
                       <FormLabel htmlFor='for'>Password</FormLabel>
                       <FormInput type='password' required/>
                      <FormButton type='submit'>Continue</FormButton>
                      <Text>Forgot password</Text>
                      </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
