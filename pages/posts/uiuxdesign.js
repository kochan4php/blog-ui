import { useRouter } from "next/router";
import { PostsByCategory } from "../../components";

const UIUXDesign = () => {
  const router = useRouter();
  const route = router.route.split("/");
  const category = route[route.length - 1];

  return <PostsByCategory category={category} />;
};

export default UIUXDesign;
