/**
 * Scroll to top.
 *
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */
const scrollsTop = () => {
	if (window) {
		try {
			// The New API.
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		} catch (error) {
			// For older browsers.
			window.scrollTo(0, 0);
		}
	}
};

export default scrollsTop;
