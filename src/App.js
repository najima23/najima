import React, { Component } from 'react';
import Courses from './Courses';
import { addLastname, getUsers, getPosts } from './redux/actions/action';

import { connect } from 'react-redux';

import './App.css';

const mapStateToProps = state => ({
  users: state.users,
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  addLastname: () => dispatch(addLastname('hans')),
  hunululul: () => dispatch(getUsers()),
  getPosts: () => dispatch(getPosts())
})

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: 'Hello world'
    }
  }

  componentDidMount() {
    this.props.hunululul();
    this.props.getPosts();
  }

  render() {
    const { testProp, users, addLastname, posts } = this.props;

    return (
      <div className="App">
        {this.state.message}
        <button onClick={() => addLastname()}>Click Me</button>
        {testProp.map(element => <div>{element.name} - {element.id}</div>)}
        {testProp.reduce((acc, next) => acc + next.id, 0)}
        <Courses hicham={['thuhuhu']} />
        {users.map(user => <div>{user.name}</div>)}
        {posts.map(post => <div>{post.title}</div>)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
