import '@pages/sidepanel/SidePanel.css';
import useStorage from '@src/shared/hooks/useStorage';
import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';

const SidePanel = () => {
  const theme = useStorage(exampleThemeStorage);

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#000',
      }}>
        <Header />
        <SearchForm />
    </div>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
