import { useRouter } from "next/router";
import { DetailPost } from "../../components";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  return <DetailPost id={id} />;
};

export default Detail;
