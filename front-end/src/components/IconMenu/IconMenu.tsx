import { Link } from 'react-router-dom';
import BAG_ICON from '@/assets/bag.svg';
import HEART_ICON from '@/assets/heart.svg';

export const IconMenu = () => {
    return (
        <ul className="flex gap-4 p-4">
            <li>
                <Link to="/favorites">
                    <img src={HEART_ICON} alt="heart icon" />
                </Link>
            </li>
            <li>
                <Link to="/cart">
                    <img src={BAG_ICON} alt="bag icon" />
                </Link>
            </li>
        </ul>
    );
};
