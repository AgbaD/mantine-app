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

const Login = () => {
  const { loginUser } = useAuth();
  const router = useRouter()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToRegister = () => {
    router.push('/auth/register')
  }

  return (
      <Container size={420} my={40}>
        <Title ta="center" className='title'>
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor size="sm" component="button" onClick={goToRegister}>
            Create account
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required 
          onChange={(val) => setEmail(val.target.value)} value={email}/>
          <PasswordInput label="Password" placeholder="Your password" required mt="md"
          onChange={(val) => setPassword(val.target.value)}
          value={password}/>
          <Button fullWidth mt="xl"
          onClick={() =>
            loginUser({
              email: email,
              password: password,
            })
          }>
            Sign in
          </Button>
        </Paper>
      </Container>
  );
}

export default Login;