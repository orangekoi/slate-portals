/* eslint-disable */
   

function mobileViewport() {
    let mobileSize = 600 // mobile size from _breakpoints.scss
    if (window.innerWidth <= mobileSize) {
        document.querySelector('body').classList.add('view--mobile')
        return true;
    }
    else {
        document.querySelector('body').classList.remove('view--mobile')
        return false;
    }
}
window.onresize = mobileViewport;
mobileViewport;

const mainNav = document.getElementById('main-navigation') // Find the Main Navigation nav
const navPanelWrap = mainNav.querySelector('.nav-wrap');
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]';
let mainMenuToggle = document.getElementById('main-menu-btn');
let menuType = document.querySelector('body').getAttribute('data-menu');
levels(mainNav.querySelector('ul:not(.contextual-links'));

let mainMenu = mainNav.querySelector('ul');
    topLevelItems = mainMenu.querySelectorAll(':scope > li');

function levels(list, x) {
    if (list != null) {
        // First time through x will be null
        if (x == null) {
            x = 1;
        }
        
        sublist = list.querySelectorAll(':scope > li');
        
        sublist.forEach(item => {
            item.classList.add(`level-${x}`)
            let link = item.querySelector(':scope > *');
            if (x == 1){
                item.classList.add('top-level', 'menu-item--top-level');
                try {
                    item.querySelector('a').classList.add('top-level');
                }
                catch {}
            }
            if ( link != null && link.classList.contains('top-level' )) {
                // item.querySelector('ul').classList.add('site-level');
                
                let topLevel = item.querySelectorAll(':scope > ul > li');

                topLevel.forEach(level => {
                    level.classList.add('top-level');
                    if(level.querySelector('ul') != null) {

                        level.querySelector('ul').classList.add('top-level-child');

                    }
                    expandedMenu = level.querySelectorAll('.top-level-child ul');
                    expandedMenu.forEach(x => {
                        x.classList.add('expanded-menu');
                    })

                });
            }

            if (item.querySelector('ul') != null) {
                nextList = item.querySelector('ul');
                levels(nextList, x + 1);
            }
        });
    }
    return;
}

if (menuType === 'mega' || menuType == 'mega-priority') {
    
    // THIS IS WHERE THE MEGA MENU IS CREATED
    try {
        if (localStorage.getItem('theme') == "light") {
            document.querySelector('.mode-switch').classList.add('light-mode');
        }
        else if (localStorage.getItem('theme') == "dark") {
            document.querySelector('.mode-switch').classList.add('dark-mode');
        }
    }
    catch {}

    function createPanelMenus(menu, parentDiv, level = 1, panelIndex = 0, parentPanel = null, panelIdCounter = { value: 0 }, panelName = "main") {
        const newPanel = document.createElement('div');
        const panelWrap = document.createElement('div');
        const newPanelList = document.createElement('ul');
        const menuItems = menu.querySelectorAll(':scope > li');
        

        
        newPanel.classList.add('panel', 'nav-panel');
        newPanel.setAttribute('data-level', level);

        const uniqueId = panelIdCounter.value++;
        const panelId = `nav-panel-${level}-${uniqueId}`;
        // newPanel.setAttribute('id', panelId);

        panelWrap.classList.add('panel-wrap');
        newPanelList.classList.add('menu', 'list-menu', 'links');

        if (level === 1) {
            let header = document.createElement('h2');
            let siteName = document.documentElement.getAttribute('data-sitename');
            header.innerHTML = `<a href="/" class="is-active nav-panel-header">${siteName}</a>`;
            panelWrap.append(header);
        }

        // Store panel mapping to be used later for appending child panels
        const labelToPanelMap = new Map();
        const panelBreadcrumb = document.createElement('button');
        panelBreadcrumb.classList.add('toggle-menu', 'menu-breadcrumb');
        panelBreadcrumb.setAttribute('aria-label', 'Up one menu level');
        panelBreadcrumb.innerText = panelName;
        panelWrap.append(panelBreadcrumb)


        menuItems.forEach((li, index) => {
            const newListItem = li.cloneNode(true);
            const childMenu = li.querySelector('ul');
            const anchor = newListItem.querySelector(':scope > a, :scope > span');
            const labelText = anchor?.textContent.trim() || `item-${index}`;
            const childPanelSlug = labelText.toLowerCase().replace(/\s+/g, '-');

            // const slug = labelText.toLowerCase().replace(/\s+/g, '-');
            // const uniqueTargetId = `nav-panel-${level + 1}-${slug}`;
            
            if (childMenu) {
                if (anchor instanceof HTMLAnchorElement) {
                    const anchorItem = document.createElement('li');
                    anchorItem.append(anchor.cloneNode(true));
                    childMenu.prepend(anchorItem);
                }

                const button = document.createElement('button');
                button.setAttribute('aria-expanded', 'false');
                button.classList.add('toggle-menu', 'top-level-toggle');
                button.textContent = labelText;
                const targetId = `nav-panel-${level + 1}-${childPanelSlug}`;
                button.setAttribute('data-target', targetId);

                newListItem.querySelector(':scope > a, :scope > span')?.replaceWith(button);

                labelToPanelMap.set(childPanelSlug, childMenu);

            }

            if (newListItem.querySelector('ul')) {
                newListItem.querySelector('ul').remove();
            }
            
            newPanelList.appendChild(newListItem);
        });

        // const panelContentName = newPanelList.querySelector('a')?.textContent;
        // const panelSlug = panelContentName?.toLowerCase().replace(/\s+/g, '-')
        const uniquePanelId = `nav-panel-${level}-${panelName}`;

        panelWrap.appendChild(newPanelList);
        newPanel.appendChild(panelWrap);

        if (level === 1) {
            newPanel.classList.add('is-active', 'primary-panel', 'is-active');
            newPanel.setAttribute('id', 'nav-panel-main');
        } else {
            newPanel.classList.add('hidden');
            const panelId = `nav-panel-${level}-${panelName}`;
            newPanel.setAttribute('id', panelId);
        }

        // Insert panel in the correct order
        const existingPanels = parentDiv.querySelectorAll('.panel.nav-panel');
        let insertBeforePanel = null;

        for (let existingPanel of existingPanels) {
            const existingLevel = parseInt(existingPanel.getAttribute('data-level'));
            if (existingLevel > level) {
                insertBeforePanel = existingPanel;
                break;
            }
        }

        if (insertBeforePanel) {
            parentDiv.insertBefore(newPanel, insertBeforePanel);
        } else {
            parentDiv.appendChild(newPanel);
        }

        // Recursively build panels for submenus
        for (const [panelTargetId, submenu] of labelToPanelMap.entries()) {
            submenu.setAttribute('data-source-id', panelTargetId); // optional
            createPanelMenus(submenu, parentDiv, level + 1, panelIndex, null, panelIdCounter, panelTargetId);
        }
    }

    

    // Usage:
    // Assuming the menu is inside a <div> with class `menu--body`
    const menuBody = document.querySelector('#main-navigation .menu');
    // Create a new container div where all panels will be appended
    const newContainer = document.createElement('div');
    newContainer.classList.add('menu-panels-container');

    // Start creating panels from the root menu
    createPanelMenus(menuBody, newContainer, 1, 0, null, { value: 0});
    
    // Append the new container to the body or wherever you want to display the panels
    document.querySelector('.menu--body').appendChild(newContainer);
    
    menuBody.remove();

    mainNav.onkeydown = function(e) {

        let menuFocusableElements = "button, [href]";
        let currentActive = e.target;
        let nextItem = e.target.parentNode.nextElementSibling;

        // let menuBtn = document.getElementById('main-menu-close');
        let focusableContent = Array.from(navPanelWrap.querySelectorAll(menuFocusableElements)).filter(item => {
            return window.getComputedStyle(item).display !== 'none' && window.getComputedStyle(item).visibility !== 'hidden' && item.offsetWidth > 0 && item.offsetHeight > 0;
            });
            
        
        let firstFocus = focusableContent[0];
        let lastFocus = focusableContent[focusableContent.length - 1]
        let parentToggle = document.querySelector('.active-toggle')
        let targetPanelID = currentActive.parentNode.getAttribute('data-panel-parent');

        switch(e.keyCode) {  
                
            case 27:
                toggleMainMenu();
                break;
            case 9: 
                if (e.shiftKey) {
                    if (currentActive  === firstFocus) {
                        let lastChild = document.querySelector('.primary-panel').querySelector('li:last-child');

                        if (window.getComputedStyle(lastChild).display === 'none') {
                            lastChild.previousElementSibling.querySelector("button").focus();
                            e.preventDefault();
    
                            break;
                        }
                        
                        document.querySelector('.site-level').querySelector('li:last-child').focus();
                        break;
                    }
    
                    if ( (currentActive.closest('ul') && currentActive.closest('ul').classList.contains('site-level')) || currentActive.classList.contains('menu-close') || currentActive.classList.contains('nav-panel-header')) {
                        break;
                    }
                    
                    if (currentActive.parentNode.tagName == "h2") {
                        break;
                    }

                    if (!currentActive.parentNode.classList.contains('top-level') && currentActive.parentNode.previousElementSibling == null && !currentActive.closest('ul').classList.contains('expanded-menu')) {

                        e.preventDefault();

                        parentToggle.focus();
                        parentToggle.classList.remove('active-toggle');
                        
                        currentActive.closest('.nav-panel').classList.remove('is-active')
                        targetPanel.classList.remove('hidden', 'slide-out');
                        currentActive.closest('.nav-panel').classList.add('hidden');
                        break;
                    }       
                    
                    break;
                }
                else {
                    
                    // If the next item is display none, which on desktop it will be, go to the close button
                    
    
                    // handles flow from one top level item to another
                    if (currentActive.classList.contains('top-level-toggle')) {
                        // Filter out only visible <li> elements
                        let currentActiveSiblings = currentActive.closest('ul.menu').querySelectorAll('li.menu-item');
                        let visibleSiblings = Array.from(currentActiveSiblings).filter(item => {
                            return window.getComputedStyle(item).display !== 'none' && window.getComputedStyle(item).visibility !== 'hidden' && item.offsetWidth > 0 && item.offsetHeight > 0;
                            });
                        
                        currentActive.classList.remove('active-toggle'); // REMOVE ACTIVE FROM TOGGLE
                        currentActive.setAttribute('aria-expanded', false); // CHANGE ARIA EXPANDEDD TO FALSE
                        
                        // HIDE ALL PANELS FROM PREVIOUSLY ACTIVE ITEM
                        let activePanels = document.querySelectorAll('.nav-panel--child.is-active');
                        if (activePanels.length > 0) {
                            activePanels.forEach(panel => {
                                panel.classList.remove('is-active');
                                panel.classList.add('hidden');

                            })
                        }
                        
                        if (currentActive.parentNode === visibleSiblings[visibleSiblings.length - 1]) {
                            firstFocus.focus();
                            e.preventDefault();

                        }
                        break;


                    }

                    break;
                }
                // }
            case 37:
                if(currentActive.parentNode.classList.contains('top-level')){
                    break;
                }
    
                if (currentActive.parentNode.parentNode.classList.contains('expanded-menu')) {
                    targetPanelID = currentActive.closest('.parent').getAttribute('data-panel-parent');
                        
                    currentActive.closest('.nav-panel').classList.remove('is-active')
                    targetPanel.classList.remove('hidden', 'slide-out');
                    currentActive.closest('.nav-panel').classList.add('hidden');
                    document.querySelector(`[data-panel-id="${targetPanelID}"]`).querySelector('button').classList.remove('is-active');
                    document.querySelector(`[data-panel-id="${targetPanelID}"]`).querySelector('button').focus();
                    
                    break;
                    
                }
                if(currentActive.parentNode.classList.contains('menu-item') && targetPanel != undefined){
                    
                    currentActive.closest('.nav-panel').classList.remove('is-active')
                    targetPanel.classList.remove('hidden', 'slide-out');
                    currentActive.closest('.nav-panel').classList.add('hidden');
                    document.querySelector(`[data-panel-id="${targetPanelID}"]`).querySelector('button').classList.remove('is-active');
                    document.querySelector(`[data-panel-id="${targetPanelID}"]`).querySelector('button').focus();
                    
    
                }
                break;
            case 38:
                if (currentActive.classList.contains('nav-panel-header')) {
                    firstFocus.focus();
                    break;
                }
                if (currentActive.tagName == 'BUTTON') {
                    var parentNav = document.querySelector('.nav-panel.is-active:not(.primary-panel');
                    
                    if (currentActive.parentNode.previousElementSibling == null) {
                        if (parentNav) {
    
                            parentNav.classList.remove('is-active');
                            parentNav.classList.add('hidden');
                            parentNav.querySelector('.panel-wrap').classList.remove('active')
                        }
                        currentActive.parentNode.closest('.panel-wrap').querySelector('.nav-panel-header').focus();
                        break;
    
                    }
                    else {
    
                        if (parentNav) {
    
                            parentNav.classList.remove('is-active');
                            parentNav.classList.add('hidden');
                            parentNav.querySelector('.panel-wrap').classList.remove('active')
                        }
    
                        currentActive.parentNode.previousElementSibling.firstElementChild.focus();
                        break;
    
                    }
                }
                
                if (currentActive.closest('.expanded-menu') != null && currentActive.parentNode.previousElementSibling == null) {
                    currentActive.closest('.menu-item--expanded').querySelector('ul > li > a').focus();
                    break;
                }
                if (currentActive.parentNode.previousElementSibling != null && currentActive.parentNode.previousElementSibling.classList.contains('menu-item--expanded')) {
    
                    currentActive.parentNode.previousElementSibling.querySelector('ul > li:last-child > a').focus();
                    break;
                }
                if (currentActive.parentNode.classList.contains('menu-item') && currentActive.parentNode.previousElementSibling != null) {
                    currentActive.parentNode.previousElementSibling.firstElementChild.focus();
                    break;
                }
                else {
                    break;
                }
    
            case 39:
                if (currentActive.getAttribute('data-target') == null) {
                    break;
                }
                if (currentActive.getAttribute('data-target') != null) {
                    currentActive.classList.add('active-toggle');
                    togglePanels(currentActive);
                    document.getElementById(currentActive.getAttribute('data-target')).querySelector('ul li a').focus();
                }
                break;
            case 40: 
            if (currentActive.tagName == 'BUTTON') {
                    var parentNav = document.querySelector('.nav-panel.is-active:not(.primary-panel');
                    
                    if (currentActive.parentNode.nextElementSibling != null) {
                        currentActive.parentNode.nextElementSibling.firstElementChild.focus();
                        
                        if (parentNav) {
    
                            parentNav.classList.remove('is-active');
                            parentNav.classList.add('hidden');
                            parentNav.querySelector('.panel-wrap').classList.remove('active')
                        }
                        
                        break;
                    }
                }
                if (currentActive.parentNode.classList.contains('parent')) {
                    currentActive.parentNode.querySelector(':scope > ul > li > a').focus();
                    break;
                }
                if (currentActive.classList.contains('nav-panel-header')) {
                    currentActive.parentNode.nextSibling.querySelector('li').firstElementChild.focus();
                    // next.firstElementChild.focus();
                    break;
                }
                if (currentActive.classList.contains('menu-close')){
                    document.querySelector('.nav-panel-header.active-site').focus();
                    break;
                }
                if (currentActive.closest('ul').classList.contains('expanded-menu') && currentActive.parentNode.nextElementSibling == null) {
                    currentActive.closest('.parent').nextElementSibling.querySelector('a').focus();
                    break;
                }
                if (currentActive.parentNode.classList.contains('menu-item') && currentActive.parentNode.nextElementSibling != null) {
                    currentActive.parentNode.nextElementSibling.firstElementChild.focus();
                    break;
                }
                else {
                    break;
                }
            }
    };

    document.querySelectorAll('#main-navigation .nav-wrap button.toggle-menu').forEach(function(toggle) {

        toggle.addEventListener('click', function(e){
            e.target.classList.add('active-toggle');
            togglePanels(e.target);
            
        });

    });

    function togglePanels(toggle) {
        let currentPanel = toggle.closest('.nav-panel.active');
        let targetPanel = document.getElementById(toggle.getAttribute('data-target'))
        let currentLevel = toggle.closest('.nav-panel').getAttribute('data-level');
        let activePanels = mainNav.querySelectorAll(`.nav-panel.active`)
        let activeToggles = mainNav.querySelectorAll('.active-toggle');

        if(toggle.classList.contains('menu-breadcrumb')){

            currentPanel.classList.remove('is-active')
            // targetPanel.classList.remove('hidden');
            // targetPanel.classList.remove('slide-out');
            document.querySelector('.slide-out').classList.remove('slide-out');

            setTimeout(function() {
                currentPanel.classList.add('hidden');
            }, 500);

        }
    
        else {
            activePanels.forEach(panel => {

                if (panel != targetPanel) {
                    if (panel.getAttribute('data-level') > currentLevel) {
                        panel.classList.remove('active');
                        panel.classList.remove('is-active');
                        panel.classList.add('hidden');
                    }
                }
            });

            activeToggles.forEach(activeToggle => {
                if (activeToggle != toggle ) {
                    activeToggle.setAttribute('aria-expanded', 'false')
                }
            })

            if (toggle.getAttribute('aria-expanded') === "false") {
                // Open the target panel
                toggle.setAttribute('aria-expanded', 'true');
                targetPanel.classList.add('active');
                targetPanel.classList.remove('hidden');
            } else {
                // Close the target panel
                toggle.setAttribute('aria-expanded', 'false');
                targetPanel.classList.remove('active');
                targetPanel.classList.add('hidden');
            }

            if (currentPanel.classList.contains('primary-panel')) {
                // currentPanel.classList.add('hide-left');
                currentPanel.classList.add('slide-out');
                

                setTimeout(function() {
                    // currentPanel.classList.add('hidden');
                    targetPanel.classList.add('is-active');

                }, 5);
            }
        }
    }

    document.querySelector('#main-navigation .nav-wrap').addEventListener('click', function(e){
        if(e.target.classList.contains('nav-wrap')) {
            document.querySelector('.nav-wrap').classList.remove('active');
            document.querySelector('body').classList.remove('no-scroll');
            document.querySelector('#main-menu-btn').setAttribute('aria-expanded', 'false');
            document.getElementById('site-header').classList.remove('full-height');

        }
    })

    parentLink = '';

    let mainMenuToggles = mainNav.querySelectorAll('.toggle-main');
    mainMenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(){
            toggleMainMenu();                 
        });

    })

    let allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (link.href.indexOf("#") != -1) {
                toggleMainMenu();
            }
        });
    });

    function toggleMainMenu() {

        if (mainNav.classList.contains('menu__mega')) {

            if (!navPanelWrap.classList.contains('active')) {
                let activePanel = mainNav.querySelector('div.is-active');
                mainNav.querySelector('.nav-wrap').classList.add('active');
                mainNav.querySelector('.nav-panel.is-active').classList.add('active');
                mainNav.querySelector('.nav-panel.is-active .panel-wrap').classList.add('is-active');
                mainMenuToggle.setAttribute('aria-expanded', 'true');
                document.body.classList.add('no-scroll');
                document.getElementById('site-header').classList.add('full-height');
                
                document.querySelector('.mode-switch').classList.remove('initial');
            }
            else {
                let activePanel = mainNav.querySelector('.is-active');
                document.querySelector('.nav-wrap.active').classList.remove('active');
                mainMenuToggle.setAttribute('aria-expanded', 'false');

                if (document.querySelector('.nav-panel.is-active:not(.primary-panel)')) {
                    var parentNav = document.querySelector('.nav-panel.is-active:not(.primary-panel');
                    parentNav.classList.remove('is-active');
                    parentNav.classList.add('hidden');
                    parentNav.querySelector('.panel-wrap').classList.remove('active')
                }
                document.body.classList.remove('no-scroll');
                document.getElementById('site-header').classList.remove('full-height');
                document.querySelector('.mode-switch').classList.add('initial');
                document.getElementById('main-menu-btn').focus();

            }
        }
    }
}

// Dropdown Menu 
        
else if (document.querySelector('body').getAttribute('data-menu') === 'dropdown') {
    let menuToggles = mainNav.querySelectorAll('.menu-item');
        topLevel = mainNav.querySelectorAll('.menu__dropdown > .level-1.top-level > a');

    menuToggles.forEach(item => {                    
        try { 
            item.querySelector('.menu').classList.add('menu__submenu');
            let subMenuItems = item.querySelectorAll('.menu li');

            subMenuItems.forEach(item => {
                item.classList.add('menu-item--submenu-item')
            });

            let menuItemWrap = document.createElement('div');
                menuItemToggle = document.createElement('button');
                menuItemToggle.classList.add('toggle-menu');
                menuItemToggle.setAttribute('aria-expanded', 'false');
                menuItemToggle.setAttribute('aria-haspopup', 'true');
                menuItemToggle.innerHTML = `<span class='sr-only'>Expand Menu</span>`

                menuItemWrap.classList.add('menu-item-wrap');
                menuItemWrap.append(item.querySelector('a'));
                menuItemWrap.append(menuItemToggle);
                item.prepend(menuItemWrap);
            
        }
        catch {}
        if (mobileViewport() == false) {

            item.onmouseover = function() {
                try { 
                    item.querySelector('.menu__submenu').classList.add('menu--active');
                    item.classList.add('parent--active');
                
                }
                catch {}
                
            }

            item.onmouseleave = function() {
                
                try { 
                    item.querySelector('.menu__submenu').classList.remove('menu--active'); 
                    item.classList.remove('parent--active');

                }
                catch {}
            }
            
        }
    

        // DROPDOWN MENU KEYBOARD NAVIGATION

        item.onkeydown = function(e) {
            switch(e.keyCode) {
                case 27:
                    if (mobileViewport() == true){
                        e.preventDefault();
                        
                        let openMenus = document.querySelectorAll('.menu--active');
                            activeToggles = document.querySelectorAll('.menu--toggle-active');


                        openMenus.forEach(menu => {
                            menu.classList.remove('menu--active');
                        });
                        
                        activeToggles.forEach(toggle => {
                            toggle.classList.remove('menu--toggle-active');
                            toggle.setAttribute('aria-expanded', 'false')
                        });
                        
                        document.querySelector('.toggle-menu-mobile').setAttribute('aria-expanded', 'false');
                        document.querySelector('.toggle-menu-mobile').focus();
                        break;
                    }

                    if (mobileViewport() == false) {
                        e.preventDefault();

                        try {
                            e.target.closest('.menu-item--top-level').querySelector('.toggle-menu').focus();
                            document.querySelector('.menu--active').classList.remove('menu--active');
                            document.querySelector('.menu--toggle-active').setAttribute('aria-expanded', false)
                            document.querySelector('.menu--toggle-active').classList.remove('menu--toggle-active');
                            
                        }
                        catch {}
                        break;
                    }
                    
                case 9: 
                    if (e.shiftKey && mobileViewport() == false) { 
                        if (e.target.parentNode.classList.contains('top-level')) {
                            try {

                                e.target.closest('.menu-item').querySelector('.toggle-menu').setAttribute('aria-expanded', false)
                                e.target.closest('.menu-item').querySelector('.toggle-menu').classList.remove('.menu--toggle-active');
                                e.target.closest('.menu-item').querySelector('.menu--active').classList.remove('menu--active');
                            }
                            catch {}
                        }
                        break;
                    }
                    else {
                        if (mobileViewport() == false) {
                            if (e.target.closest('.menu-item').classList.contains('menu-item--submenu-item') && e.target.parentNode.nextElementSibling == null) {
                                try {
                                    e.target.closest('.menu-item--top-level').querySelector('.menu--toggle-active').setAttribute('aria-expanded', false)
                                    e.target.closest('.menu-item--top-level').querySelector('.menu--toggle-active').classList.remove('menu--toggle-active')
                                    e.target.closest('.menu-item--top-level').querySelector('.menu--active').classList.remove('menu--active');
                                    
                                }
                                catch {}
                                break;
                            }
                            
                            if (e.target.closest('.menu-item').classList.contains('menu-item--submenu-item') && e.target.parentNode.nextElementSibling == null) {
                                // e.target.closest('.menu-item--top-level').querySelector('.menu--toggle-active').setAttribute('aria-expanded', false)
                                // e.target.closest('.menu-item--top-level').querySelector('.menu--toggle-active').classList.remove('menu--toggle-active')
                                // e.target.closest('.menu-item--top-level').querySelector('.menu--active').classList.remove('menu--active');
                                break;
                            }

                            
                            
                            // try { 
                            //     e.target.closest('.menu--active').classList.remove('menu--active'); 
                            //     e.target.closest('.menu-item--top-level').nextElementSibling.focus(); 
                            // }
                            // catch {}
                        }
                    }
                break;
            }

            // checkNextFocus()
        }
        
    });

    topLevel.forEach(item => {
        item.addEventListener('focusin', function(e){
            let activeMenu = document.querySelector('.menu--active');

            if (activeMenu) {
                activeMenu.classList.remove('menu--active');
                let activeToggles = document.querySelectorAll('.toggle-menu[aria-expanded="true"]');
                activeToggles.forEach(toggle => {
                    toggle.setAttribute('aria-expanded', 'false');
                })    
            }
        })
    });

    mainNav.addEventListener('focusout', function(){
        
        setTimeout(() => {
            if (!document.activeElement.closest('#main-navigation')) {
                let activeMenus = document.querySelectorAll('.menu--active');
                let activeToggles = document.querySelectorAll('.menu--toggle-active');

                activeMenus.forEach(menu => {
                    menu.classList.remove('menu--active');
                });

                activeToggles.forEach(toggle => {
                    toggle.classList.remove('menu--toggle-active');
                    toggle.setAttribute('aria-expanded', 'false');
                });
            }
        }, 100);
    });
    
    let menuTogglesBtns = mainMenu.querySelectorAll('.toggle-menu');
            
    menuTogglesBtns.forEach(menuToggle => {
        menuToggle.addEventListener('click', function(){  
            toggle(menuToggle);
            
            
        })
    });
    mainMenuToggle.addEventListener('click', function(){
        this.parentNode.querySelector('.nav-wrap').classList.contains('active') ? closeMenu() : openMenu();                    
    })


    // document.getElementById('main-menu-close').addEventListener('click', function(){
    //     closeMenu();
    // });

    function closeMenu() {
        document.getElementById('site-header').classList.remove('full-height');
        document.body.classList.remove('no-scroll');
        
        if (mainNav.classList.contains('menu__dropdown')) {
            mainNav.classList.remove('mobile--active');
            mainNav.querySelector('.nav-wrap').classList.remove('active');

        }
        if (mainNav.classList.contains('menu--panel')) {
            let activePanel = mainNav.querySelector('div.is-active');
            mainNav.querySelector('.nav-wrap').classList.remove('active');


        }
        document.getElementById('main-menu-btn').getAttribute('aria-expanded') == 'false' ? document.getElementById('main-menu-btn').setAttribute('aria-expanded', 'true') : document.getElementById('main-menu-btn').setAttribute('aria-expanded', 'false')
        // document.querySelector('#main-menu-close').focus();   
    }
    function openMenu() {
        document.getElementById('site-header').classList.add('full-height');
        document.body.classList.add('no-scroll');
        
        if (mainNav.classList.contains('menu__dropdown')) {
            mainNav.classList.add('mobile--active');
            mainNav.querySelector('.nav-wrap').classList.add('active');
        }
        if (mainNav.classList.contains('menu--panel')) {
            let activePanel = mainNav.querySelector('div.is-active');
            mainNav.querySelector('.nav-wrap').classList.add('active');


        }
        
        document.getElementById('main-menu-btn').getAttribute('aria-expanded') == 'false' ? document.getElementById('main-menu-btn').setAttribute('aria-expanded', 'true') : document.getElementById('main-menu-btn').setAttribute('aria-expanded', 'false')
        // document.querySelector('#main-menu-close').focus();   
    }


    function toggle(menuToggle) {
        
        if (mobileViewport() == false){ 


            if (menuToggle.getAttribute('aria-expanded') == 'true') {
                menuToggle.setAttribute('aria-expanded', 'false')
                menuToggle.closest('.menu-item').querySelector('.menu__submenu').classList.remove('menu--active')
            }

            else {
                try {

                    if (menuToggle.closest('.parent').classList.contains('level-1')) {
                        document.querySelector('.menu--toggle-active').classList.remove('menu--toggle-active');
                        document.querySelector('.menu--toggle-active').setAttribute('aria-expanded', false)
                        document.querySelector('.menu--active').classList.remove('menu--active');

                    }
                    
                }
                catch {}

                menuToggle.setAttribute('aria-expanded', 'true')
                menuToggle.closest('.menu-item').querySelector('.menu__submenu').classList.add('menu--active');
                menuToggle.classList.add('menu--toggle-active')

            }
        }
        else {
            if (menuToggle.getAttribute('aria-expanded') == 'true') {
                menuToggle.setAttribute('aria-expanded', 'false')
                menuToggle.closest('.menu-item').querySelector('.menu__submenu').classList.remove('menu--active')
            }

            else {
                try {

                    document.querySelector('.menu--toggle-active').setAttribute('aria-expanded', false)
                    document.querySelector('.menu--toggle-active').classList.remove('menu--toggle-active');
                }
                catch {}

                menuToggle.setAttribute('aria-expanded', 'true')
                menuToggle.closest('.menu-item').querySelector('.menu__submenu').classList.add('menu--active');
                menuToggle.classList.add('menu--toggle-active');
            }
        }
    }


    function openSubMenu(x) {
        let item = x.closest('.menu-item');
        if (!x.classList.contains('menu--toggle-active')) {
            item.querySelector('.menu__submenu').classList.add('menu--active');
            x.classList.add('menu--toggle-active');
            item.classList.add('parent--active');
            x.setAttribute('aria-expanded', 'true');
        }
        else {
            item.querySelector('.menu__submenu').classList.remove('menu--active');
            item.classList.remove('parent--active');
            x.setAttribute('aria-expanded', 'false');
            x.classList.remove('menu--toggle-active');

        }
    }
    function menuDirection(m) {
        // menuPosition = subMenuItems.getBoundingClientRect();
        menuPosition = m.getBoundingClientRect();
        
        if (menuPosition.right > window.innerWidth ) {
            m.classList.add('menu-left');
        }
        
    }

    let subMenus = document.querySelectorAll('.menu__submenu');

    subMenus.forEach(subMenu => {
        menuDirection(subMenu)
    })

}