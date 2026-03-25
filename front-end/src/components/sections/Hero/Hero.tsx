import { CenteredContent } from '@/components/ui/CenteredContent/CenteredComponent.tsx';
import { FullWidthButton } from '@/components/ui/FullWidthButton/FullWidthButton.tsx';

export const Hero = ({ heroImage }: { heroImage: string }) => {
    return (
        <div
            style={{ backgroundImage: `url(${heroImage})` }}
            className="h-125 w-full bg-cover"
        >
            <CenteredContent>
                <div className="mt-20 inline-block bg-white/80 px-20 py-12">
                    <h2>Summer sale – up to 70% off</h2>
                    <p className="mt-4 mb-8">Only the best deals</p>
                    <FullWidthButton>Sprawdź produkty</FullWidthButton>
                </div>
            </CenteredContent>
        </div>
    );
};
