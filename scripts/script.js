document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const greenRectangles = document.querySelectorAll('.green-rectangle');
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('mouseover', () => {
            greenRectangles[i].style.width = '54.91px';
        });

        navItems[i].addEventListener('mouseout', () => {
            greenRectangles[i].style.width = '17.97px';
        })
    }
    const controls = document.querySelectorAll(".controls")
    controls.forEach(control => {
        const greenLines = document.createElement('div');
        greenLines.innerHTML = '<div class="green-lines">' +
            '<div class="line1"></div>' +
            '<div class="line2"></div>' +
            '</div>';
        control.addEventListener('mouseover', () => {
            control.parentElement.appendChild(greenLines);
            control.className = 'chosen-controls';
        })

        control.addEventListener('mouseout', () => {
            control.parentElement.removeChild(greenLines);
            control.className = 'controls'
        })
    });

    const services = document.querySelectorAll(".service");

    const serviceLogoClasses = ["branding", "design", "development"];
    const serviceLogoFileNames = ["./img/branding.png", "./img/design.png", "./img/development.png"];    

    for (let i = 0; i < services.length; i++) {
        const readmoreLink = services[i].getElementsByTagName("a")[0];
        const logo = services[i].getElementsByClassName(serviceLogoClasses[i]).item(0);
        
        services[i].addEventListener("mouseover", () => {
            services[i].style.borderBottom = "3px solid #70BF73"
            readmoreLink.style.opacity = 1;
            logo.style.backgroundImage = "url('" + serviceLogoFileNames[i] + "')";
        });

        services[i].addEventListener("mouseout", () => {
            services[i].style.borderBottom = "";
            readmoreLink.style.opacity = 0.5;
            logo.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6))"+
                                        ",url(\"" + serviceLogoFileNames[i] + "\")";
        });

    }

    const designLogo = document.querySelectorAll(".service .design");
    const developmentLogo = document.querySelectorAll(".service .development");
    const brandingLogo = document.querySelectorAll(".service .branding");
});