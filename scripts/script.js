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
});