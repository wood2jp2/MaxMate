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
                onChange={(e, value) => props.onChange(e, value, props.id, "exerciseName")}
            />
        </div>
        <div>Sets: 
            <ContentEditable 
                tagName="span"
                editable={!!props.exercisesEditable}
                maxLength={2}
                multiLine={false}
                content={props.sets.toString()}
                onChange={(e, value) => props.onChange(e, value, props.id, "sets")}
            />
        </div>
        <div>Reps:         
            <ContentEditable 
                tagName="span"
                editable={!!props.exercisesEditable}
                maxLength={2}
                multiLine={false}
                content={props.reps.toString()}
                onChange={(e, value) => props.onChange(e, value, props.id, "reps")}
            />
        </div>

    </div>
)

export default Exercise