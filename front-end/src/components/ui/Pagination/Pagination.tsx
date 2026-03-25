import { NavLink } from 'react-router-dom';

interface PaginationProps {
    numberOfPages: number;
}

export const Pagination = ({ numberOfPages }: PaginationProps) => {
    const pages = Array(numberOfPages).fill(null);

    return (
        <ul className="my-8 flex items-center justify-center gap-4">
            {pages.map((_page, index) => (
                <li key={index}>
                    <NavLink to="/" className="cursor-pointer">
                        {index + 1}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};
