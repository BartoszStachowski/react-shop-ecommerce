import { CartProductList } from '@/components/cart/CartProductList/CartProductList.tsx';
import { FlexContainer } from '@/components/ui/FlexContainer/FlexContainer.tsx';
import { CartSummary } from '@/components/cart/CartSummary/CartSummary.tsx';
import { useCart } from '@/hooks/context/useCart.ts';

export const Cart = () => {
    const { cartItems } = useCart();
    return (
        <FlexContainer>
            <CartProductList products={cartItems} />
            <CartSummary products={cartItems} />
        </FlexContainer>
    );
};
