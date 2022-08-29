import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Pricing = () => {
  return (
      <>
       
 <Navbar /> 

<section className="single-page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<h2>Easy Pricing</h2>
				<ol className="breadcrumb header-bradcrumb justify-content-center">
					<li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
					<li className="breadcrumb-item active" aria-current="page">Easy Pricing</li>
				</ol>
			</div>
		</div>
	</div>
</section>
 
<section className="about-2 section" id="about">
	<div className="container">
		<div className="row justify-content-center">
 			<div className="col-lg-6">
				<div className="title text-center">
					<h2>We Are Bingo Agency</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam reprehenderit accusamus labore iusto,
						aut, eum itaque illo totam tempora eius.</p>
					<div className="border"></div>
				</div>
			</div>
 		</div>

		<div className="row">

			<div className="col-md-6 mb-4 mb-md-0">
				<img loading="lazy" src="images/about/about-2.png" className="img-fluid" alt="" />
			</div>
			<div className="col-md-6">
				<ul className="checklist">
					<li>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
					<li>Aenean quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
					<li>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
					<li>Etiam porta sem multipage evint landing magna mollis euismod a pharetra augue.</li>
					<li>Aenean quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
				</ul>
				<a href="about.html" className="btn btn-main mt-20">Learn More</a>
			</div>
		</div> 
	</div>  
</section>  
<section className="pricing-table" id="pricing">
	<div className="container">
		<div className="row justify-content-center">
 			<div className="col-xl-6 col-lg-8">
				<div className="title title-white text-center ">
					<h2>Our Greatest Plans</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium soluta deserunt eaque, est, quia hic odit sed incidunt officiis quidem.</p>
					<div className="border"></div>
				</div>
			</div>
 		</div>
		<div className="row">
 			<div className="col-lg-4 col-md-6">
				<div className="pricing-item">

 					<div className="price-title">
						<h3>Basic</h3>
						<strong className="value">$19</strong>
						<p>Perfect for single freelancers who work by themselves</p>
					</div>
 
 					<ul>
						<li><i className="tf-ion-ios-arrow-forward"></i> 1GB Disk Space</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> 10 Email Account</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> Script Installer</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> 1 GB Storage</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> 2 GB Bandwidth</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> 24/7 Tech Support</li>
					</ul>
 
 					<a className="btn btn-main" href="contact.html">Signup</a>
 
				</div>
			</div>
 
 			<div className="col-lg-4 col-md-6  ">
				<div className="pricing-item">

 					<div className="price-title">
						<h3>Standard</h3>
						<strong className="value">$39</strong>
						<p>Suitable for small businesses with up to 5 employees</p>
					</div>
 
 					<ul>
						<li><i className="tf-ion-ios-arrow-forward"></i> 1GB Disk Space</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> 50 Email Account</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> Script Installer</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> 1 GB Storage</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> 10 GB Bandwidth</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> 24/7 Tech Support</li>
					</ul>
 
 					<a className="btn btn-main" href="contact.html">Signup</a>
 
				</div>
			</div>
 
 			<div className="col-lg-4 col-md-6 ">
				<div className="pricing-item">

 					<div className="price-title">
						<h3>Enterprise</h3>
						<strong className="value">$59</strong>
						<p>Great for large businesses with more than 5 employees</p>
					</div>
 
 					<ul>
						<li><i className="tf-ion-ios-arrow-forward"></i> Unlimited Disk Space</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> Unlimited Email Account</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> Script Installer</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> Unlimited Storage</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> Unlimited Bandwidth</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> 24/7 Tech Support</li>
					</ul>
 
 					<a className="btn btn-main" href="contact.html">Signup</a>
 
				</div>
			</div>
 

		</div>  
	</div>  
</section>  

<Footer />
 
      </>
    )
}

export default Pricing