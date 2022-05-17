import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import blog from "../../data";
import Layout from "../../layout";

const UIDesign = () => {
  const router = useRouter();
  const { backend } = router.query;
  const [dataPosts, setDataPosts] = useState([]);

  useEffect(() => {
    const postsByCategory = blog.filter((item) => item.category === backend);
    setDataPosts(postsByCategory);
  }, []);

  return (
    <section className="mb-6">
      <div className="text-center mb-10">
        <h1 className="text-slate-300 text-4xl font-semibold">Backend</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {dataPosts.map((item, index) => (
          <div key={index} className="text-slate-300 mb-16 max-w-full">
            <div className="w-full rounded-md overflow-hidden">
              <img src={item.img} className="w-full h-full" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="capitalize text-slate-400 my-5">
                {item.category} &#8226; {item.date}
              </p>
              <Link href={"/detail/" + item.id} passHref>
                <h1 className="text-2xl mb-5 tracking-wide leading-10 text-slate-200 cursor-pointer hover:text-slate-300 transition-colors duration-200">
                  {item.title}
                </h1>
              </Link>
              <h3 className="text-lg leading-8 text-slate-400 mb-5">
                {item.excerpt}
              </h3>
              <div className="flex items-center">
                <img
                  src={item.user.avatar}
                  alt="Avatar"
                  width={45}
                  height={45}
                  className="rounded-full mr-4"
                />
                <div>
                  <h5 className="text-xl">{item.user.name}</h5>
                  <p className="text-base text-slate-400">{item.user.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UIDesign;
