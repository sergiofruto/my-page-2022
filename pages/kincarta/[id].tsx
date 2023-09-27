import { useRouter } from "next/router";

export default function IdPage() {
  const router = useRouter();
  return <p>Post: {router.query.id}</p>;
}
