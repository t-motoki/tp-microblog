import { Blog } from '@/cores/entitis/models/blog';
import { client } from '../../libs/micro-cms-client';
import { ParsedUrlQuery } from 'node:querystring';
import { GetStaticProps } from 'next';

type Props = {
  blog: Blog;
};

type Params = ParsedUrlQuery & {
  id: string;
};

export default function BlogId({ blog }: Props) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' });

  const paths = data.contents.map((content: Blog) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const id = context?.params?.id;
  const data = await client.get({ endpoint: 'blogs', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
