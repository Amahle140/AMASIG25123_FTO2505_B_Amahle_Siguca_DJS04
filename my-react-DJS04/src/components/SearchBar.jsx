import { useContext } from 'react';
import { PodcastContext } from './PodcastContext';

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(PodcastContext);
  return (
    <input
      type="text"
      placeholder="Search podcasts..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
