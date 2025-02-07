import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Tours from "../pages/Tours";
import TourDetail from "../pages/TourDetail";
import BookTour from "../pages/BookTour";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import AdminDashboard from "../pages/AdminDashboard";
import AdminTours from "../pages/AdminTours";
import AdminBookings from "../pages/AdminBookings";
import AdminPayments from "../pages/AdminPayments";
import AdminTranslations from "../pages/AdminTranslations";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="tours" element={<Tours />} />
                    <Route path="tours/:id" element={<TourDetail />} />
                    <Route path="book" element={<BookTour />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                </Route>

                <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="tours" element={<AdminTours />} />
                    <Route path="bookings" element={<AdminBookings />} />
                    <Route path="payments" element={<AdminPayments />} />
                    <Route path="translations" element={<AdminTranslations />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
