import type { FC } from 'react';
import {Outlet} from 'react-router-dom';

interface IMainLayoutProps {}

const MainLayout: FC<IMainLayoutProps> = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '350px'}}>
            <Outlet />
        </div>
    );
}

export default MainLayout;
