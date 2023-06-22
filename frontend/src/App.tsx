import GeoMap from './GeoMap';
import * as React from 'react';

const App = () => {
  return (
    <div className="App">
      <GeoMap />
      <div className="description">
        <p className="mt-6 space-y-7 text-sm text-zinc-600 dark:text-zinc-400">
          This is a clone of a ridesharing app made by following the guide here: 
          <a
            className="text-blue-500 hover:text-blue-600 transition-colors"
            href="https://jurajmajerik.com"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;jurajmajerik.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;