import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Portfolio = () => {
  return (
	 <>
	  
  <Navbar />

<section className="single-page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<h2>Portfolio</h2>
				<ol className="breadcrumb header-bradcrumb justify-content-center">
					<li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
					<li className="breadcrumb-item active" aria-current="page">Portfolio</li>
				</ol>
			</div>
		</div>
	</div>
</section> 

<section className="portfolio section-sm" id="portfolio">
	<div className="container-fluid">
		<div className="row justify-content-center">
			<div className="col-xl-6 col-lg-8">
 				<div className="title text-center">
					<h2>Our Works</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, veritatis. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Minima, vitae? </p>
					<div className="border"></div>
				</div>
 			</div>
		</div>

		<div className="row">
			<div className="col-lg-12">

				<div className="portfolio-filter">
					<button type="button" data-filter="all">All</button>
					<button type="button" data-filter="photography">Photography</button>
					<button type="button" data-filter="ios">IOS App</button>
					<button type="button" data-filter="development">Development</button>
					<button type="button" data-filter="design">Design</button>
				</div>

				<div className="row">
					<div className="col-12">
						<div className="filtr-container">
							<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design">
								<div className="portfolio-block">
									<img className="img-fluid" src="images/portfolio/portfolio-1.jpg" alt="" />
									<div className="caption">
										<a className="search-icon" href="images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
											<i className="tf-ion-ios-search-strong"></i>
										</a>
										<h4><a href="portfolio.html">AirBnB Postcard</a></h4>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design, ios">
								<div className="portfolio-block">
									<img className="img-fluid" src="images/portfolio/portfolio-2.jpg" alt="" />
									<div className="caption">
										<a className="search-icon" href="images/portfolio/portfolio-2.jpg" data-lightbox="image-1">
											<i className="tf-ion-ios-search-strong"></i>
										</a>
										<h4><a href="portfolio.html">AirBnB Postcard</a></h4>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, photography, development">
								<div className="portfolio-block">
									<img className="img-fluid" src="images/portfolio/portfolio-3.jpg" alt="" />
									<div className="caption">
										<a className="search-icon" href="images/portfolio/portfolio-3.jpg" data-lightbox="image-1">
											<i className="tf-ion-ios-search-strong"></i>
										</a>
										<h4><a href="portfolio.html">AirBnB Postcard</a></h4>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, photography, ios">
								<div className="portfolio-block">
									<img className="img-fluid" src="images/portfolio/portfolio-4.jpg" alt="" />
									<div className="caption">
										<a className="search-icon" href="images/portfolio/portfolio-4.jpg" data-lightbox="image-1">
											<i className="tf-ion-ios-search-strong"></i>
										</a>
										<h4><a href="portfolio.html">AirBnB Postcard</a></h4>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design">
								<div className="portfolio-block">
									<img className="img-fluid" src="images/portfolio/portfolio-5.jpg" alt="" />
									<div className="caption">
										<a className="search-icon" href="images/portfolio/portfolio-5.jpg" data-lightbox="image-1">
											<i className="tf-ion-ios-search-strong"></i>
										</a>
										<h4><a href="portfolio.html">AirBnB Postcard</a></h4>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design, development">
								<div className="portfolio-block">
									<img className="img-fluid" src="images/portfolio/portfolio-6.jpg" alt="" />
									<div className="caption">
										<a className="search-icon" href="images/portfolio/portfolio-6.jpg" data-lightbox="image-1">
											<i className="tf-ion-ios-search-strong"></i>
										</a>
										<h4><a href="portfolio.html">AirBnB Postcard</a></h4>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, photography">
								<div className="portfolio-block">
									<img className="img-fluid" src="images/portfolio/portfolio-7.jpg" alt="" />
									<div className="caption">
										<a className="search-icon" href="images/portfolio/portfolio-7.jpg" data-lightbox="image-1">
											<i className="tf-ion-ios-search-strong"></i>
										</a>
										<h4><a href="portfolio.html">AirBnB Postcard</a></h4>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design, development">
								<div className="portfolio-block">
									<img className="img-fluid" src="images/portfolio/portfolio-1.jpg" alt="" />
									<div className="caption">
										<a className="search-icon" href="images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
											<i className="tf-ion-ios-search-strong"></i>
										</a>
										<h4><a href="portfolio.html">AirBnB Postcard</a></h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>  
		</div> 
	</div>  
</section> 
		
	<section className="testimonial section" id="testimonial">
		<div className="container">
			<div className="row">				
				<div className="col-lg-12">
 					<div className="testimonial-slider">
 						<div className="item text-center">
							<i className="tf-ion-chatbubbles"></i>
 							<div className="client-details">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
							</div> 
							<div className="client-thumb">
								<img loading="lazy" src="images/client-logo/clients-1.jpg" className="img-fluid" alt="" />
							</div>
							<div className="client-meta">
								<h3>William Martin</h3>
								<span>CEO , Company Name</span>
							</div>
 						</div>
 				
 						<div className="item text-center">
							<i className="tf-ion-chatbubbles"></i>
 							<div className="client-details">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
							</div> 
							<div className="client-thumb">
								<img loading="lazy" src="images/client-logo/clients-2.jpg" className="img-fluid" alt="" />
							</div>
							<div className="client-meta">
								<h3>Emma Harrison</h3>
								<span>CEO , Company Name</span>
							</div>
 						</div>
 					
 						<div className="item text-center">
							<i className="tf-ion-chatbubbles"></i>
 							<div className="client-details">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
							</div>
 							<div className="client-thumb">
								<img loading="lazy" src="images/client-logo/clients-3.jpg" className="img-fluid" alt="" />
							</div>
							<div className="client-meta">
								<h3>Alexander Lucas</h3>
								<span>CEO , Company Name</span>
							</div>
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

export default Portfolio