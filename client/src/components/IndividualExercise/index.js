import React from "react";
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';

function IndividualExercise(exercise) {
  const {
    _id,
    name,
    description,
    videoLink,
    workoutCategory,
    imageName
  } = exercise;

  return (

    <div className="col-6 col-lg-4 mb-3 align-items-stretch">
      <Card>
        <Card.Body>
          <Link to={`/exercise/${_id}`}>
            <Card.Img variant="top" src={require(`../../assets/img/${imageName}`)}/>
            <Card.Title>{name}</Card.Title>
          </Link>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">{workoutCategory}</small>
        </Card.Footer> */}
      </Card>
    </div>
  );
}

export default IndividualExercise;