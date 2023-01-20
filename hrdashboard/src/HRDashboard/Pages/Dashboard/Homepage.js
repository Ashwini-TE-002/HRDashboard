import React, { useEffect, useState } from "react";
import SideBar from "../../Navigaction/SideBar";
import { Container, Row, Col } from 'react-bootstrap'
// import DateTemplate from "../Dashboard/DateTemplate/DateTemplate";
import FirstComponent from "./FirstComponent/FirstComponent";
import TotalEmp from "./PICharts/TotalEmployee/TotalEmp";
import CompanyDemographics from "./PICharts/CompanyDemographics/CompanyDemographics";
import HappinessIndex from "./Happinessindex/HappinessIndex";
import TopWeight from "./TopWeightLoss/TopWeight";
import MoodMeter from "./MoodMeter/MoodMeter";
import './Homepage.moudle.css'
import ResponseRate from "./Response Rate/ResponseRate";
import EngagementScore from './Engagement score/EngagementScore'
import EngagementTrendingscore from "./Engagement Trending score/EngagementTrendingscore";
import AverageLifeMetabolicAge from "./AverageLife& MetabolicAge/AverageLifeMetabolicAge";
import StressManagement from "./StressManagement/StressManagement";
import HrLeaderboard from "./Hr_Leaderboard/HrLeaderboard"
import RightNavBar from "../../Navigaction/RightNavBar";
import '../../HRDashboard Responsiveness/HrResponsiveness.css'
import Header from "../../Header/Header";
import NoDataFound from "../../../Components/NoDataFound/NoDataFound";

export default function Homepage() {


  const [complianceScore, setComplianceScore] = useState();
  const [topWeightLossData, setTopWeightLossData] = useState();
  const [teamSubscriptionData, setTeamSubscriptionData] = useState();
  const [demography, setDemography] = useState();
  const [happinessIndex, setHappinessIndex] = useState();
  const [teamMoodData, setTeamMoodData] = useState();
  const [teamResponse, setTeamResponse] = useState();
  const [teamInfo, setTeamInfo] = useState();
  const [dashboardHTMLData, setDashboardHTMLData] = useState();

  useEffect(() => {



    // axios({
    //   method: "get",
    //   url: "",
    // }).then(function (resp) {

    const resp = {

      "success": "true",

      "data": {
        "showStatistics": true,

        "compliance_score": "60",

        "top_weight_loss_details": {

          "weight_loss": "0",

          "weight_loss_percentage": "20",

          "weight_percentage_status": "increased"

        },

        "team_happiness_details": {

          "happiness_value": "7.4",

          "happiness_percentage": "0.2",

          "happiness_status": "increased",

          "total_happy_emp": "75",

          "total_unhappy_emp": "25"

        },

        "company_demography": {

          "male": 75,

          "female": 25,

          "male_percentage": 75,

          "female_percentage": 25

        },

        "team_info": {

          "team_subscription_data": {

            "team_subscription_count": 60,

            "team_unsubscription_count": 40,

            "team_subscription_percent": 75,

            "team_unsubscription_percent": 35

          },

          "team_response": {

            "response": "80",

            "response_percentage": "2",

            "response_status": "increased",

            "total_team_count": 150,

            "total_responded_count": 115

          },

          "team_engagement": {

            "engagement": "80",

            "engagement_percentage": "2",

            "engagement_status": "increased",

            "engagement_trending_score": [{

              "name": "Jan",

              "value": 7.3

            }, {

              "name": "Feb",

              "value": 7.8

            }, {

              "name": "Mar",

              "value": 8

            }, {

              "name": "Apr",

              "value": 10

            }]

          },

          "team_mood_data": {

            "team_mood_percentage": "80",

            "team_mood": "Happy"

          },

          "team_life_expectancy": {

            "data": ["metabolic age", "life expectancy"],

            "value": [5, 10, 15, 20, 25]

          },

          "team_stress_data": {

            "low_stress_level": 70,

            "medium_stress_level": 20,

            "high_stress_level": 30

          },

          "team_compliance": {

            "top_compliance": 80,

            "low_compliance": 20

          },

          "team_enagagement_data": [{

            "team_name": "UIUX Designer",

            "engagement_percent": 80

          }, {

            "team_name": "Frontend Developer",

            "engagement_percent": 50

          }, {

            "team_name": "Backend Developer",

            "engagement_percent": 80

          }]

        },

        "team_leaderboard": [{

          "team_name": "DevOps",

          "points": 1000

        }, {

          "team_name": "Backtend developer",

          "points": 1200

        }, {

          "team_name": "frontend developer",

          "points": 1500

        }]

      }

    }
    const responseData = resp.data;
    const setDashboardHTML = <Container className="main-container  mt-5">
      {
        (responseData.showStatistics === true) ?
          <>
            <section className="mb-3">
              {/* <DateTemplate /> */}
              <div>
                <FirstComponent complianceScore={responseData.compliance_score} />
              </div>
              <Row className="TotaleEmployees-Row">
                <Col className="col-lg-3 col-md-4 totalEmpCol  p-0">
                  <TotalEmp teamSubscriptionData={responseData.team_info.team_subscription_data} />
                </Col>
                <Col className="col-lg-3 col-md-4 p-0 ml-3 companydemography-col">
                  <CompanyDemographics demography={responseData.company_demography} />
                </Col>
                <Col className="secondCol">
                  <TopWeight topWeightLossData={responseData.top_weight_loss_details} />
                  <HappinessIndex happinessIndex={responseData.team_happiness_details} />
                </Col>
              </Row>
            </section>
            <section className="mt-3">
              <Row>
                <Col className="col-lg-5 col-md-12 moodmeter-Col p-0">
                  <MoodMeter teamMoodData={responseData.team_info.team_mood_data} />
                  <Col className="p-0 col-lg-12 col-md-12 p-0 EngagementScoreCol">
                    <div className="flex responsivenessRateWrapperr">
                      <ResponseRate teamResponse={responseData.team_info.team_response} />
                      <EngagementScore teamEngagement={responseData.team_info.team_engagement} />
                    </div>
                  </Col>
                </Col>
                <Col className="Engagement-col col-md-11 col-lg-7">
                  <EngagementTrendingscore teamEngagementScore={responseData.team_info.team_engagement} />
                </Col>
              </Row>
            </section>

            <section className="mt-3">
              <Row className="AverageLifeMetabolicAge-Row">
                <Col className="col-lg-5 col-md-11 p-0 AverageLifeMetabolicAge-Col">
                  <AverageLifeMetabolicAge />
                </Col>
                <Col className="col-lg-6 col-md-12 StressManagement-col">
                  <StressManagement stressData={responseData.team_info.team_stress_data} />
                </Col>
              </Row>
              <Row>
                <Col className="mt-3 col-lg-11 p-0 col-md-12 HrLeaderboard-Col">
                  <HrLeaderboard leaderboardData={responseData.team_leaderboard} />
                </Col>
              </Row>
            </section>

            <RightNavBar rightSideData={responseData.team_info} />
          </>
          : <div className='pt-2 text-center hr-nodata-wrapper'><NoDataFound type="bioOptimal" /><div className='blink'>Atleast three users has to complete the survey to show the statistics</div></div>
      }
    </Container >

    setDashboardHTMLData(setDashboardHTML)

    localStorage.setItem('showStatistics', responseData.showStatistics);

    // });
  }, [])


  return (
    <>
      <Header />

      <main className="homepageDashboard flex">
        <SideBar />
        {dashboardHTMLData}
      </main >

    </>
  );
};

