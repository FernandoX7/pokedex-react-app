import classes from './RecentSearches.module.css';
import RecentSearch from "../../components/RecentSearch/RecentSearch";

const RecentSearches = () => {
  return (
    <div className={classes.RecentSearches}>
      <RecentSearch />
      <RecentSearch />
      <RecentSearch />
      <RecentSearch />
      <RecentSearch />
    </div>
  );
};

export default RecentSearches;