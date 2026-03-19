import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { GENDERS } from '@/constants/categories.ts';

export const MainMenu = () => {
    return (
        <ul className="flex justify-start gap-4 p-4">
            {GENDERS.map((category) => (
                <li key={category.path}>
                    <NavLink
                        to={`/category/${category.path}`}
                        className={({ isActive }) =>
                            clsx(
                                'block border-b-4 py-4 font-bold uppercase',
                                isActive
                                    ? 'text-default border-default'
                                    : 'border-transparent text-gray-500'
                            )
                        }
                    >
                        {category.categoryName}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};
