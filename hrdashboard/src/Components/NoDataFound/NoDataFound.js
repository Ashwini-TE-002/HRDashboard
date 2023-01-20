import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../NoDataFound/NoDataFound.moudle.css'
import NoRecipeFoundimage from '../../assets/Lotties/noRecepie.json'
import NoWorkoutsFoundimage from '../../assets/Lotties/workout.json'
import NoHabitFoundimage from '../../assets/Lotties/habits.json'
import NoGroceryFoundimage from '../../assets/Lotties/Grocery.json'
import NoDoctorFoundimage from '../../assets/Lotties/noDoctor.json'
import NoThreadsFoundimage from '../../assets/Lotties/noThreads.json'
import NoEventsFoundimage from '../../assets/Lotties/noEvents.json'
import NoBioOptimalData from '../../assets/Lotties/bioOptimalNodata.json'
import noActivePlansInfo from '../../assets/Lotties/noActiveSubscriptionPlan.json'
import Lottie from 'react-lottie'


export default function NoDataFound(type) {

    //Lottie
    let WorkoutLottieData = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };




    const [noDataFoundimage, setNoDataFoundimage] = useState()
    const [noDataFoundLabel, setNoDataFoundLabel] = useState()
    useEffect(() => {
        if (type.type === "workout") {
            // WorkoutLottieData["animationData"] = NoWorkoutsFoundimage
            setNoDataFoundLabel("No Workouts Assigned For Today")
        } else if (type.type === "recipe") {
            // WorkoutLottieData.animationData = NoRecipeFoundimage
            setNoDataFoundLabel("No Recipe To Show")
        } else if (type.type === "habit") {
            // WorkoutLottieData.animationData = NoHabitFoundimage
            setNoDataFoundLabel("No Habits To Show")
        } else if (type.type === "grocery") {
            // WorkoutLottieData["animationData"] = NoGroceryFoundimage
            setNoDataFoundLabel("No Gorcery List To Show")
        } else if (type.type === "thread") {
            // WorkoutLottieData.animationData = NoGroceryFoundimage
            setNoDataFoundLabel("No Threads Related to Search")
        } else if (type.type === "doctor") {
            // WorkoutLottieData.animationData = NoDoctorFoundimage
            setNoDataFoundLabel("No Doctors to Show")
        } else if (type.type === "therapist") {
            // WorkoutLottieData.animationData = NoDoctorFoundimage
            setNoDataFoundLabel("No Therapists to Show")
        } else if (type.type === "events") {
            setNoDataFoundLabel("No Events to Show")
        } else if (type.type === "history") {
            setNoDataFoundLabel("No History Related to Search")
        } else if (type.type === "bioOptimal") {
            setNoDataFoundLabel("No data to show")
        } else if (type.type === "noActivePlans") {
            setNoDataFoundLabel("No active plans to show")
        }
    }, [])
    if (type.type === "workout") {
        WorkoutLottieData.animationData = NoWorkoutsFoundimage
        // setNoDataFoundLabel("No Workouts Assigned For Today")
    } else if (type.type === "recipe") {
        WorkoutLottieData.animationData = NoRecipeFoundimage
        // setNoDataFoundLabel("No Recipe To Show")
    } else if (type.type === "habit") {
        WorkoutLottieData.animationData = NoHabitFoundimage
        // setNoDataFoundLabel("No Habits To Show")
    } else if (type.type === "grocery") {
        WorkoutLottieData["animationData"] = NoGroceryFoundimage
        // setNoDataFoundLabel("No Gorcery List To Show")
    } else if (type.type === "thread") {
        WorkoutLottieData.animationData = NoThreadsFoundimage
        // setNoDataFoundLabel("No Threads Related to Search")
    } else if (type.type === "doctor") {
        WorkoutLottieData.animationData = NoDoctorFoundimage
        // setNoDataFoundLabel("No Doctors to Show")
    } else if (type.type === "therapist") {
        WorkoutLottieData.animationData = NoDoctorFoundimage
        // setNoDataFoundLabel("No Therapists to Show")
    } else if (type.type === "events") {
        WorkoutLottieData.animationData = NoEventsFoundimage
    } else if (type.type === "history") {
        WorkoutLottieData.animationData = NoThreadsFoundimage
        // setNoDataFoundLabel("No Threads Related to Search")
    } else if (type.type === "bioOptimal") {
        WorkoutLottieData.animationData = NoBioOptimalData
    } else if (type.type === "noActivePlans") {
        WorkoutLottieData.animationData = noActivePlansInfo
    }

    return (
        <section>
            <Container>
                <Row id='nodata-found-er'>
                    <Col className='no-data-found-wrapper'>
                        <div className='d-flex justify-content-center no-data-found-img'>
                            {/* <img src={noDataFoundimage} width="180px" alt="/"/> */}

                            <Lottie options={WorkoutLottieData}
                                height={400}
                                weight={400} />
                        </div>
                        <div className='text-center mt-3'>
                            <h5>{noDataFoundLabel}</h5>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
