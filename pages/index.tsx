import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/auth/register')
  }, [router])

};

export default Index;
