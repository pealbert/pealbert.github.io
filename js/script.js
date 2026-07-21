/**
 * Taekwon-do Club Main Script
 */
(() => {
	"use strict";

	// ==========================================
	// 1. CONFIG & STATE
	// ==========================================
	const CONFIG = {
		scrollOffset: 80,
		animationSpeed: 300,
	};

	// ==========================================
	// 2. DOM ELEMENTS
	// ==========================================
	const DOM = {
		nav: document.querySelector(".main-nav"),
		navToggle: document.querySelector(".nav-toggle"),
		navLinks: document.querySelectorAll(".nav-link"),
		contactForm: document.querySelector("#contact-form"),
		scheduleTabs: document.querySelectorAll(".tab-btn"),
	};

	// ==========================================
	// 3. MODULES / FEATURE HANDLERS
	// ==========================================

	// --- Mobile Navigation ---
	const Navigation = {
		init() {
			if (!DOM.navToggle) return;

			DOM.navToggle.addEventListener("click", this.toggleMenu);

			// Close menu when clicking a link
			DOM.navLinks.forEach((link) => {
				link.addEventListener("click", () => this.closeMenu());
			});
		},

		toggleMenu() {
			DOM.nav.classList.toggle("is-active");
			DOM.navToggle.setAttribute(
				"aria-expanded",
				DOM.nav.classList.contains("is-active"),
			);
		},

		closeMenu() {
			DOM.nav.classList.remove("is-active");
			DOM.navToggle.setAttribute("aria-expanded", "false");
		},
	};

	// --- Training Schedule Tabs ---
	const ScheduleTabs = {
		init() {
			if (!DOM.scheduleTabs.length) return;

			DOM.scheduleTabs.forEach((btn) => {
				btn.addEventListener("click", (e) => this.switchTab(e.currentTarget));
			});
		},

		switchTab(selectedBtn) {
			const targetGroup = selectedBtn.dataset.target;

			DOM.scheduleTabs.forEach((btn) => btn.classList.remove("active"));
			selectedBtn.classList.add("active");

			document.querySelectorAll(".schedule-group").forEach((group) => {
				group.hidden = group.id !== targetGroup;
			});
		},
	};

	// --- Contact Form ---
	const FormHandler = {
		init() {
			if (!DOM.contactForm) return;

			DOM.contactForm.addEventListener("submit", (e) => this.handleSubmit(e));
		},

		handleSubmit(e) {
			e.preventDefault();
			// Basic validation or fetch submission
			const formData = new FormData(DOM.contactForm);
			console.log("Form submitted:", Object.fromEntries(formData));

			// Show success feedback
			DOM.contactForm.reset();
			alert("Thank you! We will get back to you shortly.");
		},
	};

	// ==========================================
	// 4. INIT / ENTRY POINT
	// ==========================================
	const init = () => {
		Navigation.init();
		ScheduleTabs.init();
		FormHandler.init();
	};

	// Run when DOM is fully loaded
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
