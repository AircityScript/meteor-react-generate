import React from 'react';

const MainLayout = ({content}) => (
    <div>
      <main>
        {content()}
      </main>
    </div>
);

export default MainLayout;
