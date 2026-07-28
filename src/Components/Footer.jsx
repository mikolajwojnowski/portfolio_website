import './Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className="site-footer" aria-label="Footer">
			<div className="footer-content">
				<div className="footer-brand">
                    <p className='footer-meta'>© {year} Mikolaj Wojnowski</p>
				</div>
			</div>
			
		</footer>
	)
}

export default Footer
