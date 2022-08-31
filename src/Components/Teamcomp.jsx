import React from 'react'
import member1 from '../images/team/member-1.jpg' 
import member2 from '../images/team/member-2.jpg'
import member3 from '../images/team/member-3.jpg'
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter,AiOutlineGoogle } from 'react-icons/ai';
import { TiSocialDribbble } from 'react-icons/ti';

const Teamcomp = () => {
  return (
     <>
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
 						<img loading="lazy" className="img-fluid" src={member1} alt="Meghna" />
 
 						<div className="mask">
							<ul className="clearfix">
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-facebook"><ImFacebook /></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-twitter"><AiOutlineTwitter /></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-google-outline"><AiOutlineGoogle /></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble"><TiSocialDribbble /></i></a></li>
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
 						<img loading="lazy" className="img-fluid" src={member2} alt="Meghna" />
 
 						<div className="mask">
							<ul className="clearfix">
							<li><a href="https://themefisher.com/"><i className="tf-ion-social-facebook"><ImFacebook /></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-twitter"><AiOutlineTwitter /></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-google-outline"><AiOutlineGoogle /></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble"><TiSocialDribbble /></i></a></li>
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
 						<img loading="lazy" className="img-fluid" src={member3} alt="Meghna" />
 
 						<div className="mask">
							<ul className="clearfix">
							<li><a href="https://themefisher.com/"><i className="tf-ion-social-facebook"><ImFacebook /></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-twitter"><AiOutlineTwitter /></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-google-outline"><AiOutlineGoogle /></i></a></li>
								<li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble"><TiSocialDribbble /></i></a></li>
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
     </>
  )
}

export default Teamcomp