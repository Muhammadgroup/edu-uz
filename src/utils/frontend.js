
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

export function setScrollHeight() {
    const $el = document.querySelector('[data-set="height"]');
    const $bodyHeight = document.querySelector('body').clientHeight
    const xCord = $el.getBoundingClientRect().top

    const delta = $bodyHeight - xCord - 20;


    $el.style.height = `${delta}px`;
    $el.style.overflowY = 'auto';
    $el.style.paddingRight = '20px'

    console.log($bodyHeight, xCord, delta)
}

export function setHeight() {
    const $el = document.querySelector('[data-chat="content"]');
    const $height = $el.clientHeight;
    const $setContent = document.querySelector('.chat-id-view');
    const $chatFooter = document.querySelector('.chat-text-content').clientHeight;
    const delta = $height - $chatFooter - 10;

    $setContent.style.height = `${delta}px`
    $setContent.style.overflowY = `auto`


}

export function chatViewToggle() {
    const $items = document.querySelectorAll('[data-id="chatID"]');
    const $chatView = document.querySelector('[data-chat="view"]')

    $items.forEach(el => {
        el.addEventListener('click', function () {
            $chatView.classList.add('active')
        })
    })

}