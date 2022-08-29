
import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
     <>
      
 <Navbar />

<section className="single-page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<h2>Contact Us</h2>
				<ol className="breadcrumb header-bradcrumb justify-content-center">
					<li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
					<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
				</ol>
			</div>
		</div>
	</div>
</section>
 
 <section className="contact-us" id="contact">
 	<div className="container">
 		<div className="row justify-content-center">
  			<div className="col-xl-6 col-lg-8">
				<div className="title text-center">
					<h2>Get In Touch</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis eveniet maiores ab maxime nam
						ut numquam molestiae quaerat incidunt?</p>
					<div className="border"></div>
				</div>
			</div>
 		</div>
 		<div className="row">
  			<div className="contact-details col-md-6 ">
 				<h3 className="mb-3">Contact Details</h3>
 				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, vero, provident, eum eligendi blanditiis ex
 					explicabo vitae nostrum facilis asperiores dolorem illo officiis ratione vel fugiat dicta laboriosam labore
 					adipisci.</p>
 				<ul className="contact-short-info mt-4">
 					<li className="mb-3">
 						<i className="tf-ion-ios-home"></i>
 						<span>Khaja Road, Bayzid, Chittagong, Bangladesh</span>
 					</li>
 					<li className="mb-3">
 						<i className="tf-ion-android-phone-portrait"></i>
 						<span>Phone: +880-31-000-000</span>
 					</li>
 					<li className="mb-3">
 						<i className="tf-ion-android-globe"></i>
 						<span>Fax: +880-31-000-000</span>
 					</li>
 					<li>
 						<i className="tf-ion-android-mail"></i>
 						<span>Email: hello@meghna.com</span>
 					</li>
 				</ul>
  				<div className="social-icon">
 					<ul>
 						<li><a href="https://themefisher.com/"><i className="tf-ion-social-facebook"></i></a></li>
 						<li><a href="https://themefisher.com/"><i className="tf-ion-social-twitter"></i></a></li>
 						<li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble-outline"></i></a></li>
 						<li><a href="https://themefisher.com/"><i className="tf-ion-social-linkedin-outline"></i></a></li>
 					</ul>
 				</div>
  			</div>
 
  			<div className="contact-form col-md-6 ">
 				<form id="contact-form" method="post" role="form">
 					<div className="form-group mb-4">
 						<input type="text" placeholder="Your Name" className="form-control" name="name" id="name" required />
 					</div>

 					<div className="form-group mb-4">
 						<input type="email" placeholder="Your Email" className="form-control" name="email" id="email" required />
 					</div>

 					<div className="form-group mb-4">
 						<input type="text" placeholder="Subject" className="form-control" name="subject" id="subject" required />
 					</div>

 					<div className="form-group mb-4">
 						<textarea rows="6" placeholder="Message" className="form-control" name="message" id="message" required></textarea>
 					</div>
 					<div id="cf-submit">
 						<input type="submit" id="contact-submit" className="btn btn-transparent" value="Submit" />
 					</div>

 				</form>
 			</div>
 
 		</div> 
 	</div> 
 </section>  
 
<div className="google-map">
	<div id="map_canvas" className="map_canvas" data-latitude="40.712776" data-longitude="-74.005974" data-marker="images/marker.png" data-marker-name="Bingo"></div>
</div>
 
<Footer />
 
 
     </>
  )
}

export default Contact