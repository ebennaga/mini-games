/* eslint-disable no-unused-vars */
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

/** Example on how to extend the built-in session types */
declare module 'next-auth' {
    // eslint-disable-next-line no-shadow
    interface Session {
        /** This is an example. You can find me in types/next-auth.d.ts */
        foo: string;
    }
}

/** Example on how to extend the built-in types for JWT */
declare module 'next-auth/jwt' {
    // eslint-disable-next-line no-shadow
    interface JWT {
        /** This is an example. You can find me in types/next-auth.d.ts */
        bar: number;
    }
}
