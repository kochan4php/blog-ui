import { useRouter } from "next/router";
import { PostsByCategory } from "../../components";

const Backend = () => {
  const router = useRouter();
  const route = router.route.split("/");
  const category = route[route.length - 1];

  return <PostsByCategory category={category} />;
};

export default Backend;
