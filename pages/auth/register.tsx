import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import { useState } from 'react';
  import useAuth from '../../hooks/useAuth';
  import { useRouter } from 'next/navigation';
  
  const Register = () => {
    const { registerUser } = useAuth();
    const router = useRouter()
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
  
    const goToLogin = () => {
      router.push('/auth/login')
    }
  
    return (
        <Container size={420} my={40}>
          <Title ta="center" className='title'>
            Create An Account!
          </Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Already have an account?{' '}
            <Anchor size="sm" component="button" onClick={goToLogin}>
              Sign In
            </Anchor>
          </Text>
    
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" required 
            onChange={(val) => setEmail(val.target.value)} value={email}/>
            <TextInput label="Firstname" placeholder="Dami" required mt="md"
            onChange={(val) => setFirstname(val.target.value)} value={firstname}/>
            <TextInput label="Lastname" placeholder="Agba" required mt="md"
            onChange={(val) => setLastname(val.target.value)} value={lastname}/>
            <PasswordInput label="Password" placeholder="Your password" required mt="md"
            onChange={(val) => setPassword(val.target.value)} value={password}/>
            <Button fullWidth mt="xl"
            onClick={() =>
              registerUser({
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname,
              })
            }>
              Sign Up
            </Button>
          </Paper>
        </Container>
    );
  }
  
  export default Register;