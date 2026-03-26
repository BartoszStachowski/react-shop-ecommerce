import { Footer } from '@/components/layout/Footer/Footer.tsx';
import { MainMenu } from '@/components/navigation/MainMenu/MainMenu.tsx';
import { Logo } from '@/components/ui/Logo/Logo.tsx';
import { CurrencySelector } from '@/components/ui/CurrencySelector/CurrencySelector.tsx';
import { IconMenu } from '@/components/navigation/IconMenu/IconMenu.tsx';
import { TopBar } from '@/components/layout/TopBar/TopBar.tsx';
import { CategoryMenu } from '@/components/navigation/CategoryMenu/CategoryMenu.tsx';
import { MainContent } from '@/components/layout/MainContent/MainContent.tsx';
import { Outlet } from 'react-router-dom';
import { CurrencyContext } from '@/contexts/CurrencyContext.ts';
import { useState } from 'react';
import { CURRENCIES } from '@/constants/currencies.ts';
import type { CurrencyType } from '@/types/product.ts';

export const Layout = () => {
    const [currency, setCurrency] = useState<CurrencyType>(
        localStorage['selected_currency'] || CURRENCIES.PLN
    );

    return (
        <>
            <MainContent>
                <CurrencyContext.Provider value={{ currency, setCurrency }}>
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
                </CurrencyContext.Provider>
            </MainContent>
            <Footer />
        </>
    );
};
