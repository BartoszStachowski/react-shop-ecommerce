import { CATEGORIES } from '@/constants/categories.ts';
import ARROW_ICON from '@/assets/arrow.svg';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const ExpandableMenu = () => {
    const activePath = 'clothing';
    return (
        <div className="mt-4 w-44 pl-4">
            <p className="mb-4 font-bold">Women</p>
            <ul>
                {CATEGORIES.map((category) => {
                    return (
                        <li key={category.path} className="mb-2">
                            <NavLink
                                to={category.path}
                                className="flex items-center justify-between"
                            >
                                {category.categoryName}
                                <img
                                    src={ARROW_ICON}
                                    alt="arrow icon"
                                    className={clsx('h-4 w-4', {
                                        'rotate-180':
                                            activePath === category.path,
                                    })}
                                />
                            </NavLink>
                            {activePath === category.path && (
                                <ul className="mt-2 pl-8">
                                    {category.subcategories.map(
                                        (subcategory) => (
                                            <li className="mb-2">
                                                <NavLink
                                                    to={subcategory.path}
                                                    className={({ isActive }) =>
                                                        clsx({
                                                            'font-bold':
                                                                isActive,
                                                        })
                                                    }
                                                >
                                                    {subcategory.categoryName}
                                                </NavLink>
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
