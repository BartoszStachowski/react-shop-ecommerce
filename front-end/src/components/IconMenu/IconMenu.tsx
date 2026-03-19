import { Link } from 'react-router-dom';
import BAG_ICON from '@/assets/bag.svg';
import HEART_ICON from '@/assets/heart.svg';

export const IconMenu = () => {
    const cartItems = 2;
    return (
        <ul className="flex gap-4 p-4">
            <li>
                <Link to="/favorites">
                    <img src={HEART_ICON} alt="heart icon" />
                </Link>
            </li>
            <li className="relative">
                <Link to="/cart">
                    <img src={BAG_ICON} alt="bag icon" />
                    <div className="absolute -right-2 -bottom-2 flex aspect-square w-5 items-center justify-center rounded-full bg-yellow-300 text-xs font-bold">
                        {cartItems}
                    </div>
                </Link>
            </li>
        </ul>
    );
};
