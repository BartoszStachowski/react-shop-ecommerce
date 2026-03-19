import { Footer } from '@/components/Footer/Footer.tsx';
import { MainMenu } from '@/components/MainMenu/MainMenu.tsx';
import { Logo } from '@/components/Logo/Logo.tsx';
import { CurrencySelector } from '@/components/CurrencySelector/CurrencySelector.tsx';
import { IconMenu } from '@/components/IconMenu/IconMenu.tsx';
import { TopBar } from '@/components/TopBar/TopBar.tsx';
import { CategoryMenu } from '@/components/CategoryMenu/CategoryMenu.tsx';
import { MainContent } from '@/components/MainContent/MainContent.tsx';
import type { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <MainContent>
                <TopBar>
                    <MainMenu />
                    <Logo />
                    <div className="flex items-center justify-end">
                        <CurrencySelector />
                        <IconMenu />
                    </div>
                </TopBar>
                <CategoryMenu />
                {children}
            </MainContent>
            <Footer />
        </>
    );
};
