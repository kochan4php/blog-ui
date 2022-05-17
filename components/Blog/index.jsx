import Link from "next/link";
import blog from "../../data";

const Blog = () => {
  return (
    <section className="mb-6">
      <div className="text-slate-300 mb-20 py-0 xl:flex items-center">
        <div className="w-full h-full rounded-md overflow-hidden">
          <img src={blog[0].img} className="w-full h-full" />
        </div>
        <div className="w-full xl:px-8 xl:py-4 xl:w-2/3 lg:-my-5">
          <p className="capitalize text-slate-400 my-5">
            {blog[0].category} &#8226; {blog[0].date}
          </p>
          <Link href={"/detail/" + blog[0].id} passHref>
            <h1 className="text-xl lg:text-3xl mb-5 tracking-wide leading-10 lg:leading-snug text-slate-200 cursor-pointer hover:text-slate-300 transition-colors duration-200">
              {blog[0].title}
            </h1>
          </Link>
          <h3 className="text-lg lg:text-xl lg:leading-9 leading-8 text-slate-400 mb-5">
            {blog[0].excerpt}
          </h3>
          <div className="flex items-center">
            <img
              src={blog[0].user.avatar}
              alt="Avatar"
              width={45}
              height={45}
              className="rounded-full mr-4"
            />
            <div>
              <h5 className="text-xl">{blog[0].user.name}</h5>
              <p className="text-base text-slate-400">{blog[0].user.role}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {blog.slice(1).map((item, index) => (
          <div key={index} className="text-slate-300 mb-16 max-w-full">
            <div className="w-full rounded-md overflow-hidden">
              <img src={item.img} className="w-full h-full" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="capitalize text-slate-400 my-5">
                {item.category} &#8226; {item.date}
              </p>
              <Link href={"/detail/" + item.id} passHref>
                <h1 className="text-xl mb-5 tracking-wide leading-10 text-slate-200 cursor-pointer hover:text-slate-300 transition-colors duration-200">
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

export default Blog;
