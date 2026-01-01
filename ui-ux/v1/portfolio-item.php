<!DOCTYPE html>
<html lang="en">
    <!-- Header-->
    <?php include 'header.php';?>
    <body class="d-flex flex-column h-100">
        <main class="flex-shrink-0">  
            <!-- Navigation-->
            <?php include 'menu.php';?> 
            <!-- Page Content-->
            <section class="py-5">
                <div class="container px-5 my-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col">
                            <div class="text-center mb-5">
                                <h1 class="fw-bolder">Sunny's Kitchen Suite</h1>
                                <hr>
                                <p class="lead text-muted mx-auto" style="max-width: 700px;">
                                 A powerful ERP solution for bars, restaurants, and kitchens, designed to centralize and optimize operations across multiple locations. With 20+ integrated modules, it streamlines everything from orders and billing to inventory and staff management.
                                </p> 
                            </div>
                        </div>
                        <div class="text-center mb-5">
                            <a class="btn btn-dark" href="#">View Project</a>
                            <a class="btn btn-dark" href="#">Buy Project</a>
                            <a class="btn btn-dark" href="#">Rent SAAS</a>
                            <a class="btn btn-dark" href="#">Technical Summary</a>  
                        </div>
                    </div>
                    <div class="row gx-5">
                        <div class="col-12">
                            <div id="player"></div> 
                            <!-- <img class="img-fluid rounded-3 mb-5" src="https://dummyimage.com/1300x700/343a40/6c757d" alt="Restaurant ERP" /> -->
                        </div>
                        <div class="col-lg-6">
                            <img class="img-fluid rounded-3 mb-5" src="https://dummyimage.com/600x400/343a40/6c757d" alt="Feature Image 1" />
                        </div>
                        <div class="col-lg-6">
                            <img class="img-fluid rounded-3 mb-5" src="https://dummyimage.com/600x400/343a40/6c757d" alt="Feature Image 2" />
                        </div>
                    </div>
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-8">
                            <h1 class="fw-bolder text-center">Key Features & Modules</h1>
                            <ul class="lead fw-normal text-muted"> 
                                <li><strong>Point of Sale (POS):</strong> Advanced billing and order management.</li>
                                <li><strong>Kitchen Display System (KDS):</strong> Digital screens for kitchen staff.</li>
                                <li><strong>Multi-Branch Management:</strong> Centralized dashboard for multiple locations.</li>
                                <li><strong>Inventory Management:</strong> Real-time tracking of stock and ingredients.</li>
                                <li><strong>Customer Management (CRM):</strong> Loyalty programs and personalized promotions.</li>
                                <li><strong>Online Ordering & Delivery:</strong> Integrated with mobile apps.</li>
                                <li><strong>Table Reservations:</strong> Online and in-house booking system.</li>
                                <li><strong>Employee & Payroll Management:</strong> Attendance tracking and salary processing.</li>
                                <li><strong>Financial & Accounting Reports:</strong> Automated financial tracking and tax calculations.</li>
                                <li><strong>AI & Analytics Dashboard:</strong> Predictive insights and sales trends.</li>
                            </ul>
                            
                            <!-- Additional Modules with Descriptions -->
                            <h2 class="fw-bolder mt-4">Detailed Modules</h2>
                            
                            <h5 class="fw-bolder mt-3">Dashboard</h5>
                            <p class="lead fw-normal text-muted">A centralized hub to access key metrics and business insights.</p>
            
                            <h5 class="fw-bolder mt-3">Inventory Panel</h5>
                            <p class="lead fw-normal text-muted">Manage stock levels, suppliers, and purchases.</p>
                            <ul class="lead fw-normal text-muted">
                                <li><strong>Summary:</strong> Overview of current inventory status.</li>
                                <li><strong>Inventory Items:</strong> List and manage all stock items.</li>
                                <li><strong>Category & Sub Category:</strong> Organize items by category.</li>
                                <li><strong>Add Items/Products:</strong> Quickly add new products to inventory.</li>
                                <li><strong>Low In Stock:</strong> Track items running low.</li>
                                <li><strong>Purchase:</strong> Manage incoming stock orders.</li>
                                <li><strong>Suppliers Return:</strong> Handle returns and refunds with suppliers.</li>
                                <li><strong>Invoice:</strong> Generate invoices for transactions.</li>
                                <li><strong>Sales:</strong> View and manage sales data.</li>
                            </ul>
                            
                            <h5 class="fw-bold mt-3">Booking & Reservation</h5>
                            <p class="lead fw-normal text-muted">Manage customer bookings seamlessly.</p>
                            <ul class="lead fw-normal text-muted">
                                <li><strong>Table Availability:</strong> Check and reserve tables in real-time.</li>
                                <li><strong>Recent Booking:</strong> View the latest reservations.</li>
                                <li><strong>All Booking:</strong> Manage all past and upcoming bookings.</li>
                                <li><strong>Create Booking:</strong> Add new customer reservations.</li>
                                <li><strong>Associates/Caller:</strong> Track caller-based bookings.</li>
                            </ul>
            
                            <h5 class="fw-bold mt-3">Orders Management</h5>
                            <p class="lead fw-normal text-muted">Keep track of customer orders.</p>
                            <ul class="lead fw-normal text-muted">
                                <li><strong>Order Summary:</strong> Overview of all orders.</li>
                                <li><strong>Order Listing:</strong> Detailed list of all orders.</li>
                                <li><strong>Order Delivered:</strong> Completed orders tracking.</li>
                                <li><strong>Order Cancelled:</strong> View cancelled orders.</li>
                                <li><strong>All Orders:</strong> Access all order-related data.</li>
                            </ul>
            
                            <h5 class="fw-bold mt-3">Food Menu</h5>
                            <p class="lead fw-normal text-muted">Create and manage your restaurant’s menu.</p>
                            <ul class="lead fw-normal text-muted">
                                <li><strong>Recently Added:</strong> View new menu additions.</li>
                                <li><strong>All Menu Category:</strong> Organize and manage menu categories.</li>
                                <li><strong>Create Menu:</strong> Add new dishes to the menu.</li>
                                <li><strong>All Menu:</strong> Complete list of all menu items.</li>
                            </ul>
                            
                            <h5 class="fw-bold mt-3">Accounting</h5>
                            <p class="lead fw-normal text-muted">Manage business finances efficiently.</p>
                            <ul class="lead fw-normal text-muted">
                                <li><strong>Account Receivable:</strong> Track pending customer payments.</li>
                                <li><strong>Account Payable:</strong> Monitor due payments to suppliers.</li>
                                <li><strong>Billing & Invoicing:</strong> Generate and manage invoices.</li>
                                <li><strong>Purchase Order Management:</strong> Handle supplier purchase orders.</li>
                                <li><strong>Payroll Management:</strong> Process employee salaries and benefits.</li>
                                <li><strong>Receipt Filing:</strong> Store and retrieve digital receipts.</li>
                                <li><strong>Tax Management:</strong> Automate tax calculations.</li>
                                <li><strong>Expense Tracking:</strong> Monitor business expenses.</li>
                                <li><strong>Petty Cash:</strong> Manage small cash transactions.</li>
                            </ul>
                            
                            <h5 class="fw-bold mt-3">Settings</h5>
                            <p class="lead fw-normal text-muted">Customize system preferences.</p>
                            <ul class="lead fw-normal text-muted">
                                <li><strong>General Settings:</strong> Configure main system settings.</li>
                                <li><strong>Payment Settings:</strong> Manage payment options.</li>
                                <li><strong>Tax Settings:</strong> Adjust tax rates.</li>
                                <li><strong>Notification Settings:</strong> Set up alerts and reminders.</li>
                            </ul>
                            
                            <div class="text-center mb-5">
                                <a class="btn btn-dark" href="#">View Project</a>
                                <a class="btn btn-dark" href="#">Buy Project</a>
                                <a class="btn btn-dark" href="#">Rent SAAS</a>
                                <a class="btn btn-dark" href="#">Technical Summary</a>  
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </main>
        <!-- Footer-->
        <?php include 'footer.php';?>
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>

        <script>
            function onYouTubeIframeAPIReady() {
              new YT.Player('player', {
                width: "100%",
                height: "700",
                videoId: "tpieNIMSBuQ", // Replace with your YouTube video ID
                playerVars: {
                  "autoplay": 0,  // Auto-plays the video
                  "mute": 0,
                  "modestbranding": 1, // Minimizes YouTube branding
                  "rel": 0,  // Prevents showing related videos
                  "controls": 0, // Hides controls
                  "showinfo": 0 // Hides title and uploader info (deprecated)
                }
              });
            }
          
            // Load YouTube API
            let tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            let firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          </script>
    </body>
</html>
