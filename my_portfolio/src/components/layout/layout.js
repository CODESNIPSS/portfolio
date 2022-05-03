import './layout.scss'
import MainNavbar from '../navbar/navbar';
import Home from '../home/home';

const Layout = () => {
    return (
        <main className='layout_container'>
            <MainNavbar />
            <Home />
        </main>
    )
}

export default Layout;