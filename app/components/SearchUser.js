var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    GitHubUser.getByUsername(this.refs.username.value)
      .then(function(response) {
        this.props.updateUser(response)
      }.bind(this));

    GitHubUser.getReposByUsername(this.refs.username.value)
      .then(function(response) {
        this.props.updateRepos(response)
      }.bind(this));

  },
  render: function() {
    return (
      <div>
      <h1>Componente teste</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input type="text" ref="username" placeholder="Ex: edumerckx"/>
        <button type="submit">Buscar</button>
      </form>
      </div>
    )
  }
});

module.exports = SearchUser;
