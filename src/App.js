import Header from './components/Header/Header';
import Layout from './components/Layout/Layput';
import Footer from './components/Footer/Footer';
import BG2 from './assets/bg2.jpg';
import BG3 from './assets/bg3.jpg';


function App() {

  return (
    <>
      <Header
        title="This is props.title"
        desc="This is props.description!"
      />
      <Layout
        title="Section Title 1"
        desc="Description of section 1"
        urlBg={`url(${BG2})`}
      />
      <Layout
        title="Section Title 2"
        desc="Description of section 2"
        colorBg="#e2e2e2"
      />
      <Layout
        title="Section Title 3"
        desc="Description of section 2"
        urlBg={`url(${BG3})`}
      />
      <Footer />
    </>
  );
}

export default App;
