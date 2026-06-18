/**
 * Subtle editorial scroll-reveal.
 * Adds `is-revealed` once the element scrolls into view.
 * Respects prefers-reduced-motion and gracefully no-ops without IntersectionObserver.
 */
export function reveal(node, options = {}) {
	const { delay = 0, threshold = 0.15 } = options;

	const reduceMotion =
		typeof window !== 'undefined' &&
		window.matchMedia &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (reduceMotion || typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-revealed');
		return {};
	}

	node.classList.add('reveal');
	if (delay) node.style.setProperty('--reveal-delay', `${delay}ms`);

	const observer = new IntersectionObserver(
		(entries, obs) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-revealed');
					obs.unobserve(entry.target);
				}
			});
		},
		{ threshold, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
