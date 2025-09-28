import { useContext } from 'react';
import { PodcastContext } from '../context/PodcastContext';

export default function Pagination() {
  const { currentPage, setCurrentPage, filteredPodcasts, itemsPerPage } = useContext(PodcastContext);
  const pageCount = Math.ceil(filteredPodcasts.length / itemsPerPage);

  return (
    <div>
      {Array.from({ length: pageCount }, (_, i) => i + 1).map(page => (
        <button key={page} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
}
