import { useContext } from 'react';
import { PodcastContext } from '../components/PodcastContext';

export default function SortDropdown() {
  const { sortBy, setSortBy } = useContext(PodcastContext);
  return (
    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
      <option value="newest">Newest First</option>
      <option value="title-asc">Title A-Z</option>
      <option value="title-desc">Title Z-A</option>
    </select>
  );
}

