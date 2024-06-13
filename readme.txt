npm install -g http-server
http-server

Bootstrap  CSS classes to style elements.

Grid System:

.container: Creates a responsive fixed-width container.
.container-fluid: Creates a full-width container spanning the entire viewport width.
.row: Creates a horizontal row to contain columns.
.col-*: Defines grid columns. Replace * with a number from 1 to 12 to specify the column width for different screen sizes (xs, sm, md, lg, xl).
Typography:

.display-*: Defines display headings. Replace * with numbers from 1 to 4.
.lead: Applies larger font size and lighter weight to lead paragraphs.
.text-*: Applies text color. Replace * with primary, secondary, success, danger, warning, info, light, dark, or muted.
Buttons:

.btn: Applies basic button styles.
.btn-*: Defines different button styles such as primary, secondary, success, danger, warning, info, light, dark, link.
.btn-lg, .btn-sm, .btn-block: Sizes and block-level buttons.
.disabled: Disables a button.
Forms:

.form-control: Applies styles to form controls like inputs, selects, and textareas.
.form-group: Wraps form controls with proper spacing.
.form-check: Wraps form check inputs like checkboxes and radios.
.form-check-input, .form-check-label: Styles for form check inputs and labels.
Navbar:

.navbar: Creates a responsive navbar container.
.navbar-expand-*: Sets the navbar to expand at different breakpoints (sm, md, lg, xl).
.navbar-brand: Styles the navbar brand/logo.
.navbar-toggler: Styles the navbar toggle button for mobile devices.
Alerts:

.alert: Creates an alert box.
.alert-*: Defines different alert styles such as primary, secondary, success, danger, warning, info, light, dark.
.alert-dismissible: Adds a close button to the alert box.
Cards:

.card: Creates a card container.
.card-header, .card-body, .card-footer: Styles for card header, body, and footer.
.card-title, .card-text: Styles for card title and text content.
.card-img-top, .card-img-bottom: Styles for card images.
Modal:

.modal: Creates a modal container.
.modal-dialog: Styles for the modal dialog box.
.modal-content: Styles for the modal content area.
.modal-header, .modal-body, .modal-footer: Styles for modal header, body, and footer.

commonly used Bootstrap components:

Navbar: Create responsive navigation headers with support for branding, navigation links, forms, and more.

Dropdowns: Implement dropdown menus to display a list of links or actions.

Buttons: Style buttons with various sizes, colors, and states such as active, disabled, or loading.

Forms: Use pre-styled form controls like input fields, checkboxes, radio buttons, select menus, and more.

Cards: Display content in flexible and extensible container components.

Modals: Create modal dialogs for displaying content or prompting user input.

Alerts: Inform users about important information with dismissible alert messages.

Tooltips and Popovers: Enhance user experience with interactive tooltips and popovers.

Pagination: Split large sets of content into multiple pages for better organization and navigation.

Carousel: Create responsive image sliders with support for sliding, pausing, and indicators.

Tabs: Implement tabbed navigation to switch between different content sections.

Accordions: Collapse content sections to conserve space and present information in a structured way.

Progress Bars: Visualize the progression of a task with animated progress bars.

Spinners: Show loading indicators to indicate that content is being loaded or processed.

Badges and Labels: Add small, colorful badges to highlight specific information or provide visual feedback.

Icons: Utilize Bootstrap's built-in icon library or integrate third-party icon libraries like Font Awesome.

Tables: Present tabular data with responsive, feature-rich tables that support sorting, pagination, and more.

Images: Enhance images with responsive image classes and utilities for alignment, sizing, and responsiveness.

Breadcrumbs: Display hierarchical navigation paths to help users understand their location within a website.

Jumbotron: Create prominent, full-width container components for showcasing key content or messages.

**********************

jQuery offers a variety of methods to simplify DOM manipulation, event handling, AJAX requests, and more. Here are some commonly used jQuery methods:

DOM Manipulation:

$(selector): Selects elements based on the provided selector.
.text(): Get or set the text content of elements.
.html(): Get or set the HTML content of elements.
.val(): Get or set the value of form elements.
.addClass(): Add one or more classes to elements.
.removeClass(): Remove one or more classes from elements.
.toggleClass(): Toggle one or more classes on elements.
Event Handling:

.click(): Attach a function to the click event of elements.
.change(): Attach a function to the change event of form elements.
.submit(): Attach a function to the submit event of forms.
.keydown(), .keyup(), .keypress(): Attach functions to keyboard events.
.mouseenter(), .mouseleave(): Attach functions to mouse enter and mouse leave events.
.on(): Attach event handlers for one or more events to elements.
CSS Manipulation:

.css(): Get or set CSS properties of elements.
.show(), .hide(), .toggle(): Show, hide, or toggle the visibility of elements.
.fadeIn(), .fadeOut(), .fadeToggle(): Fade in, fade out, or toggle the opacity of elements.
Traversal:

.parent(), .children(): Traverse up and down the DOM tree.
.find(): Find descendant elements matching a selector.
.siblings(): Get the siblings of elements.
.next(), .prev(): Get the next or previous sibling of elements.
AJAX:

$.ajax(): Perform an asynchronous HTTP (Ajax) request.
.load(): Load HTML content from a server and inject it into elements.
.get(), .post(): Perform GET or POST requests.
Utilities:

$.each(): Iterate over arrays and objects.
$.trim(): Remove whitespace from the beginning and end of a string.
$.extend(): Merge the contents of two or more objects together.
Effects:

.slideDown(), .slideUp(), .slideToggle(): Slide elements up or down to show or hide them.
.animate(): Perform custom animations on elements.