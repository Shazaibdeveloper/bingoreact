
import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Singlepost = () => {
  return (
    <>
     
     <Navbar />
 
<section className="single-page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<h2>Blog Single</h2>
				<ol className="breadcrumb header-bradcrumb justify-content-center">
					<li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
					<li className="breadcrumb-item active" aria-current="page">Blog Single</li>
				</ol>
			</div>
		</div>
	</div>
</section>

 <section className="blog-details section">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <article className="post">
          <div className="post-image mb-5">
            <img loading="lazy" className="img-fluid w-100" src="images/blog/post-1.jpg" alt="post-image" />
          </div>
           <div className="post-content">
            <h3>Cras Sed Elit Sit Amet.</h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="index.html">Admin</a>&nbsp;/
              </li>
              <li className="list-inline-item">
                <a href="single-post.html">30 comments</a>&nbsp;/
              </li>
              <li className="list-inline-item">
                <a href="single-post.html">30 likes</a>
              </li>
            </ul>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium dolore mque laudantium totam rem aperiam
              eaque ipsa quae ab illo inventore veritatis et quasi archite beatae vitae dicta sunt explicabo. nemo enim ipsam
              voluptatem quia voluptassit.aspernatur aut odit aut fugit.</p>
            <p>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque poro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam quaerat voluptatem</p>
             <blockquote>Excepteur sint occaecat cupidatat non proi dent, sunt in culpa qui officia deserunt mollit anim iest.laborum.
              sed perspiciatis unde omnis iste natus error voluptatem accusantium dolore mque laudantium.</blockquote>
            <p>Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Seper spiciatis
              unde omnis natus error sit voluptatem accusantium doloremque laudantium totam rem. aperiam eaque ipsa quae
              ab illo inventore veritatis.</p>
             <ul className="post-content-share list-inline mb-5">
              <li className="list-inline-item">
                <a href="https://themefisher.com/">
                  <i className="tf-ion-social-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://themefisher.com/">
                  <i className="tf-ion-social-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://themefisher.com/">
                  <i className="tf-ion-social-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://themefisher.com/">
                  <i className="tf-ion-social-skype"></i>
                </a>
              </li>
            </ul>

            <h3>2 comments</h3>
            <ul className="comment-list">
               <li className="comment-list-item">
                <div className="comment-list-item-image">
                  <img loading="lazy" src="images/blog/comment-1.jpg" alt="comment-img" />
                </div>
                <div className="comment-list-item-content">
                  <h5>Anke Kirsch</h5>
                  <h6>Aug 20, 2018</h6>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudant tota rem
                    ape riamipsa eaque. </p>
                  <a href="single-post.html" className="comment-btn">reply</a>
                </div>
              </li>
              <li className="comment-list-item">
                <div className="comment-list-item-image">
                  <img loading="lazy" src="images/blog/comment-2.jpg" alt="comment-img" />
                </div>
                <div className="comment-list-item-content">
                  <h5>Falk Burger</h5>
                  <h6>Aug 20, 2018</h6>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudant tota rem
                    ape riamipsa eaque. </p>
                  <a href="single-post.html" className="comment-btn">reply</a>
                </div>
              </li>
            </ul>
            <h3>Leave A Comments</h3>
             <form action="#" className="comment-form">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <input type="text" name="first-name" className="form-control" id="first-name" placeholder="First Name" required />
                </div>
                <div className="col-lg-6 col-md-6">
                  <input type="email" name="mail" className="form-control" id="mail" placeholder="Email" required />
                </div>
                <div className="col-lg-12 col-md-12">
                  <textarea className="form-control" name="msg" id="msg" rows="6" placeholder="Message" required></textarea>
                </div>
              </div>
              <button type="submit" value="send" className="btn btn-primary">send Message</button>
            </form>
          </div>
        </article>
      </div>
      <div className="col-lg-4 mt-5 mt-lg-0">
         <aside className="sidebar pl-0 pl-lg-4">
          <div className="widget-search widget">
            <form action="#">
               <input className="form-control shadow-none" type="text" placeholder="Search..." name="search" />
              <button type="submit" className="widget-search-btn">
                <i className="tf-ion-ios-search"></i>
              </button>
            </form>
          </div>
          <div className="widget-categories widget">
            <h2>Categories</h2>
             <ul className="widget-categories-list">
              <li>
                <a href="blog.html">Financial Advise</a>
              </li>
              <li>
                <a href="blog.html">Businee Growth</a>
              </li>
              <li>
                <a href="blog.html">Investment Marketing</a>
              </li>
              <li>
                <a href="blog.html">Business Consulting</a>
              </li>
              <li>
                <a href="blog.html">Advanced Analytics</a>
              </li>
              <li>
                <a href="blog.html">Investment Marketing</a>
              </li>
            </ul>
          </div>
          <div className="widget-post widget">
            <h2>Latest Post</h2>
             <ul className="widget-post-list">
              <li className="widget-post-list-item">
                <div className="widget-post-image">
                  <a href="single-post.html">
                    <img loading="lazy" src="images/blog/post-1.jpg" alt="post-img" />
                  </a>
                </div>
                <div className="widget-post-content">
                  <a href="single-post.html">
                    <h5>Condentum Quam Vitae Ligu. tempor bibendum.</h5>
                  </a>
                  <h6>Aug 20, 2018</h6>
                </div>
              </li>
              <li className="widget-post-list-item">
                <div className="widget-post-image">
                  <a href="single-post.html">
                    <img loading="lazy" src="images/blog/post-2.jpg" alt="post-img" />
                  </a>
                </div>
                <div className="widget-post-content">
                  <a href="single-post.html">
                    <h5>Condentum Quam Vitae Ligu. tempor bibendum.</h5>
                  </a>
                  <h6>Aug 20, 2018</h6>
                </div>
              </li>
              <li className="widget-post-list-item">
                <div className="widget-post-image">
                  <a href="single-post.html">
                    <img loading="lazy" src="images/blog/post-3.jpg" alt="post-img" />
                  </a>
                </div>
                <div className="widget-post-content">
                  <a href="single-post.html">
                    <h5>Condentum Quam Vitae Ligu. tempor bibendum.</h5>
                  </a>
                  <h6>Aug 20, 2018</h6>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</section>
 
<Footer />
 

  
    </>
   )
}

export default Singlepost