'use client';

import { useState } from 'react';

let plugins = require('../assets/plugins.json');

plugins = plugins.items;
plugins = plugins.map(v => {
  return {
    name: v.manifest.name_for_human,
    description: v.manifest.description_for_human,
    logo: v.manifest.logo_url,
  };
});

export default function Home() {
  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    },
    search: {
      marginBottom: '20px',
    },
    pluginContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    pluginCard: {
      width: '200px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      margin: '10px',
      padding: '10px',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
  };

  const [search, setSearch] = useState('');

  return (
    <div style={style.container}>
      <h1>ChatGPT Plugins </h1>
      <h3>total: {plugins.length}</h3>
      <div style={style.search}>
        <input type="text" placeholder="Search for plugins" value={search} onChange={e=>setSearch(e.target.value)} />
        <button>Search</button>
      </div>
      <div style={style.pluginContainer}>
        {plugins.filter(v=>{
          return v.name.toLowerCase().includes(search.toLowerCase()) || v.description.toLowerCase().includes(search.toLowerCase());
        }).map((plugin, index) => (
          <div key={index} style={style.pluginCard}>
            <img width={128} height={128} src={plugin.logo} alt={plugin.name} style={style.image} layout="responsive"/>
            <h2>{plugin.name}</h2>
            <p>{plugin.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
