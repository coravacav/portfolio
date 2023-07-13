import Helix from '@/lib/helix';
import { pageWidth } from '@/styles/pageWidth';
import clsx from 'clsx';

export default function ContactPage() {
    return (
        <div className={clsx('flex flex-col text-white w-full mx-auto', pageWidth)}>
            <h1 className="text-4xl font-bold">Contact</h1>

            <Helix>
                <p className="mt-3">This is the contact page</p>
            </Helix>
        </div>
    );
}
