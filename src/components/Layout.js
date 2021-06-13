import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    <>
        <Header />
        <div>{this.props.children}</div>
        <Footer />
    </>;
};

export default Layout;
