import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const Header = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between">
            <Link to="/" className="text-xl font-bold">Turizm Agentligi</Link>
            <nav>
                {user ? (
                    <>
                        <span className="mr-4">Salom, {user.name}</span>
                        <button onClick={() => dispatch(logout())} className="bg-red-500 px-4 py-2 rounded">Chiqish</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="mr-4">Kirish</Link>
                        <Link to="/register">Ro‘yxatdan o‘tish</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
