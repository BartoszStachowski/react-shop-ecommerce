import ARROW_ICON from '@/assets/arrow.svg';
import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { CATEGORIES, GENDERS } from '@/constants/categories.ts';

type BreadcrumbItem = {
    categoryName: string;
    path: string;
};

export const Breadcrumbs = () => {
    const { gender, category, subcategory } = useParams();

    const foundGender = GENDERS.find((g) => g.path === gender);
    const foundCategory = CATEGORIES.find((c) => c.path === category);
    const foundSubcategory = foundCategory?.subcategories.find(
        (sc) => sc.path === subcategory
    );

    const breadcrumbs: BreadcrumbItem[] = [
        foundGender && {
            categoryName: foundGender.categoryName,
            path: `/${foundGender.path}`,
        },
        foundGender &&
            foundCategory && {
                categoryName: foundCategory.categoryName,
                path: `/${foundGender.path}/${foundCategory.path}`,
            },
        foundGender &&
            foundCategory &&
            foundSubcategory && {
                categoryName: foundSubcategory.categoryName,
                path: `/${foundGender.path}/${foundCategory.path}/${foundSubcategory.path}`,
            },
    ].filter(Boolean) as BreadcrumbItem[]; // removes all falsy values

    return (
        <ul className="mt-4 mb-8 flex items-center justify-start gap-2">
            {breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.path} className="last:[&_img]:hidden">
                    <NavLink
                        end
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
