// layouts/AuthLayout.jsx (plein écran, pas de Header)
import { Outlet } from 'react-router-dom';
function AuthLayout() {
    return (
        <div>
            <Outlet />
        </div>
    );
}
export default AuthLayout;