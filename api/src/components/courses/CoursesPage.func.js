import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCourse } from "../../redux/actions/courseActions";

function CoursePage() {
    const dispatch = useDispatch;
    const courses = useSelector((state) => state.courses);
    const [course, setCourse] = useState({
        title: "",
    });

    const handleChange = event => {
        setCourse({ ...course, title: event.target.value });

    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(createCourse(course))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Courses</h2>
            <h3>Add Courses</h3>
            <input type="text" onChange={handleChange}
                value={course.title}
            />
            <input type="submit" value="Save" />
            {courses.map(course => (

                <div key={course.title}>
                    {course.title}
                </div>
            ))}
        </form>
    );
}



export default CoursePage;