import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Blog = () => {
  return (
       <>
        
 <Navbar />

<section className="single-page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<h2>Blogs</h2>
				<ol className="breadcrumb header-bradcrumb justify-content-center">
					<li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
					<li className="breadcrumb-item active" aria-current="page">Blogs</li>
				</ol>
			</div>
		</div>
	</div>
</section>

<section className="posts section">
	<div className="container">
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
 			<article className="col-lg-4 col-md-6">
				<div className="post-item">
					<div className="media-wrapper">
						<img loading="lazy" src="images/blog/post-4.jpg" alt="amazing caves coverimage" className="img-fluid" />
					</div>

					<div className="content">
						<h3><a href="single-post.html">Looking Back</a></h3>
						<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
							moon officia aute, non skateboard dolor brunch.</p>
						<a className="btn btn-main" href="single-post.html">Read more</a>
					</div>
				</div>
			</article>
 
 			<article className="col-lg-4 col-md-6">
				<div className="post-item">
					<div className="media-wrapper">
						<img loading="lazy" src="images/blog/post-5.jpg" alt="amazing caves coverimage" className="img-fluid" />
					</div>

					<div className="content">
						<h3><a href="single-post.html">Laugh and Cry</a></h3>
						<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
							moon officia aute, non skateboard dolor brunch.</p>
						<a className="btn btn-main" href="single-post.html">Read more</a>
					</div>
				</div>
			</article>
 
 			<article className="col-lg-4 col-md-6">
				<div className="post-item">
					<div className="media-wrapper">
						<img loading="lazy" src="images/blog/post-6.jpg" alt="amazing caves coverimage" className="img-fluid" />
					</div>

					<div className="content">
						<h3><a href="single-post.html">Regret No More</a></h3>
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

export default Blog