<!-- <footer class="bg-dark py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto">
                        <div class="small m-0 text-white">
                            Copyright &copy; Algobasket 2025 | Made With 🩷 India
                        </div>
                        
                    </div>
                    <div class="col-auto">
                        <a class="link-light small" href="/privacy">Privacy</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="/terms">Terms</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="/contact">Contact</a> 
                    </div>
                </div>
            </div>
        </footer> -->

        <footer class="footer text-white py-4" style="background-color:rgb(0, 0, 5);">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <h2 class="fw-bold text-light"><img src="./assets/logo2.png" /></h2>
                  <p>A platform for open-source and premium products.</p>
                  <p>
                    <i class="bi bi-whatsapp"></i> +91-8638720242 <br>
                    <i class="bi bi-envelope"></i> ask@algobasket.org
                  </p>
                </div>
          
                <div class="col-md-4">
                  <h5>More Info</h5>
                  <ul class="list-unstyled">
                    <li><a href="/contributors" class="text-decoration-none text-light">Contributors</a></li> 
                    <li><a href="/about-us" class="text-decoration-none text-light">About us</a></li>
                    <li><a href="/faq" class="text-decoration-none text-light">FAQ</a></li>
                    <li><a href="/contact-us" class="text-decoration-none text-light">Contact us</a></li>
                   
                  </ul>
                </div>
          
                <div class="col-md-4 text-md-end">
                  <h5>Follow us</h5>
                  <a href="#" class="btn btn-outline-light btn-sm"><i class="bi bi-github"></i></a>
                  <a href="#" class="btn btn-outline-light btn-sm"><i class="bi bi-twitter"></i></a>
                </div>
              </div>
          
              <hr class="text-light">
          
              <div class="text-center">
                <p id="animatedText" class="fw-bold text-light"></p> 
              </div>
            </div>
          </footer>
          
          <script>
            const textElement = document.getElementById("animatedText");
            const texts = ["Made With 🩷 India", "Made For The 🩷 World"];
            let index = 0;
          
            function switchText() {
              textElement.style.opacity = 0; // Fade out
              setTimeout(() => {
                textElement.textContent = texts[index];
                textElement.style.opacity = 1; // Fade in
                index = (index + 1) % texts.length; // Toggle between texts
              }, 500);
            }
          
            setInterval(switchText, 3000); // Switch text every 3 seconds
            switchText(); // Initialize
          </script>
          
          <style>
            #animatedText {
              font-size: 18px;
              transition: opacity 0.5s ease-in-out;
            }
          </style>
                         