 /* === COLOR THEMES CONFIGURATION === */
        
        /* 1. DARK MODE (Default - Dark Brown & Gold) */
        body[data-theme="dark"] {
            --bg-main: #030201;
            --bg-card: rgba(14, 9, 6, 0.85);
            --bg-input: #0a0604;
            --accent: #7226ff;
            --accent-light: #ba8af9;
            --text-main: #f4f4f4;
            --text-muted: #fcfcfc;
            --circle-glow: rgba(102, 55, 212, 0.2);

            --color-one:rgba(0, 102, 255, 0.89);
            --color-second:rgba(68, 0, 255, 0.808);
            --color-third:rgb(119, 0, 255);
            --text-shdow:rgb(255, 255, 255);
        }

        /* 2. LIGHT MODE (Elegant Cream & Rich Brown) */
        body[data-theme="light"] {
            --bg-main: #fcf9f5;
            --bg-card: rgba(255, 255, 255, 0.9);
            --bg-input: #f0eae1;
            --accent: #8c6239;
            --accent-light: #b08257;
            --text-main: #1a110c;
            --text-muted: #666;
            --circle-glow: rgba(140, 98, 57, 0.15);
            
            --color-one:rgba(255, 187, 0, 0.89);
            --color-second:rgba(255, 208, 0, 0.904);
            --color-third:rgba(231, 150, 0, 0.89);
        }

        /* 3. DROWN MODE (Muted Earthy Brown & Gold) */
        body[data-theme="drown"] {
            --bg-main: #1c1410;
            --bg-card: rgba(44, 30, 23, 0.85);
            --bg-input: #120d0a;
            --accent: #c5a059;
            --accent-light: #e5c385;
            --text-main: #e8e2dc;
            --text-muted: #9c9087;
            --circle-glow: rgba(197, 160, 89, 0.15);
            
            --color-one:rgb(189, 107, 0);
            --color-second:rgba(134, 54, 0, 0.808);
            --color-third:rgb(255, 136, 0);
        }

        /* 4. BLUE MODE (Deep Royal Blue & Gold/Silver) */
        body[data-theme="blue"] {
            --bg-main: #020714;
            --bg-card: rgba(10, 23, 50, 0.85);
            --bg-input: #051026;
            --accent: #7674ff;
            --accent-light: #0059ff;
            --text-main: #e6f0fa;
            --text-muted: #788fa8;
            --circle-glow: rgba(55, 84, 212, 0.15);
            
            --color-one:rgba(52, 133, 255, 0.89);
            --color-second:rgba(0, 89, 255, 0.808);
            --color-third:rgb(38, 0, 255);
        }

        /* 5. BLUESOFT MODE (Soft Calm Blue & Silver) */
        body[data-theme="bluesoft"] {
            --bg-main: #0f172a;
            --bg-card: rgba(30, 41, 59, 0.8);
            --bg-input: #1e293b;
            --accent: #38bdf8;
            --accent-light: #7dd3fc;
            --text-main: #f1f5f9;
            --text-muted: #94a3b8;
            --circle-glow: rgba(56, 189, 248, 0.2);
            
            --color-one:rgba(0, 40, 218, 0.89);
            --color-second:rgba(77, 199, 255, 0.925);
            --color-third:rgb(0, 132, 255);
        }

        /* 6. DARK BLUE MODE (Midnight Blue & Platinum) */
        body[data-theme="darkblue"] {
            --bg-main: #050b14;
            --bg-card: rgba(13, 24, 41, 0.85);
            --bg-input: #081220;
            --accent: #e2e8f0;
            --accent-light: #ffffff;
            --text-main: #cbd5e1;
            --text-muted: #64748b;
            --circle-glow: rgba(226, 232, 240, 0.15);
            
            --color-one:rgba(255, 255, 255, 0.89);
            --color-second:rgba(193, 225, 255, 0.966);
            --color-third:rgb(132, 195, 255);
        }
                
        .main{
             background: linear-gradient(
                                        120deg,
                                        var(--color-one),
                                        var(--color-second),
                                        var( --color-third),
                                        var(--color-second),
                                        var(--color-one)
                                );
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            animation: movegradient 4s linear infinite;
            background-size: 200% 200%;
            text-shadow: 0 0 20px var(--text-shadow);
        }
    @keyframes movegradient {
                            0%{
                                background-position: 0% 50%;
                            }
                            100%{
                                background-position: 200% 20%;
                        }
        }

        *[data-theme="dark"]  ::selection{
            color: rgb(255, 255, 255);
            background-color: #000a61;
        }

        /* 2. LIGHT MODE (Elegant Cream & Rich Brown) */
        *[data-theme="light"]  ::selection{
            color: rgb(255, 255, 255);
            background-color: #4b3100;
        }

        /* 3. DROWN MODE (Muted Earthy Brown & Gold) */
        *[data-theme="drown"]  ::selection{
            color: rgb(206, 177, 15);
            background-color: #4b3100;
        }

        /* 4. BLUE MODE (Deep Royal Blue & Gold/Silver) */
        *[data-theme="blue"]  ::selection{
            color: rgb(182, 208, 255);
            background-color: #00274b;
        }

        /* 5. BLUESOFT MODE (Soft Calm Blue & Silver) */
        *[data-theme="bluesoft"]  ::selection{
            color: rgb(83, 221, 255);
            background-color: #00274b;
        }

        /* 6. DARK BLUE MODE (Midnight Blue & Platinum) */
        *[data-theme="darkblue"] ::selection{
            color: rgb(245, 252, 255);
            background-color: #001224;
        }
        /* Basic Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
        }

        body {
            background-color: var(--bg-main);
            color: var(--text-main);
            overflow-x: hidden;
            scroll-behavior: smooth;
            position: relative;
        }

        /* === Background Sharp Floating Circles === */
        .bg-circles-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        }

        .circle {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, var(--circle-glow) 0%, transparent 70%);
            border: 1px solid rgba(255, 255, 255, 0.03);
            filter: blur(10px);
            animation: floatAround 20s infinite ease-in-out alternate;
        }

        .circle-1 { width: 450px; height: 450px; top: 10%; left: 5%; animation-duration: 25s; }
        .circle-2 { width: 350px; height: 350px; bottom: 15%; right: 10%; animation-duration: 18s; animation-delay: -4s; }
        .circle-3 { width: 500px; height: 500px; top: 50%; left: 60%; animation-duration: 30s; animation-delay: -8s; }

        @keyframes floatAround {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(60px, 40px) scale(1.05); }
            100% { transform: translate(-40px, 70px) scale(0.95); }
        }

        /* JS Spotlight Glow */
        .spotlight {
            position: absolute;
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, var(--circle-glow) 0%, transparent 60%);
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 1;
        }

        /* Header & Theme Controls */
        header {
            background-color: var(--bg-main);
            opacity: 0.96;
            padding: 15px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(10px);
            flex-wrap: wrap;
            gap: 15px;
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            color: var(--accent);
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        /* Mode Switcher Buttons */
        .theme-switcher {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .theme-btn {
            padding: 6px 12px;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: bold;
            border: 1px solid rgba(255, 255, 255, 0.15);
            background-color: rgba(0,0,0,0.2);
            color: var(--text-main);
            cursor: pointer;
            border-radius: 4px;
            transition: all 0.3s;
        }

        .theme-btn:hover, .theme-btn.active {
            border-color: var(--accent);
            background-color: var(--accent);
            color: var(--bg-main);
        }

        /* Navigation Links */
        nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
        }

        nav ul li a {
            color: var(--text-main);
            text-decoration: none;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        nav ul li a:hover { color: var(--accent); }

        /* Main Sections */
        section {
            padding: 120px 40px 60px;
            position: relative;
            z-index: 10;
        }

        .section-title {
            text-align: center;
            font-size: 36px;
            color: var(--accent);
            margin-bottom: 50px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        /* Hero Section */
        .hero {
            height: 85vh;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            gap: 60px;
            padding: 0 8%;
        }
        .hero-content{
            flex: 1;
        }
        .hero-img{
            flex:1;
        }

        .hero h1 {
            font-size: 50px;
            color: var(--accent);
            margin-bottom: 20px;
            letter-spacing: 2px;
            text-align: left;
        }

        .hero p {
            font-size: 18px;
            max-width: 600px;
            color: var(--text-muted);
            margin-bottom: 35px;
            line-height: 1.6;
            text-align: left;
        }
        @media (max-width:900px) {
                .hero {
                flex-direction: column;
                align-items: center;
                padding: 60px 5%;
            }
                .hero h1, .hero p{
                    text-align: center;
                }
        }
        .btn-accent {
            padding: 12px 35px;
            background-color: transparent;
            color: var(--accent);
            border: 1px solid var(--accent);
            font-size: 15px;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s;
        }

        .btn-accent:hover {
            background-color: var(--accent);
            color: var(--bg-main);
            box-shadow: 0 0 15px var(--circle-glow);
        }

        /* === Image Gallery Grid === */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .gallery-box {
            background-color: var(--bg-card);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 6px;
            overflow: hidden;
            transition: all 0.4s ease;
            backdrop-filter: blur(5px);
        }

        .gallery-box:hover {
            transform: translateY(-8px);
            border-color: var(--accent);
            box-shadow: 0 12px 25px rgba(0,0,0,0.5);
        }

        .image-container {
            width: 100%;
            height: 220px;
            background-color: rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Placeholder representation for actual images */
        .image-placeholder {
            width: 90%;
            height: 90%;
            border: 1px dashed var(--text-muted);
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--text-muted);
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        /* Once you have links, you can use real <img> tags styled like this: */
        .gallery-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }
        .gallery-box:hover img { transform: scale(1.08); }

        .image-info { padding: 20px; }
        .image-info h3 { color: var(--accent-light); font-size: 18px; margin-bottom: 8px; }
        .image-info p { color: var(--text-muted); font-size: 13px; line-height: 1.5; }

        /* About Section */
        .about-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
            color: var(--text-muted);
            line-height: 1.8;
            font-size: 16px;
        }

        /* Contact Section */
        .contact-form {
            max-width: 600px;
            margin: 0 auto;
            background-color: var(--bg-card);
            padding: 40px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 6px;
        }

        .form-group { margin-bottom: 20px; }
        .form-group input, .form-group textarea {
            width: 100%;
            padding: 15px;
            background-color: var(--bg-input);
            border: 1px solid rgba(255,255,255,0.1);
            color: var(--text-main);
            font-size: 15px;
            outline: none;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: var(--accent); }
        .form-group textarea { height: 120px; resize: none; }

        .submit-btn {
            width: 100%;
            padding: 15px;
            background-color: var(--accent);
            color: var(--bg-main);
            border: none;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            text-transform: uppercase;
        }
        .submit-btn:hover { background-color: var(--accent-light); }

        /* Multi-Column Footer */
        footer {
            backdrop-filter: blur(14px);
            padding: 80px 40px 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            position: relative;
            z-index: 10;
        }

        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            margin-bottom: 50px;
        }

        .footer-col h4 {
            color: var(--accent);
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 20px;
        }

        .footer-col p, .footer-col ul li a {
            color: var(--text-muted);
            font-size: 14px;
            line-height: 1.6;
            text-decoration: none;
        }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 10px; }
        .footer-col ul li a:hover { color: var(--accent); padding-left: 5px; }

        .footer-bottom {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            color: var(--text-muted);
            font-size: 13px;
        }

        /* === Scroll Animation (Continuous Reveal) === */
        .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s ease-out;
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Responsive UI Adjustments */
        @media (max-width: 900px) {
            header { padding: 15px 20px; justify-content: center; text-align: center; }
            section { padding: 160px 20px 40px; }
            .hero h1 { font-size: 36px; }
        }
        .Whatsapp-link svg{
        width: 100%;
        height: 100%;
        }
        .Whatsapp-link{
        width: 120px;
        height: 120px;
        color: #25d366;
        }
        .Telegram-link{
        width: 120px;
        height: 120px;
        color: rgb(0, 170, 255);
        }
        .Facebook-link{
        width: 120px;
        height: 120px;
        color: rgb(0, 119, 255);
        }
        #contact{
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            justify-content: center;
            padding: 50px 20px;
            text-align: center;
            margin-bottom: 50px;
        }
        .box{
            flex: 0 1 250px;
        }
        .box img,
        .box svg{
            margin-bottom: 15px;
            transition: transform 0.3s;
        }
        .box img:hover,
        .box svg:hover{
            transform: scale(1.1);
        }
         #snow-canvas { 
            position: fixed; 
            inset: 0; 
            z-index: 1; 
            pointer-events: none; 
        }
        .image{
            animation: floatupdown 3s ease-in-out infinite;
        }
        @keyframes floatupdown {
            0%{
                transform: translateY(0px);
            }
            50%{
                transform: translateY(-15px);
            }
            100%{
                transform: translateY(0px);
            }
        }