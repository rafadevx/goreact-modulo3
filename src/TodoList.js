import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
  </ul>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(TodoList);
