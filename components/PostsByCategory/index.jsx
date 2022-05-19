import Link from "next/link";
import { useState, useEffect } from "react";
import blog from "../../data";

const PostsByCategory = ({ category }) => {
  const [postsByCategory, setPostsByCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filteredPostsByCategory = blog.filter(
      (item) => category === item.slug
    );
    setPostsByCategory(filteredPostsByCategory);
    setLoading(false);

    return () => {
      setPostsByCategory([]);
      setLoading(true);
    };
  }, []);

  return (
    <section className="mb-6">
      {loading ? (
        <h1 className="text-center text-white text-3xl font-semibold mb-10">
          Loading...
        </h1>
      ) : (
        <>
          <div>
            <h1 className="text-center text-white text-3xl font-semibold mb-10">
              {postsByCategory[0]?.category}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
            {postsByCategory.map(
              ({ img, category, date, id, title, excerpt, user }, index) => (
                <div key={index} className="text-slate-300 mb-16 max-w-full">
                  <div className="w-full rounded-md overflow-hidden">
                    <img src={img} className="w-full h-full" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="capitalize text-slate-400 my-5">
                      {category} &#8226; {date}
                    </p>
                    <Link href={"/detail/" + id} passHref>
                      <h1 className="text-xl mb-5 tracking-wide leading-10 text-slate-200 cursor-pointer hover:text-slate-300 transition-colors duration-200">
                        {title}
                      </h1>
                    </Link>
                    <h3 className="text-lg leading-8 text-slate-400 mb-5">
                      {excerpt}
                    </h3>
                    <div className="flex items-center">
                      <img
                        src={user.avatar}
                        alt="Avatar"
                        width={45}
                        height={45}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h5 className="text-xl">{user.name}</h5>
                        <p className="text-base text-slate-400">{user.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default PostsByCategory;
