import React, { FormEvent, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <ul>
          {data.map((item, index) => (
            <li style={{ listStyleType: 'square' }} key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepositoriesList;
