import '@pages/sidepanel/SidePanel.css';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import Footer from './components/Footer/Footer.jsx';

const SidePanel = () => {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <Footer name="Brendan" />
    </div>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
