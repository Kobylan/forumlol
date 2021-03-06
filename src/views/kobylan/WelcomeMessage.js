import React from "react"
import { Card, CardBody } from "reactstrap"
import { Award } from "react-feather"

import decorLeft from "../../assets/img/elements/decore-left.png"
import decorRight from "../../assets/img/elements/decore-right.png"


class WelcomeMessage extends React.Component {
  render() {
    return (
      <Card className="bg-analytics text-black sales-card">
        <CardBody className="text-center">
          <img src={decorLeft} alt="card-img-left" className="img-left" />
          <img src={decorRight} alt="card-img-right" className="img-right" />
          <div className="avatar avatar-xl bg-primary shadow avatar-dashboard mt-0">
            <div className="avatar-content">
              <Award className="text-white" size={28} />
            </div>
          </div>
          <div className="award-info text-center">
            <h1 className="mb-2 text-black">Welcome User,</h1>
            <p className="m-auto mb-0 w-75 text-black">
              Coch Catcher Provide <strong>Filtered</strong> Out of best. Check our explore
              function to find best institute near you.
            </p>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default WelcomeMessage
