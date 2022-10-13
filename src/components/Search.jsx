import { Component } from 'react'

class Search extends Component {
  state = {
    search: '',
    type: 'all',
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type)
      },
    )
  }

  render() {
    return (
      <div className="row">
        <div className="input-field" style={{ display: 'flex' }}>
          <input
            id="email_inline"
            type="search"
            className="validate"
            placeholder="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn #607d8b blue-grey"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
        <div className="check-box">
          <p>
            <label>
              <input
                className="with-gap"
                name="group3"
                type="radio"
                data-type="all"
                onChange={this.handleFilter}
                checked={this.state.type === 'all'}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="group3"
                type="radio"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === 'movie'}
              />
              <span>Movie Only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="group3"
                type="radio"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === 'series'}
              />
              <span>Series Only</span>
            </label>
          </p>
        </div>
      </div>
    )
  }
}

export default Search
