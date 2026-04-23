(function () {
    'use strict';

    // Sticky CTA Bar - show after scrolling past hero
    const stickyBar = document.getElementById('sticky-cta-bar');
    const heroSection = document.getElementById('home');

    if (stickyBar && heroSection) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    stickyBar.classList.add('visible');
                } else {
                    stickyBar.classList.remove('visible');
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(heroSection);
    }

    // Dismissed state for sticky bar (session storage)
    const closeBtn = document.querySelector('.sticky-cta-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            sessionStorage.setItem('sticky-cta-dismissed', 'true');
        });
    }

    // Check if previously dismissed
    if (sessionStorage.getItem('sticky-cta-dismissed') === 'true' && stickyBar) {
        stickyBar.style.display = 'none';
    }

    // ===== KEYBOARD NAVIGATION SUPPORT =====
    // Skip to content shortcut (Alt+S)
    document.addEventListener('keydown', function (e) {
        if (e.key === 's' && e.altKey) {
            e.preventDefault();
            const mainContent = document.querySelector('#home');
            if (mainContent) mainContent.focus();
        }
    });

    // Add tabindex="-1" to section headings for skip navigation
    document.querySelectorAll('section[id]').forEach(function (section) {
        section.setAttribute('tabindex', '-1');
    });

    // Escape key handler — close mobile menu, dismiss sticky CTA
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            const menuBtn = document.querySelector('.mobile-menu-btn');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
            // Dismiss sticky CTA bar
            const stickyBar = document.querySelector('.sticky-cta-bar');
            if (stickyBar) {
                stickyBar.style.display = 'none';
            }
        }
    });

    // ===== FORM VALIDATION SYSTEM =====
    (function initFormValidation() {
        var forms = document.querySelectorAll('form');

        forms.forEach(function (form) {
            var inputs = form.querySelectorAll('input, textarea, select');
            var submitBtn = form.querySelector('input[type="submit"], button[type="submit"]');

            inputs.forEach(function (input) {
                // Validate on blur
                input.addEventListener('blur', function () {
                    validateField(this);
                });

                // Validate on input (after first blur)
                input.addEventListener('input', function () {
                    if (this.dataset.touched === 'true') {
                        validateField(this);
                    }
                });

                // Mark as touched on focus
                input.addEventListener('focus', function () {
                    this.dataset.touched = 'true';
                });
            });

            // Validate on submit
            form.addEventListener('submit', function (e) {
                var isValid = true;

                inputs.forEach(function (input) {
                    if (!validateField(input)) {
                        isValid = false;
                    }
                });

                if (!isValid) {
                    e.preventDefault();
                    // Focus first invalid field
                    var firstError = form.querySelector('.input--error, [aria-invalid="true"]');
                    if (firstError) firstError.focus();
                    return;
                }

                // Show loading state on submit button
                if (submitBtn) {
                    submitBtn.classList.add('button--loading');
                    submitBtn.disabled = true;
                }
            });
        });

        function validateField(field) {
            // Clear previous state
            field.classList.remove('input--error', 'input--success');
            field.removeAttribute('aria-invalid');
            var existingError = field.parentElement.querySelector('.form-error-message');
            if (existingError) existingError.remove();

            // Skip disabled/hidden fields
            if (field.disabled || field.type === 'hidden') return true;

            // Required check
            if (field.required && !field.value.trim()) {
                showFieldError(field, 'This field is required');
                return false;
            }

            // Email validation
            if (field.type === 'email' && field.value.trim()) {
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value.trim())) {
                    showFieldError(field, 'Please enter a valid email address');
                    return false;
                }
            }

            // Min length
            if (field.minLength > 0 && field.value.length < field.minLength) {
                showFieldError(field, 'Minimum ' + field.minLength + ' characters required');
                return false;
            }

            // All good
            if (field.value.trim()) {
                field.classList.add('input--success');
            }
            return true;
        }

        function showFieldError(field, message) {
            field.classList.add('input--error');
            field.setAttribute('aria-invalid', 'true');
            field.setAttribute('aria-describedby', field.id + '-error');

            // Create error message
            var errorEl = document.createElement('div');
            errorEl.id = field.id + '-error';
            errorEl.className = 'form-error-message text-sm mt-1';
            errorEl.setAttribute('role', 'alert');
            errorEl.textContent = message;
            field.parentElement.appendChild(errorEl);
        }
    })();
})();
