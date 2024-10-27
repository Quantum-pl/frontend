'use client';
import { makeStore } from '@/lib/store';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';


const App = ({children}: { children: ReactNode }) => {
  const store = makeStore();

  return (
    <Provider store={store}>{children}</Provider>
  );
};

export default App;