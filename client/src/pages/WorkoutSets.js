import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ALL_EXERCISES, QUERY_USER, QUERY_EXERCISE } from '../utils/queries';
import { Redirect, useParams } from 'react-router-dom';
// import { mapReduce } from '../../../server/models/User';



  function WorkoutSets() {
    // const {description} = useParams();
    const query_string = window.location.search;
    const urlParams = new URLSearchParams(query_string)
    const workout_id = urlParams.get('workout_id')
    console.log(" i am at workout id")
  
    console.log(workout_id)
    const { loading, data } = useQuery(QUERY_EXERCISE,
      {
        variables: {_id: workout_id}
      });
      console.log(data)
    const exercise = data?.exercise || [];
    // const { data: userData } = useQuery(QUERY_USER);
    console.log("i am at line 16 query")
    console.log(loading)
    console.log(exercise.trackReps)
    const [formState, setFormState] = useState({time: 0, weight: 0, reps: 0});
    const [workouts, setWorkouts] = useState([])
    const [count, setCount] = useState(0)
    
    console.log("here")
    const forFunction = () =>{
        setCount(count+1)
        setWorkouts([...workouts,{time:formState.time,weight:formState.weight, reps:formState.reps}])
    }


      useEffect(() => {
        document.title = formState.sets;
      });
      console.log("i am at current workout and it is:")
      // console.log(currentWorkout)
      return (

        <div key="div-container-dates" className="single-exercise ">

          <div key="exercise" className="d-flex justify-content-center">
            Exercise: {exercise.name}
          </div>

        {exercise.trackTime? (
          <div key="div-container-timedata" className="d-flex justify-content-center"> Time (Minutes)
          <input  key="time"  className='form-input'  
                placeholder='Number of Minutes'
                name='time'
                type='number'             
                id='time'
                onChange={(event)=>{
                    const { name, value } = event.target;
    
                    setFormState({
                      ...formState,
                      [name]: value,
                    });
                }}>
                
            </input>
            </div>
        ) : null}

          {exercise.trackWeight? (
            <div key="div-container-weight" className="d-flex justify-content-center"> Weight (lbs)
            <input  key="weight"  className='form-input'  
                placeholder='weight'
                name='weight'
                type='number'             
                id='weight'
                onChange={(event)=>{
                    const { name, value } = event.target;
    
                    setFormState({
                      ...formState,
                      [name]: value,
                    });
                }}>
                
            </input>
            </div>
          ): null}
            
          {exercise.trackReps? (
 <div key="div-container-reps" className="d-flex justify-content-center"> Reps (Number)
            <input  key="reps"  className='form-input'  
                placeholder='reps'
                name='reps'
                type='number'             
                id='reps'
                onChange={(event)=>{
                    const { name, value } = event.target;
    
                    setFormState({
                      ...formState,
                      [name]: value,
                    });
                }}>
                
            </input>
            </div>
          ): null} 
           
            <div key="div-container-button" className="d-flex justify-content-center">
            <button  onClick={()=>{
            forFunction()
            setCount(count+1)
            }}> 
                Submit Set
            </button>
            </div>
            {
            workouts.map(workout=>{
                console.log("i am at workouts")
                console.log(workouts)
          return (<div key="div-container-set">
              <div key="set-div" className="d-flex justify-content-center">Set</div>
              <div key="time-div" className="d-flex justify-content-center">Time: {workout.time} minutes</div>
              <div key="weight-div" className="d-flex justify-content-center">Weight: {workout.weight} lbs</div>
              <div key="reps-div" className="d-flex justify-content-center">Number of Reps: {workout.reps}</div>
              <br></br>
              </div>)
            })}

            


        </div>


      );
}

export default WorkoutSets;