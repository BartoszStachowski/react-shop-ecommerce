import { CATEGORIES } from '@/constants/categories.ts';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const CategoryMenu = () => {
    return (
        <div className="bg-theme-main w-full">
            <ul className="mx-auto my-0 flex w-full max-w-400 gap-4 p-4">
                {CATEGORIES.map((category) => (
                    <li key={category.categoryName}>
                        <NavLink
                            to={category.path}
                            className={({ isActive }) =>
                                clsx('text-white', {
                                    underline: isActive,
                                    'hover:underline': !isActive,
                                })
                            }
                        >
                            {category.categoryName}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};
