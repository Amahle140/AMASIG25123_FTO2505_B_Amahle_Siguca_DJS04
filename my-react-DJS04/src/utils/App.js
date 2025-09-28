import { PodcastProvider } from './components/PodcastContext';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
import GenreFilter from './components/GenreFilter';
import Pagination from './components/Pagination';

function App() {
  return (
    <PodcastProvider>
      <div>
        <h1>Podcast App</h1>
        <SearchBar />
        <SortDropdown />
        <GenreFilter />
        <Pagination />
      </div>
    </PodcastProvider>
  );
}

export default App;