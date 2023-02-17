// Import Layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Routes không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/', componets: Home },
    { path: '/following', componets: Following },
    { path: '/profile', componets: Profile },
    { path: '/upload', componets: Upload, layout: HeaderOnly },
    { path: '/search', componets: Search, layout: null },
];

// Routes cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
