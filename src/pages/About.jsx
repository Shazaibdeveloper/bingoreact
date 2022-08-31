 

import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import company from "../images/company/company-image.jpg" 
import company2 from '../images/company/company-image-2.jpg'
import company3 from '../images/company/company-image-3.jpg'
import gallery1 from '../images/company/gallery-1.jpg'
import gallery2 from '../images/company/gallery-2.jpg'
import gallery3 from '../images/company/gallery-3.jpg'
import gallery4 from '../images/company/gallery-4.jpg'
import gallery5 from '../images/company/gallery-5.jpg'
import Teamcomp from '../Components/Teamcomp'


const About = () => {
  return (
	<>
	
<Navbar />
 
<section className="single-page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<h2>About Us</h2>
				<ol className="breadcrumb header-bradcrumb justify-content-center">
					<li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
					<li className="breadcrumb-item active" aria-current="page">About Us</li>
				</ol>
			</div>
		</div>
	</div>
</section>

<section className="about-shot-info section-sm">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 mt-20">
				<h2 className="mb-3">We Create Designs<br /> and technology</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus
					dolor harum voluptatibus modi dicta ducimus.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat
					cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, fugit itaque ratione incidunt voluptas.
					Quaerat quidem dolor, quisquam amet inventore quas adipisci ea sint qui placeat beatae molestias aut, aperiam!
				</p>
			</div>
			<div className="col-lg-6 mt-4 mt-lg-0">
				<img loading="lazy" className="img-fluid" src={company} alt="" />
			</div>
		</div>
	</div>
</section>


<section className="company-mission section-sm bg-gray">
	<div className="container">
		<div className="row">
			<div className="col-md-6">
				<h3>Our Mission</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere in suscipit voluptatum totam dolores
					assumenda vel, quia earum voluptatem blanditiis vero accusantium saepe aliquid nulla nemo accusamus, culpa
					inventore! Culpa nemo aspernatur tenetur, at quam aliquid reprehenderit obcaecati dicta illum mollitia,
					perferendis hic, beatae voluptates? Ex labore, obcaecati harum nam.</p>
				<img loading="lazy" src={company2} alt="" className="img-fluid mt-30" />
			</div>
			<div className="col-md-6 mt-5 mt-md-0">
				<h3>Our Vision</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere in suscipit voluptatum totam dolores
					assumenda vel, quia earum voluptatem blanditiis vero accusantium saepe aliquid nulla nemo accusamus, culpa
					inventore! Culpa nemo aspernatur tenetur, at quam aliquid reprehenderit obcaecati dicta illum mollitia,
					perferendis hic, beatae voluptates? Ex labore, obcaecati harum nam.</p>
				<img loading="lazy" src={company3} alt="" className="img-fluid mt-30" />
			</div>
		</div>
	</div>
</section>


 <Teamcomp />

 <section className="call-to-action-2 section">
	<div className="container">
		<div className="row">
			<div className="col-md-12 text-center">
				<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tempor eros. Pellentesque elementum nulla sed justo tempor posuere sit amet sit amet ligula.</h2>
			</div>
		</div> 		 
	</div>   	 
</section>    

<section className="section gallery">
	<div className="container-fluid">
		<div className="row justify-content-center">
			<div className="col-xl-6 col-lg-8">
				<div className="title text-center">
					<h2>Sneak Peak Gallery</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore numquam esse vitae recusandae qui
						aspernatur, blanditiis, laboriosam dignissimos dolore facere provident ex? Porro, praesentium consectetur
						tempore. Nulla, error eius dolorem.</p>
						<div className="border"></div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-md-12">
				<div className="company-gallery">
					<img loading="lazy" src={gallery1} alt="" />
					<img loading="lazy" src={gallery2} alt="" />
					<img loading="lazy" src={gallery3} alt="" />
					<img loading="lazy" src={gallery4} alt="" />
					<img loading="lazy" src={gallery5} alt="" />
					<img loading="lazy" src={gallery5} alt="" />
					<img loading="lazy" src={gallery1} alt="" />
					<img loading="lazy" src={gallery2} alt="" />
					<img loading="lazy" src={gallery4} alt="" />
					<img loading="lazy" src={gallery4} alt="" />
					<img loading="lazy" src={gallery5} alt="" />
					<img loading="lazy" src={gallery5} alt="" />
				</div>
			</div>
		</div>
	</div>
</section>



 <section className="counter-wrapper section-sm">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-xl-6 col-lg-8 text-center">
				<div className="title">
					<h2>Award-Winning Agency</h2>
					<p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.</p>
				</div>
			</div>
		</div>
		<div className="row">
 			<div className="col-md-3 col-sm-6 col-xs-6 text-center ">
				<div className="counters-item">
					<i className="tf-ion-ios-alarm-outline"></i>
					<div>
						<span className="counter" data-count="150">0</span>
					</div>
					<h3>Happy Clients</h3>
				</div>
			</div>
 
 			<div className="col-md-3 col-sm-6 col-xs-6 text-center ">
				<div className="counters-item">
					<i className="tf-ion-ios-analytics-outline"></i>
					<div>
						<span className="counter" data-count="130">0</span>
					</div>
					<h3>Projects completed</h3>
				</div>
			</div>
 
 			<div className="col-md-3 col-sm-6 col-xs-6 text-center ">
				<div className="counters-item">
					<i className="tf-ion-ios-compose-outline"></i>
					<div>
						<span className="counter" data-count="99">0</span>
					</div>
					<h3>Positive feedback</h3>

				</div>
			</div>
 
 			<div className="col-md-3 col-sm-6 col-xs-6 text-center ">
				<div className="counters-item kill-border">
					<i className="tf-ion-ios-bolt-outline"></i>
					<div>
						<span className="counter" data-count="250">0</span>
					</div>
					<h3>Cups of Coffee</h3>
				</div>
			</div>
 		</div>  
	</div>  
</section>  

 <section className="call-to-action section">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-xl-6 col-lg-8 text-center">
				<h2>Let's Create Something Together</h2>
				<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin bibendum auctor, nisi elit consequat ipsum,
					nesagittis sem nid elit. Duis sed odio sitain elit.</p>
				<a href="contact.html" className="btn btn-main">Contact Us</a>
			</div>
		</div> 
	</div>  
</section>  

<Footer />

	</>
  )
}

export default About
 

 