<script>
	import { site } from '$lib/site.js';
	import ImageSlot from '$lib/components/ImageSlot.svelte';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let subject = $state('');
	let message = $state('');

	const directionsUrl =
		'https://www.google.com/maps/dir/?api=1&destination=' +
		encodeURIComponent(`${site.address.street}, ${site.address.city}`);

	function sendMessage(event) {
		event.preventDefault();

		const lines = [
			`Name: ${name}`,
			`Email: ${email}`,
			`Phone: ${phone}`,
			'',
			message
		];

		const mailSubject = subject.trim() ? subject.trim() : 'Website inquiry';
		const href =
			`mailto:${site.email}` +
			`?subject=${encodeURIComponent(mailSubject)}` +
			`&body=${encodeURIComponent(lines.join('\n'))}`;

		window.location.href = href;
	}
</script>

<svelte:head>
	<title>Contact | John F. Gelson — Mediation & Resolution Services</title>
	<meta
		name="description"
		content="Contact John F. Gelson to discuss your case. Office in Little Silver, New Jersey, serving clients throughout New Jersey and New York. All inquiries are confidential."
	/>
</svelte:head>

<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<p class="eyebrow">Contact</p>
			<h1>Let&rsquo;s Start a<br />Conversation.</h1>
			<span class="rule"></span>
			<p class="lede">
				John Gelson is available to discuss your case and explore how mediation can help you reach a
				practical resolution.
			</p>
		</div>
		<div class="hero-media">
			<ImageSlot caption="Office interior — desk, framed art, and legal volumes" ratio="4 / 3" />
		</div>
	</div>
</section>

<section class="section connect">
	<div class="container connect-grid">
		<div class="info">
			<p class="eyebrow">Contact Information</p>
			<span class="rule"></span>

			<ul class="info-list">
				<li>
					<span class="info-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
					</span>
					<address>{site.address.street}<br />{site.address.city}</address>
				</li>
				<li>
					<span class="info-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 1-2z"/></svg>
					</span>
					<div>
						<a href="tel:{site.phone.replace(/[^0-9]/g, '')}">{site.phone}</a>
						<span class="fax">Fax: {site.fax}</span>
					</div>
				</li>
				<li>
					<span class="info-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
					</span>
					<a href="mailto:{site.email}">{site.email}</a>
				</li>
				<li>
					<span class="info-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg>
					</span>
					<a href="https://{site.website}" target="_blank" rel="noreferrer">{site.website}</a>
				</li>
			</ul>
		</div>

		<div class="form-wrap">
			<p class="eyebrow">Send a Message</p>
			<span class="rule"></span>

			<form onsubmit={sendMessage}>
				<div class="row">
					<label class="field">
						<span class="sr-only">Your Name</span>
						<input bind:value={name} type="text" name="name" placeholder="Your Name" required />
					</label>
					<label class="field">
						<span class="sr-only">Your Email</span>
						<input bind:value={email} type="email" name="email" placeholder="Your Email" required />
					</label>
				</div>
				<label class="field">
					<span class="sr-only">Phone Number</span>
					<input bind:value={phone} type="tel" name="phone" placeholder="Phone Number" />
				</label>
				<label class="field">
					<span class="sr-only">Subject</span>
					<input bind:value={subject} type="text" name="subject" placeholder="Subject" />
				</label>
				<label class="field">
					<span class="sr-only">Message</span>
					<textarea bind:value={message} name="message" rows="5" placeholder="How can we help you?" required
					></textarea>
				</label>

				<button class="btn" type="submit">Send Message</button>
				<p class="confidential">All inquiries are confidential.</p>
			</form>
		</div>
	</div>
</section>

<section class="office">
	<div class="office-grid">
		<div class="map">
			<ImageSlot caption="Map — Little Silver, New Jersey" ratio="1 / 1" rounded={false} />
		</div>
		<div class="office-copy">
			<div class="container--narrow office-inner">
				<p class="eyebrow">Our Office</p>
				<span class="rule"></span>
				<p>
			Conveniently located in Little Silver, New Jersey, serving clients throughout New Jersey
				and New York.
				</p>
				<a class="btn btn--ghost" href={directionsUrl} target="_blank" rel="noreferrer">
					Get Directions
				</a>
			</div>
		</div>
	</div>
</section>

<section class="section-dark closing">
	<div class="container">
		<p class="closing-line">Experienced mediation. Practical solutions. Efficient outcomes.</p>
		<span class="rule rule--center"></span>
	</div>
</section>

<style>
	.hero {
		background: linear-gradient(180deg, var(--off-white), var(--warm-gray));
		border-bottom: 1px solid var(--hairline);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: clamp(2rem, 5vw, 4rem);
		padding-block: clamp(3rem, 6vw, 4.5rem);
	}

	.hero-copy h1 {
		color: var(--navy);
	}

	.connect {
		background: #fff;
	}

	.connect-grid {
		display: grid;
		grid-template-columns: 0.85fr 1.15fr;
		gap: clamp(2.5rem, 6vw, 5rem);
		align-items: start;
	}

	.info-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.info-list li {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--hairline);
	}

	.info-list li:last-child {
		border-bottom: 0;
		padding-bottom: 0;
	}

	.info-icon {
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		padding: 10px;
		border-radius: 50%;
		background: var(--warm-gray);
		color: var(--navy);
	}

	.info-icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.info-list address {
		font-style: normal;
		line-height: 1.55;
	}

	.info-list a {
		transition: color 0.2s ease;
		display: block;
	}

	.info-list a:hover {
		color: var(--gold);
	}

	.fax {
		display: block;
		color: var(--text-muted);
		font-size: 0.92rem;
		margin-top: 0.15rem;
	}

	.field {
		display: block;
		margin-bottom: 1rem;
	}

	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.row .field {
		margin-bottom: 1rem;
	}

	input,
	textarea {
		width: 100%;
		font-family: var(--font-body);
		font-size: 0.98rem;
		color: var(--charcoal);
		background: var(--off-white);
		border: 1px solid var(--hairline);
		border-radius: var(--radius);
		padding: 0.9rem 1rem;
		transition:
			border-color 0.2s ease,
			background 0.2s ease;
	}

	textarea {
		resize: vertical;
		min-height: 120px;
	}

	input::placeholder,
	textarea::placeholder {
		color: #9a9ea6;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--gold);
		background: #fff;
	}

	.confidential {
		margin: 1rem 0 0;
		font-size: 0.85rem;
		color: var(--text-muted);
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.office-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: stretch;
	}

	.map :global(.frame) {
		height: 100%;
	}

	.office-copy {
		background: var(--off-white);
		display: flex;
		align-items: center;
		padding: clamp(2.5rem, 6vw, 5rem) var(--gutter);
	}

	.office-inner {
		max-width: 460px;
	}

	.office-copy p {
		color: var(--text-muted);
		margin-bottom: 1.75rem;
	}

	.closing {
		text-align: center;
		padding-block: clamp(3rem, 6vw, 5rem);
	}

	.closing-line {
		font-family: var(--font-heading);
		font-size: clamp(1.4rem, 3vw, 2.1rem);
		color: var(--text-on-dark);
		margin: 0;
	}

	@media (max-width: 860px) {
		.hero-grid,
		.connect-grid,
		.office-grid {
			grid-template-columns: 1fr;
		}
		.map {
			min-height: 320px;
		}
	}
</style>
