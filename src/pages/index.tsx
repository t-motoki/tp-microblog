import Image from 'next/image';
import { Inter } from 'next/font/google';
import { client } from '../libs/entitis/micro-cms-client';
import { Blog } from '../libs/entitis/models/blog';
import Link from 'next/link';
import { NextPage } from 'next';
import Head from 'next/head';

type Props = {
  blogs: Blog[];
};

const Home = ({ blogs }: Props) => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <main>
        <h1>ここはトップページです</h1>
        <div>
          <ul>
            {blogs.map((blog) => (
              <li key={blog.id}>
                <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;
