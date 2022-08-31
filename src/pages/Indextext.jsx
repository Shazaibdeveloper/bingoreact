import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Teamcomp from '../Components/Teamcomp'

const Indextext = () => {
  return (
       <>

   <Navbar />       
 
 <section className="hero-area">
 	<div className="container">
 		<div className="row">
 			<div className="col-md-12">
 				<div className="block mt-4">
 					<h1 className="wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".3s">We are smart <br/> Creative Agency</h1>
 					<p className="wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".5s">Lorem ipsum dolor sit amet, consectetur
 						adipisicing elit. Nulla, ad rerum repellat. Sequi, labore, illo. Ducimus voluptates quidem obcaecati, ad.
 					</p>
 					<ul className="list-inline wow fadeInUp" data-wow-duration=".5s" data-wow-delay=".7s">
 						<li className="list-inline-item">
 							<a data-scroll href="#services" className="btn btn-main">Explore Us</a>
 						</li>
 						<li className="list-inline-item">
 							<a data-scroll href="#team" className="btn btn-transparent">Learn More</a>
 						</li>
 					</ul>
 				</div>
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
 
<section className="call-to-action-2 section">
	<div className="container">
		<div className="row">
			<div className="col-md-12 text-center">
				<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tempor eros. Pellentesque elementum nulla sed justo tempor posuere sit amet sit amet ligula.</h2>
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
 

<section className="services" id="services">
	<div className="container">
		<div className="row justify-content-center">
 			<div className="col-xl-6 col-lg-8">
				<div className="title text-center">
					<h2>Our Services</h2>
					<p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex,
						in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.</p>
					<div className="border"></div>
				</div>
			</div>
 		</div>
		<div className="row no-gutters">

 			<div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div className="service-block p-4 color-bg text-center">
					<div className="service-icon text-center">
						<i className="tf-ion-ios-copy-outline"></i>
					</div>
					<h3>WordPress Theme</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
 
 			<div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div className="service-block p-4 text-center">
					<div className="service-icon text-center">
						<i className="tf-ion-ios-alarm-outline"></i>
					</div>
					<h3>Responsive Design</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
 
 			<div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div className="service-block p-4 color-bg text-center">
					<div className="service-icon text-center">
						<i className="tf-ion-ios-book-outline"></i>
					</div>
					<h3>Media &amp; Advertisement</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
 
 			<div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div className="service-block p-4  text-center">
					<div className="service-icon text-center">
						<i className="tf-ion-ios-briefcase-outline"></i>
					</div>
					<h3>Graphic Design</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
 
 			<div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div className="service-block p-4 color-bg text-center">
					<div className="service-icon text-center">
						<i className="tf-ion-ios-crop"></i>
					</div>
					<h3>Apps Development</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
 
 			<div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div className="service-block p-4 text-center">
					<div className="service-icon text-center">
						<i className="tf-ion-ios-home-outline"></i>
					</div>
					<h3>Networking</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
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
<section className="team-skills section-sm" id="skills">

	<div className="container">
		<div className="row justify-content-center">
 			<div className="col-xl-6 col-lg-8">
				<div className="title text-center">
					<h2>Our Skills</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus fugiat, vel veniam, eos et
						delectus eveniet molestiae. Esse, voluptas ratione.</p>
					<div className="border"></div>
				</div>
			</div>
 		</div>

		<div className="row justify-content-between">
			<div className="col-md-5">
				<div className="team-skills-content">
					<h2 className="mb-3">Simple To Start</h2>
					<p>Vestibulum nisl tortor, consectetur quis imperdiet bium, letcu. Sedndime ntumiaculis ex, in
						faucibus lorem accumsan non. Donec mattis tin unt metuorbi sed tort Igor aman luctus dignissim.
						Vestibulum nisl tortor, consectetur quis imperdiet bium, letcu. Sedndime ntumiaculis ex, in
						faucibus lorem accumsan non.</p>
					<a href="contact.html" className="btn btn-main mt-20">Contact Us</a>
				</div>
			</div>
			<div className="col-md-6">
				<div className="progress-block">
					<ul>
						<li className="mb-3">
							<span>Photoshop</span>
							<div className="progress">
								<div className="progress-bar" style={{width: '90%'}}>
								</div>
							</div>
						</li>
						<li className="mb-3">
							<span>Web Application</span>
							<div className="progress">
								<div className="progress-bar" style={{width: '85%'}}>
								</div>
							</div>
						</li>
						<li className="mb-3">
							<span>Andriod Application</span>
							<div className="progress">
								<div className="progress-bar" style={{width: '92%'}}>
								</div>
							</div>
						</li>
						<li>
							<span>IOS Development</span>
							<div className="progress">
								<div className="progress-bar" style={{width: '78%'}}>
								</div>
							</div>
						</li>
					</ul>

				</div>
			</div>
		</div>  
		<div className="row">
			<div className="col-md-12 mt-4">
				<div id="clients-slider" className="clients-logo-slider">
					<img loading="lazy" src="images/client-logo/logo1.png" alt="" />
					<img loading="lazy" src="images/client-logo/logo-2.png" alt="" />
					<img loading="lazy" src="images/client-logo/logo-3.png" alt="" />
					<img loading="lazy" src="images/client-logo/logo-4.png" alt="" />
					<img loading="lazy" src="images/client-logo/logo-5.png" alt="" />
					<img loading="lazy" src="images/client-logo/logo1.png" alt="" />
					<img loading="lazy" src="images/client-logo/logo-2.png" alt="" />
					<img loading="lazy" src="images/client-logo/logo-3.png" alt="" />
					<img loading="lazy" src="images/client-logo/logo-4.png" alt="" />
					<img loading="lazy" src="images/client-logo/logo-5.png" alt="" />
				</div>
			</div>
		</div>
	</div>  
</section>  
 
<Teamcomp />

 
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
 
<section className="blog" id="blog">
	<div className="container">
		<div className="row justify-content-center">
 			<div className="col-xl-6 col-lg-8">
				<div className="title text-center ">
					<h2> Latest <span className="color">Posts</span></h2>
					<div className="border"></div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere accusamus, reprehenderit libero inventore nam.</p>
				</div>
			</div>
 		</div>

		<div className="row">
 			<article className="col-lg-4 col-md-6">
				<div className="post-item">
					<div className="media-wrapper">
						<img loading="lazy" src="images/blog/post-1.jpg" alt="amazing caves coverimage" className="img-fluid" />
					</div>

					<div className="content">
						<h3><a href="single-post.html">Reasons to Smile</a></h3>
						<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
							moon officia aute, non skateboard dolor brunch.</p>
						<a className="btn btn-main" href="single-post.html">Read more</a>
					</div>
				</div>
			</article>
 
 			<article className="col-lg-4 col-md-6">
				<div className="post-item">
					<div className="media-wrapper">
						<img loading="lazy" src="images/blog/post-2.jpg" alt="amazing caves coverimage" className="img-fluid" />
					</div>

					<div className="content">
						<h3><a href="single-post.html">A Few Moments</a></h3>
						<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
							moon officia aute, non skateboard dolor brunch.</p>
						<a className="btn btn-main" href="single-post.html">Read more</a>
					</div>
				</div>
			</article>
 
 			<article className="col-lg-4 col-md-6">
				<div className="post-item">
					<div className="media-wrapper">
						<img loading="lazy" src="images/blog/post-3.jpg" alt="amazing caves coverimage" className="img-fluid" />
					</div>

					<div className="content">
						<h3><a href="single-post.html">Hints for Life</a></h3>
						<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
							moon officia aute, non skateboard dolor brunch.</p>
						<a className="btn btn-main" href="single-post.html">Read more</a>
					</div>
				</div>
			</article>
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

export default Indextext