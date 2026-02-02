'use client';

import { NotificationsContainer } from '@signalco/ui-notifications';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './ThemeProvider';

export function ClientProviders({ children }: PropsWithChildren) {
    return (
        <ThemeProvider>
            {/*  ...other provider components */}
            <NotificationsContainer />
            {children}
        </ThemeProvider>
    )
}