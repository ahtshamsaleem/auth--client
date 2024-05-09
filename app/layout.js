'use client';
import { Suspense } from 'react';

import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
            <Suspense>{children}</Suspense>
        </body>
        </html>
    );
}
