const colorSwitcher = (function() {
    const colors = [
        'rgb(47, 152, 137)',
        'rgb(24, 126, 137)',
        'rgb(84, 112, 147)',
        'rgb(130, 95, 133)',
        'rgb(154, 80, 101)',
        'rgb(153, 77, 65)'
    ];

    const shadowOf = (node) => window.getComputedStyle(node).boxShadow;

    const shadowed = [...document.getElementsByTagName('h1')].filter((el) =>
        colors.includes(
            shadowOf(el).match(/rgb.+\)/)[0]
    ));
    
    shadowed.forEach((shadow) => {
            shadow.addEventListener('click', (event) => {
                let pos = colors.indexOf(shadowOf(event.target)
                    .match(/rgb.+\)/)[0]);

                pos = pos === colors.length - 1 ? -1 : pos;
                event.target.style.boxShadow = shadowOf(event.target)
                    .replace(/rgb.+\)/, colors[pos + 1]);
            });
        });
})();