 /* 1. Theme Controller Mechanism */
        function setTheme(themeName) {
            // Apply data-theme attribute to body tag
            document.body.setAttribute('data-theme', themeName);
            
            // Highlight active button style inside header panel
            const buttons = document.querySelectorAll('.theme-btn');
            buttons.forEach(btn => {
                if(btn.innerText.toLowerCase() === themeName.toLowerCase()) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        /* 2. Dynamic Spotlight Tracker */
        const spotlight = document.createElement('div');
        spotlight.classList.add('spotlight');
        document.body.appendChild(spotlight);

        document.addEventListener('mousemove', (e) => {
            spotlight.style.left = e.pageX + 'px';
            spotlight.style.top = e.pageY + 'px';
        });

        /* 3. Continuous Multi-Directional Scroll Intersections */
        const reveals = document.querySelectorAll('.reveal');
        const scrollObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active'); // resets when user goes back up
                }
            });
        }, { threshold: 0.08 });

        reveals.forEach(reveal => { scrollObserver.observe(reveal); });
        // Snow particles
                const canvas = document.getElementById('snow-canvas');
                const ctx = canvas.getContext('2d');
                let flakes = [];
                function resize() { 
                    canvas.width = window.innerWidth; 
                    canvas.height = window.innerHeight; 
                }
                resize(); 
                window.addEventListener('resize', resize);
                for (let i = 0; i < 90; i++) 
                flakes.push(
                                { 
                                    x: Math.random()*canvas.width, 
                                    y: Math.random()*canvas.height, 
                                    r: Math.random()*2.5+1, 
                                    dx: Math.random()*0.4-0.2, 
                                    dy: Math.random()*0.8+0.4, 
                                    o: Math.random()*0.5+0.3 
                                }
                            );
                function drawSnow() {
                    ctx.clearRect(
                        0,0,canvas.width,canvas.height
                    );
                    flakes.forEach(
                        f => { 
                                ctx.beginPath(); 
                                ctx.arc(f.x,f.y,f.r,0,Math.PI*2); 
                                ctx.fillStyle=`rgba(255,255,255,${f.o})`; 
                                ctx.fill(); 
                                f.x+=f.dx; 
                                f.y+=f.dy; 
                                if(f.y>canvas.height){
                                    f.y=-5;
                                    f.x=Math.random()*canvas.width;
                                } 
                                if(
                                    f.x>canvas.width
                                )
                                f.x=0; 
                                if(f.x<0)
                                f.x=canvas.width; 
                            }
                        );
                    requestAnimationFrame(drawSnow);
                }
                drawSnow();