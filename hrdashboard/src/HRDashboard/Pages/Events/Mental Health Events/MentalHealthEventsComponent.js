import React from 'react'
import { BiBrain } from 'react-icons/bi'
import '../Fitness Events/FitnessEventComponent/FitnessEvents.moudle.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { AiOutlineRise } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';


export default function MentalHealthEvents(props) {

    const percentage = props.data.value;;

    const openNewPage = useNavigate();
    function openMentalHealthEvents(e) {
        e.preventDefault();
        let openTab = "/MentalHealthEvents"
        openNewPage(openTab)
    }

    return (
        <div className='fitnessEvents-Div' onClick={openMentalHealthEvents}>
            <div className='fitness-box-parent flex justify-content-between'>
                <div className='hrDashboard-HeaddingTxt'>
                    <h6>Mental Health Events</h6>
                </div>
                {/* icon-box */}
                <div className='fitness-iconBox'>
                    <BiBrain size={30} />
                </div>
            </div>
            {/* content */}
            <div>
                <div className='Fitness_circularBar'>
                    <CircularProgressbar value={percentage} text={percentage}
                        styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            textSize: '27px',
                            pathTransitionDuration: 0.5,
                            pathColor: `#08BE80, ${percentage / 100})`,
                            textColor: '#08BE80',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#08BE80',
                        })}
                    />
                </div>
                <div className='text-center mt-4'>
                    {

                        (props.data.value_status === "increased") ?
                            <AiOutlineRise size={23} color="#00DEA3" className="mr-1" />
                            :
                            <AiOutlineRise size={23} color="#00DEA3" className="mr-1" />
                    }
                    <span className='energy_score'>{props.data.value_percent}</span>
                    <span>Since last month </span>
                </div>
            </div>
            <div className='flex justify-content-end mt-2'>
                <button className='fitness-viewBtn'>View details <IoIosArrowForward /></button>
            </div>
        </div>
    )
}
