import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursePage extends React.Component {
    state = {
        course: {
            title: ""
        }
    };

    handleChange = event => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.actions.createCourse(this.state.course);

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h2>Courses</h2>
                <h3>Add Courses</h3>
                <input type="text" onChange={this.handleChange}
                    value={this.state.course.title}
                />
                <input type="submit" value="Save" />
                {this.props.courses.map(course => (

                    <div key={course.title}>
                        {course.title}
                    </div>
                ))}
            </form>
        );
    }
}

CoursePage.PropTypes = {
    actions: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}
function mapDisptachToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDisptachToProps)(CoursePage);