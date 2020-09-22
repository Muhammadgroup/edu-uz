
export function mobileMenu() {
    const $menu = document.querySelector('[data-toggle="menu"]');
    const $sidebar = document.querySelector('[data-area="sidebar"]');
    const $close = document.querySelectorAll('[data-toggle="close"]')

    $menu.addEventListener('click', () => {
        $sidebar.classList.add('active');
        $close.forEach(el => {
            el.classList.add('active')
        })
    })

    $close.forEach(el => {
        el.addEventListener('click', () => {
            $sidebar.classList.remove('active');

            $close.forEach(el => {
                el.classList.remove('active')
            })
        })
    })
}