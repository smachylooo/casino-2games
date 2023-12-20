import type { FC } from 'react';
import {Outlet} from 'react-router-dom';

interface IGamesLayoutProps {}

const GamesLayout: FC<IGamesLayoutProps> = () => {
    return (
        <div className='w-full h-100h'>
            <Outlet/>
        </div>
    );
}

export default GamesLayout;
