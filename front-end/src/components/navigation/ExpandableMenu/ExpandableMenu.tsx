import { CATEGORIES } from '@/constants/categories.ts';
import ARROW_ICON from '@/assets/arrow.svg';
import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';

const PATH_TO_GENDER_NAME = {
    men: 'Men',
    women: 'Women',
    children: 'Children',
};

export const ExpandableMenu = () => {
    const params = useParams<{
        gender: string;
        category: string;
    }>();
    const activePath = params.category;

    return (
        <div className="mt-4 w-44 pl-4">
            <p className="mb-4 font-bold">
                {params.gender &&
                    PATH_TO_GENDER_NAME[
                        params.gender as keyof typeof PATH_TO_GENDER_NAME
                    ]}
            </p>
            <ul>
                {CATEGORIES.map((category) => {
                    return (
                        <li key={category.path} className="mb-2">
                            <NavLink
                                to={`/${params.gender}/${category.path}`}
                                className={({ isActive }) =>
                                    clsx('flex items-center justify-between', {
                                        'font-bold': isActive,
                                    })
                                }
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
                                                    to={`/${params.gender}/${params.category}/${subcategory.path}`}
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
