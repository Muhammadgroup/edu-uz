
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
}

export function selectedItems() {
    const $items = document.querySelectorAll('[data-toggle="selected"]')

    $items.forEach(el => {
        el.addEventListener('click', function () {

            $items.forEach(el => {
                el.classList.remove('active')
            })

            el.classList.add('active')
        })
    })
}