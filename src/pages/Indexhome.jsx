
import React from 'react'
import Counter from '../Components/Counter'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Indexhome = () => {
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
 
<section className="service-2 section">
  <div className="container">
    <div className="row justify-content-center">

      <div className="col-lg-6">
         <div className="title text-center">
          <h2>What Do We Offer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptates, earum. </p>
          <div className="border"></div>
        </div>
       </div>
    </div>
    <div className="row">

      <div className="col-md-4 text-center d-none d-md-block">
        <img loading="lazy" src="images/about/member.jpg" className="img-fluid inline-block" alt="" />
      </div>
      <div className="col-md-8">
        <div className="row text-center">
          <div className="col-md-6 col-sm-6">
            <div className="service-item">
              <i className="tf-ion-ios-alarm-outline"></i>
              <h4>Time Management</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
            </div>
          </div> 
          <div className="col-md-6 col-sm-6">
            <div className="service-item">
              <i className="tf-ion-ios-briefcase-outline"></i>
              <h4>Marketing Ideas</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
            </div>
          </div> 
          <div className="col-md-6 col-sm-6">
            <div className="service-item">
              <i className="tf-ion-ios-email-outline"></i>
              <h4>Mail Support</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
            </div>
          </div> 
          <div className="col-md-6 col-sm-6">
            <div className="service-item">
              <i className="tf-ion-ios-locked-outline"></i>
              <h4>Secure System</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
            </div>
          </div> 
        </div>
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
 
<Counter />
  
 
		
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

<Footer />


 
       </>
  )
}

export default Indexhome