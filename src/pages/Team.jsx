import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Team = () => {
  return (
    <>
     
  <Navbar />
 
<section className="single-page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<h2>Our Team</h2>
				<ol className="breadcrumb header-bradcrumb justify-content-center">
					<li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
					<li className="breadcrumb-item active" aria-current="page">Our Team</li>
				</ol>
			</div>
		</div>
	</div>
</section>

 <section className="about" id="about">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-xl-6 col-lg-8">
 				<div className="title text-center">
					<h2>About Us</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa placeat voluptas tempore recusandae quasi nesciunt in, facilis animi. Sint, possimus?</p>
					<div className="border"></div>
				</div>
 			</div>
		</div>
		<div className="row">
			<div className="col-lg-6 mb-5 mb-lg-0">
				<img loading="lazy" src="images/about-us.jpg" className="img-fluid" alt="" />
			</div>
			<div className="col-lg-6">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tempor eros. Pellentesque elementum nulla
					sed justo tempor posuere sit amet sit amet ligula. Curabitur felis nibh, imperdiet eu erat non, luctus cursus
					lectus. Donec maximus diam leo, sed fringilla nisl auctor eget. Donec dictum neque est, ac faucibus ex blandit
					a.</p>
				<p>Curabitur felis nibh, imperdiet eu erat non, luctus cursus lectus. Donec maximus diam leo, sed fringilla nisl
					auctor eget. Donec dictum neque est, ac faucibus ex blandit a</p>
				<h4>Lorem ipsum dolor sit.</h4>
				<ul className="feature-list">
					<li> <i className="tf-ion-android-checkmark-circle"></i> Web Development</li>
					<li> <i className="tf-ion-android-checkmark-circle"></i> Application Development</li>
					<li> <i className="tf-ion-android-checkmark-circle"></i> Website Design</li>
					<li> <i className="tf-ion-android-checkmark-circle"></i> UI/UX Design</li>
					<li> <i className="tf-ion-android-checkmark-circle"></i> SEO Service</li>
				</ul>
				<a href="contact.html" className="btn btn-main mt-20">Learn More</a>
			</div>
		</div> 
	</div>  
</section>  
 <section className="team" id="team">
	<div className="container">
		<div className="row justify-content-center">
 			<div className="col-xl-6 col-lg-8">
				<div className="title text-center ">
					<h2>Our Team</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quasi tempora obcaecati, quis
						similique quos.</p>
					<div className="border"></div>
				</div>
			</div>
 		</div>
		<div className="row">
 			<div className="col-lg-4 col-md-6">
				<div className="team-member text-center">
					<div className="member-photo">
 						<img loading="lazy" className="img-fluid" src="images/team/member-1.jpg" alt="Meghna" />
 
 						<div className="mask">
							<ul className="clearfix">
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-facebook"></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-twitter"></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-google-outline"></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble"></i></a></li>
							</ul>
						</div>
 					</div>

 					<div className="member-content">
						<h3>Michael Jonson</h3>
						<span>Head Of Marketing</span>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
					</div>
 
				</div>
			</div>
 
 			<div className="col-lg-4 col-md-6">
				<div className="team-member text-center">
					<div className="member-photo">
 						<img loading="lazy" className="img-fluid" src="images/team/member-2.jpg" alt="Meghna" />
 
 						<div className="mask">
							<ul className="clearfix">
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-facebook"></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-twitter"></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-google-outline"></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble"></i></a></li>
							</ul>
						</div>
 					</div>

 					<div className="member-content">
						<h3>Carrick Mollenkamp</h3>
						<span>Web Developer</span>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
					</div>
 				</div>
			</div>
 
 			<div className="col-lg-4 col-md-6">
				<div className="team-member text-center">
					<div className="member-photo">
 						<img loading="lazy" className="img-fluid" src="images/team/member-3.jpg" alt="Meghna" />
 
 						<div className="mask">
							<ul className="clearfix">
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-facebook"></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-twitter"></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-google-outline"></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble"></i></a></li>
							</ul>
						</div>
 					</div>

 					<div className="member-content">
						<h3>David Gauthier</h3>
						<span>Head Of Management</span>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
					</div>
 
				</div>
			</div>
 		</div>  
	</div>  
</section>  

<Footer />

 
    </>
  )
}

export default Team