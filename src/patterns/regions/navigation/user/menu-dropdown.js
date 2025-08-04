document.addEventListener("DOMContentLoaded", function(){
    let userMenu = document.querySelector('#ct-user-menu');

    if (userMenu) {

        let menuToggle = userMenu.querySelector('#user-menu-btn');
        let closeTimeout;

        userMenu.addEventListener('mouseenter', function () {

            // Cancel pending close if re-entering
            clearTimeout(closeTimeout);
            openMenu();
        });

        userMenu.addEventListener('mouseleave', function () {

            // Delay closing slightly to prevent flicker
            closeTimeout = setTimeout(() => {
                closeMenu();
            }, 200); // delay in milliseconds
        });

        function closeMenu() {
            userMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }

        function openMenu() {
            userMenu.classList.add('active');
            menuToggle.setAttribute('aria-expanded', 'true');
        }
    }



    
        // item.onkeydown = function(e) {
        //     switch(e.keyCode) {
        //         case 27:
        //             if (mobileViewport() == true){
        //                 e.preventDefault();
                        
        //                 let openMenus = document.querySelectorAll('.menu--active');
        //                     activeToggles = document.querySelectorAll('.menu--toggle-active');


        //                 openMenus.forEach(menu => {
        //                     menu.classList.remove('menu--active');
        //                 });
                        
        //                 activeToggles.forEach(toggle => {
        //                     toggle.classList.remove('menu--toggle-active');
        //                     toggle.setAttribute('aria-expanded', 'false')
        //                 });
                        
        //                 document.querySelector('.toggle-menu-mobile').setAttribute('aria-expanded', 'false');
        //                 document.querySelector('.toggle-menu-mobile').focus();
        //                 break;
        //             }

        //             if (mobileViewport() == false) {
        //                 e.preventDefault();

        //                 try {
        //                     e.target.closest('.menu-item--top-level').querySelector('.toggle-menu').focus();
        //                     document.querySelector('.menu--active').classList.remove('menu--active');
        //                     document.querySelector('.menu--toggle-active').setAttribute('aria-expanded', false)
        //                     document.querySelector('.menu--toggle-active').classList.remove('menu--toggle-active');
                            
        //                 }
        //                 catch {}
        //                 break;
        //             }
                    
        //         case 9: 
        //             if (e.shiftKey && mobileViewport() == false) { 
        //                 if (e.target.parentNode.classList.contains('top-level')) {
        //                     try {

        //                         e.target.closest('.menu-item').querySelector('.toggle-menu').setAttribute('aria-expanded', false)
        //                         e.target.closest('.menu-item').querySelector('.toggle-menu').classList.remove('.menu--toggle-active');
        //                         e.target.closest('.menu-item').querySelector('.menu--active').classList.remove('menu--active');
        //                     }
        //                     catch {}
        //                 }
        //                 break;
        //             }
        //             else {
        //                 if (mobileViewport() == false) {
        //                     if (e.target.closest('.menu-item').classList.contains('menu-item--submenu-item') && e.target.parentNode.nextElementSibling == null) {
        //                         try {
        //                             e.target.closest('.menu-item--top-level').querySelector('.menu--toggle-active').setAttribute('aria-expanded', false)
        //                             e.target.closest('.menu-item--top-level').querySelector('.menu--toggle-active').classList.remove('menu--toggle-active')
        //                             e.target.closest('.menu-item--top-level').querySelector('.menu--active').classList.remove('menu--active');
                                    
        //                         }
        //                         catch {}
        //                         break;
        //                     }
                            
        //                     if (e.target.closest('.menu-item').classList.contains('menu-item--submenu-item') && e.target.parentNode.nextElementSibling == null) {
        //                         // e.target.closest('.menu-item--top-level').querySelector('.menu--toggle-active').setAttribute('aria-expanded', false)
        //                         // e.target.closest('.menu-item--top-level').querySelector('.menu--toggle-active').classList.remove('menu--toggle-active')
        //                         // e.target.closest('.menu-item--top-level').querySelector('.menu--active').classList.remove('menu--active');
        //                         break;
        //                     }

                            
                            
        //                     // try { 
        //                     //     e.target.closest('.menu--active').classList.remove('menu--active'); 
        //                     //     e.target.closest('.menu-item--top-level').nextElementSibling.focus(); 
        //                     // }
        //                     // catch {}
        //                 }
        //             }
        //         break;
        //     }

        //     // checkNextFocus()
        // }
}); 