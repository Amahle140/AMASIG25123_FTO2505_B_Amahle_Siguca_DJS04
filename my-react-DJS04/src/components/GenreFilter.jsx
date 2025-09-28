import { useContext } from 'react';
import { PodcastContext } from '../components/PodcastContext';
import { genres } from '../utils/genres';

export default function GenreFilter() {
  const { selectedGenres, setSelectedGenres } = useContext(PodcastContext);
  return (
    <select
      multiple
      value={selectedGenres}
      onChange={(e) => {
        const options = [...e.target.selectedOptions];
        const values = options.map(option => option.value);
        setSelectedGenres(values);
      }}
    >
      {Object.entries(genres).map(([id, title]) => (
        <option key={id} value={id}>{title}</option>
      ))}
    </select>
  );
}
