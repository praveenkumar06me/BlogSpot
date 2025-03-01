import BlogPost from '../components/BlogPost';

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to build your first component...",
      date: "2024-03-15",
      author: "John Doe"
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      excerpt: "Discover how to create beautiful designs efficiently with Tailwind CSS...",
      date: "2024-03-14",
      author: "Jane Smith"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Latest Posts</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}