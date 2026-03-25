import { Footer } from '@/components/layout/Footer/Footer.tsx';
import { MainMenu } from '@/components/navigation/MainMenu/MainMenu.tsx';
import { Logo } from '@/components/ui/Logo/Logo.tsx';
import { CurrencySelector } from '@/components/ui/CurrencySelector/CurrencySelector.tsx';
import { IconMenu } from '@/components/navigation/IconMenu/IconMenu.tsx';
import { TopBar } from '@/components/layout/TopBar/TopBar.tsx';
import { CategoryMenu } from '@/components/navigation/CategoryMenu/CategoryMenu.tsx';
import { MainContent } from '@/components/layout/MainContent/MainContent.tsx';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
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
                <Outlet />
            </MainContent>
            <Footer />
        </>
    );
};
