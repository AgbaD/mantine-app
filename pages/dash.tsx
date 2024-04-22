import { Button, Group } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function IndexPage() {
    const router = useRouter();
    const goToRegister = () => {
        router.push('/auth/register')
    }
  return (
    <Group mt={50} justify="center">
      <Button size="xl" onClick={goToRegister}>Welcome to Mantine!</Button>
    </Group>
  );
}
