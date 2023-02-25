import React from 'react';

import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import CarouselImage from '../../assets/images/carousel-image.jpg';

const CarouselBanner = () => {
	var settings = {
		dots: true,
		fade: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		pauseOnFocus: false,
		useTransform: true,
		slidesToScroll: 1,
	};

	return (
		<>
			<Box
				sx={{
					width: '1300px',
					mx: 'auto',
					marginTop: '32px',
					borderRadius: '30px',
					position: 'relative',
				}}
			>
				<Slider {...settings}>
					<Box
						sx={{
							height: '347px',
							width: '120px',
							mx: '0',
							backgroundImage: `url(${CarouselImage})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
						}}
					>
						<Typography
							sx={{
								paddingLeft: '86px',
								paddingTop: '40px',
								fontFamily: 'Montserrat',
								fontStyle: 'normal',
								fontWeight: '400',
								fontSize: '61px',
								lineHeight: '67px',
								color: '#C9AC8C',
							}}
						>
							Temuriylar <br />
							davri <br />
							adabiyoti
						</Typography>
					</Box>
					<Box
						sx={{
							height: '347px',
							width: '120px',
							mx: '0',
							backgroundImage: `url(${CarouselImage})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
						}}
					>
						<Typography
							sx={{
								paddingLeft: '86px',
								paddingTop: '40px',
								fontFamily: 'Montserrat',
								fontStyle: 'normal',
								fontWeight: '400',
								fontSize: '61px',
								lineHeight: '67px',
								color: '#C9AC8C',
							}}
						>
							Rus <br />
							davri <br />
							adabiyoti
						</Typography>
					</Box>
					<Box
						sx={{
							height: '347px',
							width: '120px',
							mx: '0',
							backgroundImage: `url(${CarouselImage})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
						}}
					>
						<Typography
							sx={{
								paddingLeft: '86px',
								paddingTop: '40px',
								fontFamily: 'Montserrat',
								fontStyle: 'normal',
								fontWeight: '400',
								fontSize: '61px',
								lineHeight: '67px',
								color: '#C9AC8C',
							}}
						>
							O'zbek <br />
							davri <br />
							adabiyoti
						</Typography>
					</Box>
					<Box
						sx={{
							height: '347px',
							width: '120px',
							mx: '0',
							backgroundImage: `url(${CarouselImage})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
						}}
					>
						<Typography
							sx={{
								paddingLeft: '86px',
								paddingTop: '40px',
								fontFamily: 'Montserrat',
								fontStyle: 'normal',
								fontWeight: '400',
								fontSize: '61px',
								lineHeight: '67px',
								color: '#C9AC8C',
							}}
						>
							Turk <br />
							davri <br />
							adabiyoti
						</Typography>
					</Box>
				</Slider>
			</Box>
		</>
	);
};

export default CarouselBanner;
