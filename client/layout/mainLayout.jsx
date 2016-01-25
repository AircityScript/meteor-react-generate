import React from 'react';
import AppBar from '../component/appBar';

const MainLayout = ({content}) => (
    <div>
      <header>
        <AppBar/>
      </header>
      <main>
        {content()}
      </main>
    </div>
);

export default MainLayout;
