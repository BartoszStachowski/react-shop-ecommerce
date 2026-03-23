import ARROW_ICON from '@/assets/arrow.svg';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const Breadcrumbs = () => {
    const breadcrumbs = [
        {
            categoryName: 'Women',
            path: 'woman',
        },
        {
            categoryName: 'Clothing',
            path: 'clothing',
        },
        {
            categoryName: 'Sweaters',
            path: 'sweaters',
        },
    ];
    return (
        <ul className="mt-4 mb-8 flex items-center justify-start gap-2">
            {breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.path} className="last:[&_img]:hidden">
                    <NavLink
                        to={breadcrumb.path}
                        className={({ isActive }) =>
                            clsx('flex text-xs uppercase', {
                                'font-bold': isActive,
                            })
                        }
                    >
                        {breadcrumb.categoryName}
                        <img
                            src={ARROW_ICON}
                            alt="arrow icon"
                            className="ml-2 h-4 w-4 -rotate-90"
                        />
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};
