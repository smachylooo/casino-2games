import type { FC } from 'react';
import {Link} from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';
import CoreGameRoulette from '../../../games/roulette';

import styles from '../../page.module.css'

interface IRoulettePageProps {}

const RoulettePage: FC<IRoulettePageProps> = () => {
    return (
        <div className={styles.roulette}>
            <Link to={ROUTES.main}>Return</Link>
            <CoreGameRoulette/>
        </div>
    );
}

export default RoulettePage;
