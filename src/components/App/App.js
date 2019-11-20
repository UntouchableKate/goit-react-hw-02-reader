// Core
import React from 'react';

// Components
import Reader from '../Reader';

// server
import publications from '../../server/publications.json';

const App = () => <Reader publications={publications} />;

export default App;
