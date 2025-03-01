import { motion } from 'framer-motion';
import { format } from 'date-fns';

export default function BlogPost({ title, excerpt, date, author }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow"
    >
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex items-center text-sm text-gray-500">
        <span>{author}</span>
        <span className="mx-2">•</span>
        <time>{format(new Date(date), 'MMM d, yyyy')}</time>
      </div>
    </motion.article>
  );
}