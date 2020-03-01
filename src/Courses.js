import React, { Component } from "react";
import { getPics } from "./redux/actions/action";

import { connect } from "react-redux";

import "./App.css";

const mapStateToProps = state => ({
  courses: state.courses,
  pics: state.pics
});

const mapDispatchToProps = dispatch => ({
  getPics: () => dispatch(getPics())
});

class Courses extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hello Courses"
    };
  }

  render() {
    const { courses, hicham, pics } = this.props;
    const { message } = this.state;

    return (
      <div className="courses">
        {message} - {hicham}
        <button onClick={() => this.props.getPics()}>Load Pictures</button>
        {courses.map(course => (
          <div>
            {course.name} - {course.length}
          </div>
        ))}
        <ul>
          {pics.map(pic => (
            <li>
              <img src={pic.url} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
