import ARROW_ICON from '@/assets/arrow.svg';
import { useState } from 'react';
import clsx from 'clsx';

interface Item {
    title: string;
    content: string;
}

interface Props {
    items: Item[];
}

export const Accordion = ({ items }: Props) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    return (
        <ul>
            {items.map((item, index) => (
                <li onClick={() => setActiveItemIndex(index)}>
                    <div className="flex cursor-pointer items-center justify-between border-b py-4 font-bold">
                        <p className="mt-2">{item.title}</p>
                        <img
                            src={ARROW_ICON}
                            alt="arrow icon"
                            className={clsx({
                                'rotate-180': activeItemIndex === index,
                            })}
                        />
                    </div>
                    {activeItemIndex === index && (
                        <p className="mt-2">{item.content}</p>
                    )}
                </li>
            ))}
        </ul>
    );
};
