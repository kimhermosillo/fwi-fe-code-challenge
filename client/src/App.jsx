import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import Header from './Header/Header';
import PlayerTable from './PlayerTable/PlayerTable';
import PlayerForm from './Forms/PlayerForm';
import { useUpdatePlayer } from './Forms/useUpdatePlayer';

const App = () => {
  const { state } = useLocation();
  const { handleCreate, handleUpdate, handleDelete } = useUpdatePlayer();

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/add-player">
          <PlayerForm text={'Create new player:'} onSubmit={handleCreate} />
        </Route>
        <Route exact path="/player">
          <PlayerForm
            text={'Update player:'}
            initialValues={state}
            onSubmit={handleUpdate}
            onDelete={handleDelete}
          />
        </Route>
        <Route exact path="/">
          <PlayerTable />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
