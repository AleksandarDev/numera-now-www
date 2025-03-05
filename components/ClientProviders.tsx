'use client';

import { NotificationsContainer } from '@signalco/ui-notifications';
import { PropsWithChildren } from 'react';

export function ClientProviders({ children }: PropsWithChildren) {
    return (
        <>
            {/*  ...other provider components */}
            <NotificationsContainer />
            {children}
        </>
    )
}