import Image from 'next/image';
import { Inter } from 'next/font/google';
import { client } from '../libs/entitis/micro-cms-client';
import { Blog } from '../libs/entitis/models/blog';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  blogs: Blog[];
};

export default function Home({ blogs }: Props) {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
