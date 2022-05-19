import { useState, useEffect } from "react";
import blog from "../../data";

// Detail Blog Component
const DetailPosts = ({ id }) => {
  const [detailPosts, setDetailPosts] = useState([]);

  useEffect(() => {
    const filteredPosts = blog.filter((item) => item.id == id);
    setDetailPosts(filteredPosts);
  }, []);

  return (
    <section className="mb-3 text-slate-200">
      {detailPosts.map(({ img, category, date, id, title, detail, user }) => (
        <div key={id} className="text-slate-300 mb-3">
          <div className="flex flex-col justify-center items-center px-6">
            <p className="capitalize text-slate-400 my-5 lg:text-lg">
              {category} &#8226; {date}
            </p>
            <h1 className="text-xl lg:text-2xl mb-5 tracking-wide lg:leading-9 leading-8 text-slate-200 text-center">
              {title}
            </h1>
            <div className="flex items-center my-4">
              <img
                src={user.avatar}
                alt="Avatar"
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <h5 className="text-xl">{user.name}</h5>
                <p className="text-base text-slate-400">{user.role}</p>
              </div>
            </div>
          </div>
          <div className="h-full w-full rounded-md overflow-hidden my-6 lg:px-5">
            <img src={img} className="w-full h-full" />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: detail }}
            className="text-md lg:text-2xl lg:m-16 lg:px-0 lg:leading-9 leading-8 tracking-wider text-slate-300 px-5"
          ></div>
        </div>
      ))}
    </section>
  );
};

export default DetailPosts;
