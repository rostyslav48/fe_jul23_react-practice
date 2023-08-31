import cn from 'classnames';

export const Filters = ({
  users,
  selectedUser,
  changeSelectedUser,
  searchQuery,
  changeSearchQuery,
}) => {
  const resetAllFilters = () => {
    changeSelectedUser(0);
    changeSearchQuery('');
  };

  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>

        <p className="panel-tabs has-text-weight-bold">
          <a
            data-cy="FilterAllUsers"
            href="#/"
            className={cn({
              'is-active': !selectedUser,
            })}
            onClick={() => changeSelectedUser(0)}
          >
            All
          </a>

          {users.map(user => (
            <a
              key={user.id}
              data-cy="FilterUser"
              href="#/"
              className={cn({
                'is-active': user.id === selectedUser,
              })}
              onClick={() => changeSelectedUser(user.id)}
            >
              {user.name}
            </a>
          ))

      }
        </p>

        <div className="panel-block">
          <p className="control has-icons-left has-icons-right">
            <input
              data-cy="SearchField"
              type="text"
              className="input"
              placeholder="Search"
              value={searchQuery}
              onChange={event => changeSearchQuery(event.target.value)}
            />

            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>

            {Boolean(searchQuery) && (
            <span className="icon is-right">
              <button
                data-cy="ClearButton"
                type="button"
                className="delete"
                onClick={() => changeSearchQuery('')}
              />
            </span>
            )}
          </p>
        </div>

        <div className="panel-block is-flex-wrap-wrap">
          <a
            href="#/"
            data-cy="AllCategories"
            className="button is-success mr-6 is-outlined"
          >
            All
          </a>

          <a
            data-cy="Category"
            className="button mr-2 my-1 is-info"
            href="#/"
          >
            Category 1
          </a>

          <a
            data-cy="Category"
            className="button mr-2 my-1"
            href="#/"
          >
            Category 2
          </a>

          <a
            data-cy="Category"
            className="button mr-2 my-1 is-info"
            href="#/"
          >
            Category 3
          </a>
          <a
            data-cy="Category"
            className="button mr-2 my-1"
            href="#/"
          >
            Category 4
          </a>
        </div>

        <div className="panel-block">
          <a
            data-cy="ResetAllButton"
            href="#/"
            className="button is-link is-outlined is-fullwidth"
            onClick={resetAllFilters}
          >
            Reset all filters
          </a>
        </div>
      </nav>
    </div>
  );
};
