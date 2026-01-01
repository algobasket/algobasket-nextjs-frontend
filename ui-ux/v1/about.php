<!DOCTYPE html>
<html lang="en">
    <!-- Header-->
    <?php include 'header.php';?> 
    <body class="d-flex flex-column">
        <main class="flex-shrink-0">
            <!-- Navigation-->
            <?php include 'menu.php';?>
            <!-- Header-->
            <header class="py-5">
                <div class="container px-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-xxl-6">
                            <div class="text-center my-5">
                                <h1 class="fw-bolder mb-3">Building Together, Sharing the Future</h1>
                                <p class="lead fw-normal text-muted mb-4">Great things happen when people share ideas. Algobasket is all about open-source innovation—where developers, creators, and problem-solvers come together to build tools that make a difference. No gatekeeping, no limits—just pure collaboration.</p>
                                <a class="btn btn-dark btn-lg" href="#scroll-target">Read our story</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- About section one-->
            <section class="py-5 bg-light" id="scroll-target">
                <div class="container px-5 my-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6"><img class="img-fluid rounded mb-5 mb-lg-0" src="./assets/Rust in 100 Seconds 1-3 screenshot.png" alt="..." /></div>
                        <div class="col-lg-6">
                            <h2 class="fw-bolder">How It All Started</h2>
                            <p class="lead fw-normal text-muted mb-0">It all began with a simple idea: what if building and sharing software was easier for everyone? A few passionate developers came together to create Algobasket—a space where anyone can contribute, learn, and create something amazing. Now, we're growing fast, and the journey is just getting started.</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- About section two-->
            <section class="py-5">
                <div class="container px-5 my-5">
                    <div class="row gx-5 align-items-center"> 
                        <div class="col-lg-6 order-first order-lg-last"><img class="img-fluid rounded mb-5 mb-lg-0" src="./assets/Rust in 100 Seconds 0-26 screenshot.png" alt="..." /></div>
                        <div class="col-lg-6">
                            <h2 class="fw-bolder">Where We’re Headed</h2>
                            <p class="lead fw-normal text-muted mb-0">We're always experimenting, learning, and improving. The goal? To create powerful, open-source tools that help people do more. Whether it's automation, APIs, or creative software, we're here to make tech more accessible and community-driven.</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Team members section-->
            <section class="py-5 bg-light">
                <div class="container px-5 my-5">
                    <div class="text-center">
                        <h2 class="fw-bolder">Our Open Source Contributors</h2>
                        <p class="lead fw-normal text-muted mb-5">Collaborate, Contribute, Create.</p>
                    </div>
                    <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        <div class="col mb-5 mb-5 mb-xl-0">
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" src="./assets/12.png" alt="..." style="width:200px"/>
                                <h5 class="fw-bolder">Algobasket</h5>
                                <div class="fst-italic text-muted">Founder & CTO</div>
                            </div>
                        </div> 
                        <div class="col mb-5 mb-5 mb-xl-0"> 
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" src="./assets/15.png" alt="..." style="width:200px" />
                                <h5 class="fw-bolder">Lavit Dubey</h5>
                                <div class="fst-italic text-muted">Project Manager</div>
                            </div>
                        </div>
                        <div class="col mb-5 mb-5 mb-sm-0">
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" src="./assets/20.png" alt="..." style="width:200px" />
                                <h5 class="fw-bolder">Shashank Dubey</h5>
                                <div class="fst-italic text-muted">Marketing & Finance</div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" src="./assets/16.png" alt="..." style="width:200px" />
                                <h5 class="fw-bolder">Kripa</h5>
                                <div class="fst-italic text-muted">Contributor</div>
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
    </body>
</html>
