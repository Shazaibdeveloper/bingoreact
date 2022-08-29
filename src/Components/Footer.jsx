import React from 'react'

const Footer = () => {
  return (
     <>
     <footer id="footer" className="bg-one">
  <div className="top-footer">
    <div className="container">
      <div className="row justify-content-around">
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
          <h3>about</h3>
          <p>Integer posuere erat a ante venenati dapibus posuere velit aliquet. Fusce dapibus, tellus cursus commodo, tortor mauris sed posuere.</p>
        </div>
 
        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <ul>
            <li>
              <h3>Our Services</h3>
            </li>
            <li><a href="service.html">Ui/Ux Design</a></li>
            <li><a href="service.html">Graphic Design</a></li>
            <li><a href="service.html">Web Design</a></li>
            <li><a href="service.html">Web Development</a></li>
          </ul>
        </div>
 
        <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
          <ul>
            <li>
              <h3>Quick Links</h3>
            </li>
            <li><a href="about.html">About</a></li>
            <li><a href="service.html">Services</a></li>
            <li><a href="blog.html">Blogs</a></li>
            <li><a href="404.html">404</a></li>
          </ul>
        </div>
 
        <div className="col-lg-3 col-md-6">
          <ul>
            <li>
              <h3>Connect with us Socially</h3>
            </li>
            <li><a href="https://www.facebook.com/themefisher/">Facebook</a></li>
            <li><a href="https://www.twitter.com/themefisher/">Twitter</a></li>
            <li><a href="https://www.youtube.com/channel/UCx9qVW8VF0LmTi4OF2F8YdA">Youtube</a></li>
            <li><a href="https://www.github.com/themefisher/">Github</a></li>
          </ul>
        </div>
 
      </div>
    </div> 
  </div>
  <div className="footer-bottom">
    <h5>&copy; Copyright 2020. All rights reserved.</h5>
    <h6>Design and Developed by <a href="#!">M.SHAHZAIB</a></h6>
  </div>
</footer> 
     </>
  )
}

export default Footer