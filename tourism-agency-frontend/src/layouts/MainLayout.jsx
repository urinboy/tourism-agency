import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1 container mt-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
