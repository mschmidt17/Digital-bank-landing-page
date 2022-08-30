import React from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Features from './components/Features.js';
import FeaturesCard from './components/FeaturesCard.js';
import Articles from './components/Articles.js';
import ArticlesCard from './components/ArticlesCard.js';
import Footer from './components/Footer.js';
import iconOnline from './components/Imagenes/icon-online.svg';
import iconBudgeting from './components/Imagenes/icon-budgeting.svg';
import iconOnboarding from './components/Imagenes/icon-onboarding.svg';
import iconOpenAPI from './components/Imagenes/icon-api.svg'
import imageCurrency from './components/Imagenes/image-currency.jpg';
import imageRestaurant from './components/Imagenes/image-restaurant.jpg';
import imagePlane from './components/Imagenes/image-plane.jpg';
import imageConfetti from './components/Imagenes/image-confetti.jpg';



const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<Features>
				<FeaturesCard
					icon={iconOnline}
					title='Online Banking'
					text='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
				/>
				<FeaturesCard
					icon={iconBudgeting}
					title='Simple Budgeting'
					text='See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
				/>
				<FeaturesCard
					icon={iconOnboarding}
					title='Fast Onboarding'
					text='We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
				/>
				<FeaturesCard
					icon={iconOpenAPI}
					title='Open API'
					text='Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
				/>
			</Features>
			<Articles>
				<ArticlesCard
					image={imageCurrency}
					author='Claire Robinson'
					title='Receive money in any currency with no fees'
					text='The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single'
				/>
				<ArticlesCard
					image={imageRestaurant}
					author='Wilson Hutton'
					title='Treat yourself without worrying about money'
					text='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you'
				/>
				<ArticlesCard
					image={imagePlane}
					author='Wilson Hutton'
					title='Take your Easybank card wherever you go'
					text='We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you'
				/>
				<ArticlesCard
					image={imageConfetti}
					author='Claire Robinson'
					title='Our invite-only Beta accounts are now live!'
					text='After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site'
				/>
			</Articles>
			<Footer />
		</>
	);
};

export default App;
