<head>
        <meta charset="utf-8" />
        <meta name="robots" content="noindex, nofollow">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Algobasket</title>  
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Bootstrap icons-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
           
        <!-- Core theme CSS (includes Bootstrap)-->

        <link href="css/styles.css" rel="stylesheet" /> 
        <style> 
            .bg-dark {
            --bs-bg-opacity: 1;
            background-color: rgb(2 10 18) !important;
        }
        .dropdown-menu {
            background-color:rgb(255, 255, 255);
            border: 1px solid black;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
            position: relative;
            transform: translateY(10px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease-in-out;
            width: 250px;
            padding: 10px;
        }
        .nav-item.dropdown:hover .dropdown-menu {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        .dropdown-menu::before {
            content: "";
            position: absolute;
            top: -10px;
            left: 20px;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #212529;
        }
        .dropdown-menu a {
            color: #343a40;
            padding: 12px 20px;
            transition: background 0.3s;
            display: block;
        } 
        .dropdown-menu a:hover {
            background-color: #343a40;
            color: white;
        }  
        </style>
         <style>
            /* Accordion Button Styling */
            .accordion-button {
                background-color: rgb(2 10 18) !important;
                color: white;
                font-weight: 600;
                transition: background-color 0.3s ease;
            }

            .accordion-button:not(.collapsed) {
                background-color: #0056b3;
                color: #e9ecef;
            }

            /* Smooth Transition for Collapse */
            .accordion-collapse {
                transition: all 0.3s ease;
            }

            /* Hover Effects */
            .accordion-button:hover {
                background-color: #0056b3;
            }

            /* Accordion Item */
            .accordion-item {
                border: 1px solid #ddd;
                border-radius: 8px;
                margin-bottom: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

            /* Accordion Header */
            .accordion-header {
                background-color: #f7f7f7;
                padding: 1rem;
                border-radius: 8px 8px 0 0;
            }

            /* Accordion Body */
            .accordion-body {
                background-color: #ffffff;
                padding: 1.5rem;
                font-size: 1rem;
                line-height: 1.6;
            }

            /* Adding Smooth Shadow on Hover */
            .accordion-item:hover {
                box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            }

            /* Title Styling */
            h2 {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-weight: 700;
                color: #333;
                font-size: 1.75rem;
                margin-bottom: 20px;
            }

            /* Small Animation for Accordion Body */
            .accordion-collapse {
                animation: slideDown 0.5s ease-out;
            }

            @keyframes slideDown {
                0% {
                    transform: translateY(-10px);
                    opacity: 0;
                }
                100% {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            /* Mobile Responsiveness */
            @media (max-width: 767px) {
                .accordion-body {
                    font-size: 0.95rem;
                    padding: 1rem;
                }
            }    
        </style>

        <style>
           /* Chat window initially hidden */
        .chat-window {
            position: fixed;
            top: 50%;
            right: -320px; /* Initially hidden */
            width: 300px;
            height: 600px;
            background: #f1f1f1;
            border-radius: 10px;
            padding: 20px;
            transition: right 0.3s ease-in-out;
            transform: translateY(-50%);
            box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);
        }

        /* Show chat window */
        .chat-window.active {
            right: 10px;
        }

        /* Chat button */
        .chat-button {
            position: fixed;
            top: 50%;
            right: 10px; 
            background: #007bff;
            color: #fff;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            transform: translateY(-50%);
        }

        /* Close button (inside chat window) */
        .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: black;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 50%;
            font-size: 16px;
            line-height: 16px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25px;
            height: 25px;
            transition: background 0.3s ease;
        }

        .close-btn:hover {
            background: darkred;
        } 

        #chatMessages {
            height: 480px;
            overflow-y: auto;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background: #f9f9f9;
            font-size:14px
      }
      #chatMessages p{
        font-size:14px;
        margin-bottom:0
      }
        </style> 
    </head>