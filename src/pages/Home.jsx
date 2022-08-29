import React, { useState } from 'react'
import img1 from '../images/slider/slider-bg-1.jpg';
import img2 from '../images/slider/slider-bg-2.jpg'; 
import member from "../images/about/member.jpg"
import about2 from "../images/about/about-2.png"
import client1 from '../images/client-logo/clients-1.jpg'
import client2 from '../images/client-logo/clients-2.jpg'
import client3 from '../images/client-logo/clients-3.jpg'
import post1 from "../images/blog/post-1.jpg"
import post2 from "../images/blog/post-2.jpg"
import post3 from "../images/blog/post-3.jpg"
import { BsAlarm,BsPencilSquare } from 'react-icons/bs';
import { AiOutlineShopping,AiOutlineMail,AiOutlineLock,AiOutlineProject } from 'react-icons/ai';
import { TiInputChecked } from 'react-icons/ti';
import { GiCoffeeCup } from 'react-icons/gi';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';



const offerapi = [
  {
    icon : <BsAlarm />,
    heading : 'Time Management',
    para : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.',
  },{
    icon : <AiOutlineShopping />,
    heading : 'Marketing Ideas',
    para : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.',
  },
  {
    icon : <AiOutlineMail />,
    heading : 'Mail Support',
    para : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.',
  },
  {
    icon : <AiOutlineLock />,
    heading : 'Secure System',
    para : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.',
  }
]

const awardapi = [
  {
    icon : <BsAlarm />,
    head : '345',
    para : 'Happy Clients',
  },
  {
    icon : <AiOutlineProject />,
    head : '54',
    para : 'Projects completed',
  },
  {
    icon : <BsPencilSquare />,
    head : '345',
    para : 'Positive feedback',
  },
  {
    icon : <GiCoffeeCup />,
    head : '543',
    para : 'Cups of Coffee',
  },
]


const Home = () => {

         const [offer,setoffer] = useState(offerapi)
         const [award,setaward] = useState(awardapi)
  return (
	<>
	 
 
	<Navbar />
  
 

<div className="main-slider-container">

   <div id="demo" className="carousel slide" data-bs-ride="carousel">

 

<div className="carousel-inner">

 <div className="carousel-item active">
   <img src={img1} alt="Los Angeles" className="d-block" style={{width: '100%'}} />
   <div className="col-md-12 text-center content-div text-white">
					<h1  data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">Crafting Digital <br/>
						Experience</h1>
					<p className='text-white' data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Quod, <br/> veritatis tempore nostrum id
						officia quaerat eum corrupti, <br/> ipsa aliquam velit.</p>
					<a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn btn-main"
						href="service.html">Explore Us</a>
				</div>

 </div>
 <div className="carousel-item">

   <img src={img2} alt="Chicago" className="d-block" style={{width: '100%'}} />
   <div className="col-md-12 text-center content-div text-white">
					<h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">Crafting Digital <br/>
						Experience</h1>
					<p className='text-white' data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Quod, <br/> veritatis tempore nostrum id
						officia quaerat eum corrupti, <br/> ipsa aliquam velit.</p>
					<a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn btn-main"
						href="service.html">Explore Us</a>
				</div>

 </div>
 

</div>

<a className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
 <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
 <span className="carousel-control-next-icon"></span>
</a>
</div>


</div>
 
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
<div className="offer-wrap">
      <div class Name="col-md-4 text-center d-none d-md-block">
        <img loading="lazy" src={member} className="img-fluid inline-block" alt=""/>
      </div>
      <div className="col-md-8">
        <div className="row text-center">

        
        {offer.map((prop) =>{
            const {icon,heading,para} = prop
          return(
            <>
            <div className="col-md-6 col-sm-6">
            <div className="service-item">
              <i className="tf-ion-ios-alarm-outline">{icon}</i>
              <h4>{heading}</h4>
              <p>{para}</p>
            </div>
          </div>
            </>
          )
        } )}
          
		   


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
				<img loading="lazy" src={about2} className="img-fluid" alt=""/>
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
			 
       {award.map((prop) =>{
         const {icon,head,para} = prop
        return(
          <>
          	<div className="col-md-3 col-sm-6 col-xs-6 text-center ">
				<div className="counters-item">
					<i className="tf-ion-ios-alarm-outline">{icon}</i>
					<div>
						<span className="counter" data-count="150">{head}</span>
					</div>
					<h3>{para}</h3>
				</div>
			</div> 
          </>
        )
       })}
		
  
			 
		</div> 
	</div> 
</section> 
 
		
 <div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="rounded-circle shadow-1-strong mb-4"
        src={client1} alt="avatar"
        style={{width: '150px'}} />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">Maria Kate</h5>
          <p>Photographer</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="far fa-star fa-sm"></i></li>
      </ul>
    </div>
    <div className="carousel-item">
      <img className="rounded-circle shadow-1-strong mb-4"
        src={client2} alt="avatar"
        style={{width: '150px'}} />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">John Doe</h5>
          <p>Web Developer</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis.
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="far fa-star fa-sm"></i></li>
      </ul>
    </div>
    <div className="carousel-item">
      <img className="rounded-circle shadow-1-strong mb-4"
        src={client3} alt="avatar" style={{width: '150px'}} />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">Anna Deynah</h5>
          <p>UX Designer</p>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="far fa-star fa-sm"></i></li>
      </ul>
    </div>
  </div>
  <a className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
 <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
 <span className="carousel-control-next-icon"></span>
</a>
</div>
  
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
						<img loading="lazy" src={post1} alt="amazing caves coverimage" className="img-fluid" />
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
						<img loading="lazy" src={post2} alt="amazing caves coverimage" className="img-fluid" />
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
						<img loading="lazy" src={post3} alt="amazing caves coverimage" className="img-fluid" />
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

export default Home