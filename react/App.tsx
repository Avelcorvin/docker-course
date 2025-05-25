import React, {  useCallback, useEffect, useState } from 'react'
import { Registration } from './pages/registration.tsx';
import { Header } from './header/index.tsx';


export const App = () => {
    return (<div>
            <Header/>
            <Registration />
            </div>)
}

