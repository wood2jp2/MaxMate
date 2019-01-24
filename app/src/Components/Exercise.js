import React from 'react'
import ContentEditable from 'react-sane-contenteditable'

 const Exercise = props => (
    <div>
        <div>Exercise: 
            <ContentEditable 
                tagName="span"
                editable={!!props.exercisesEditable}
                maxLength={30}
                multiLine={false}
                content={props.exerciseName}
                onChange={props.onChange}
            />
        </div>
        <div>Sets: 
            <ContentEditable 
                tagName="span"
                editable={!!props.exercisesEditable}
                maxLength={30}
                multiLine={false}
                content={props.sets}
                onChange={props.onChange}
            />
        </div>
        <div>Reps:         
            <ContentEditable 
                tagName="span"
                editable={!!props.exercisesEditable}
                maxLength={30}
                multiLine={false}
                content={props.reps}
                onChange={props.onChange}
            />
        </div>

    </div>
)

export default Exercise