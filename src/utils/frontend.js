
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

export function mobileSidebar() {
    const $anchors = document.querySelectorAll('[data-toggle="mobile"]');
    const $content = document.querySelector('.account-view');
    const $close = document.querySelectorAll('[data-view="close"]')

    $anchors.forEach(el => {
        el.addEventListener('click', function () {
            $content.classList.add('active')
        })
    })

    $close.forEach(el => {
        el.addEventListener('click', function () {
            $content.classList.remove('active')
        })
    })
}