import type { FC } from 'react';
import {Link} from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';

import styles from '../../page.module.css'

interface IHummersPageProps {}

const HummersPage: FC<IHummersPageProps> = () => {
    return (
        <div className={styles.roulette}>
            <Link to={ROUTES.main}>Return</Link>
            <div>Hello </div>
        </div>
    );
}

export default HummersPage;
