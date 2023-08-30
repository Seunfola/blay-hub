import React from 'react';

const Question = (props) => {
    const clazz =
        props.page === props.openPage && props.index === props.openIndex
            ? 'faq_answer_open'
            : 'faq_answer';

    const handleToggle = () => {
        props.toggle();
    };

    return (
        <div className={StyleSheet.questions}>
            <h4
                className="faq_question"
                data-page={props.page}
                data-index={props.index}
                onClick={handleToggle}
            >
                Question: {props.q}
            </h4>
            <h4 className={clazz}>{props.a}</h4>
        </div>
    );
};

export default Question;
