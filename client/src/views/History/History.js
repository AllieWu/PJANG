import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const History = () => {
    const { user, isAuthenticated } = useAuth0();
    console.log(isAuthenticated);
    return (
        <div>
            <h>User Info</h>
            {JSON.stringify(user, null, 2)}
        </div>
    )
}

export default History;