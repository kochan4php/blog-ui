import { useRouter } from "next/router";
import { DetailBlog } from "../../components";
import Layout from "../../layout";

// Detail Blog in /detail/:id
const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return (
    <Layout>
      <DetailBlog id={id} />
    </Layout>
  );
};

export default Detail;
