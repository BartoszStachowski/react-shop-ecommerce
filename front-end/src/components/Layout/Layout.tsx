import { Footer } from '@/components/Footer/Footer.tsx';
import { MainMenu } from '@/components/MainMenu/MainMenu.tsx';
import { Logo } from '@/components/Logo/Logo.tsx';
import { CurrencySelector } from '@/components/CurrencySelector/CurrencySelector.tsx';

export const Layout = () => {
    return (
        <>
            <MainMenu />
            <Logo />
            <CurrencySelector />
            <Footer />
        </>
    );
};
