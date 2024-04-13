import React from 'react'
import './footer.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__internal__container">
        <div className="social__midea__link">
          <div className="social__midea__icon">< FacebookRoundedIcon /></div>
          <div className="social__midea__icon">< InstagramIcon /></div>
          <div className="social__midea__icon">< YouTubeIcon /></div>
        </div>
        <div className="other__links">
          <ul>
            <li><a href="/">Audio Description</a></li>
            <li><a href="/">Investor Relations</a></li>
            <li><a href="/">Legal Notice</a></li>
          </ul>
          <ul>
            <li><a href="/">Help Center</a></li>
            <li><a href="/">Jobs</a></li>
            <li><a href="/">Cookie Preferences</a></li>
          </ul>
          <ul>
            <li><a href="/">Gift Card</a></li>
            <li><a href="/">Terms of Use</a></li>
            <li><a href="/">Cookie Perferences</a></li>
          </ul>
          <ul>
            <li><a href="/">Media Center</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>
        <div className="service__button">Service Code</div>
        <small>© 1997-2024 Netflix, Inc.</small>
      </div>
    </div>
  )
}

export default Footer