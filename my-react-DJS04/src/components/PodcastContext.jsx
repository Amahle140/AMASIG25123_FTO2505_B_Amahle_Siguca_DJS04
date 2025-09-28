import { createContext, useState, useEffect } from 'react';
import { genres } from '../data/genres';

export const PodcastContext = createContext();

export const PodcastProvider = ({ children }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchPodcasts = async () => {
      const response = await fetch('https://podcast-api.netlify.app');
      const data = await response.json();
      setPodcasts(data);
      setFilteredPodcasts(data);
    };
    fetchPodcasts();
  }, []);

  const filterPodcasts = () => {
    let results = [...podcasts];
    if (searchTerm) {
      results = results.filter(podcast =>
        podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedGenres.length > 0) {
      results = results.filter(podcast =>
        selectedGenres.includes(podcast.genre)
      );
    }
    return results;
  };

  const sortPodcasts = (podcasts) => {
    switch (sortBy) {
      case 'newest':
        return [...podcasts].sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
      case 'title-asc':
        return [...podcasts].sort((a, b) => a.title.localeCompare(b.title));
      case 'title-desc':
        return [...podcasts].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return podcasts;
    }
  };

  useEffect(() => {
    const filtered = filterPodcasts();
    const sorted = sortPodcasts(filtered);
    setFilteredPodcasts(sorted);
    setCurrentPage(1);
  }, [searchTerm, selectedGenres, sortBy, podcasts]);

  const paginatedPodcasts = filteredPodcasts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <PodcastContext.Provider value={{
      podcasts,
      filteredPodcasts,
      paginatedPodcasts,
      searchTerm,
      setSearchTerm,
      sortBy,
      setSortBy,
      selectedGenres,
      setSelectedGenres,
      currentPage,
      setCurrentPage,
      itemsPerPage,
    }}>
      {children}
    </PodcastContext.Provider>
  );
};
