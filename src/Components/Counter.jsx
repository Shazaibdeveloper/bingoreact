import React from 'react'

const Counter = () => {
  return (
     <>
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
     </>
    )
}

export default Counter