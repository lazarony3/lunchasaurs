import React from 'react'
import CtaCard from './CtaCard'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }
  render() {
    return (
        <div className="home-container">
            <CtaCard to="/account/create" heading={'Sign up for Lunchasaurs!'}
            message={'Create an account today...'}/>
            <CtaCard to="/account/login" heading={'Already have an account?'}
            message={'Login now!'}/>
        </div>
      );
  }
}
