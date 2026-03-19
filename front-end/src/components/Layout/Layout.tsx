import { Footer } from '@/components/Footer/Footer.tsx';
import { MainMenu } from '@/components/MainMenu/MainMenu.tsx';
import { Logo } from '@/components/Logo/Logo.tsx';
import { CurrencySelector } from '@/components/CurrencySelector/CurrencySelector.tsx';
import { IconMenu } from '@/components/IconMenu/IconMenu.tsx';
import { TopBar } from '@/components/TopBar/TopBar.tsx';
import { CategoryMenu } from '@/components/CategoryMenu/CategoryMenu.tsx';

export const Layout = () => {
    return (
        <>
            <TopBar>
                <MainMenu />
                <Logo />
                <div className="flex items-center justify-end">
                    <CurrencySelector />
                    <IconMenu />
                </div>
            </TopBar>
            <CategoryMenu />
            <Footer />
        </>
    );
};
