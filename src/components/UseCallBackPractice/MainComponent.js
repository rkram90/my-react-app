import React, { useState } from 'react';
import { useCallback } from 'react';
import CounterComponent from './CounterComponent';
import ButtonComponent from './ButtonComponent';

function MainComponent() {

    const [teacher, setTeacher] = useState(5);
    const [student, setStudent] = useState(10);

    const incrementTeacher = useCallback(() => {
        setTeacher(teacher + 5);
    }, [teacher]);

    const increamentStudent = useCallback(() => {
        setStudent(student + 10);
    }, [student]);

    return (
        <div>
            <h1>useCallBack Practice</h1>
            <hr />
            <CounterComponent text="Teachers" count={teacher} />
            <ButtonComponent handleClick={incrementTeacher}>Increment Teacher</ButtonComponent>
            <CounterComponent text="Student" count={student} />
            <ButtonComponent handleClick={increamentStudent}>Increment Student</ButtonComponent>
        </div>
    );
}

export default React.memo(MainComponent);