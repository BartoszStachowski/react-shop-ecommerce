import { CATEGORIES } from '@/constants/categories.ts';
import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';

export const CategoryMenu = () => {
    const params = useParams();
    console.log(params);

    return (
        <div className="bg-theme-main w-full">
            <ul className="mx-auto my-0 flex w-full max-w-400 gap-4 p-4">
                {CATEGORIES.map((category) => (
                    <li key={category.categoryName}>
                        <NavLink
                            to={`${params.gender}/${category.path}`}
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
