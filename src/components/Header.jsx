import { Link } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">BlogSpace</Link>
        <Link
          to="/create"
          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors"
        >
          <FaPen className="mr-2" />
          Write Post
        </Link>
      </nav>
    </header>
  );
}