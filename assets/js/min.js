// Menu List 

const allDropDown = document.querySelectorAll('.sub-menu');

allDropDown.forEach(item => {
    
    const viewSubmenu = item.parentElement.querySelector('a:first-child');

    console.log(viewSubmenu);

    viewSubmenu.addEventListener('click', function(e) {
        e.preventDefault();

        if(!viewSubmenu.classList.contains('active')){

            
            allDropDown.forEach(i => {
                i.classList.add('show');
                
            });
            
            
        }
        viewSubmenu.classList.add('active');



    });


});








// ====================== SubMenu Show Hide =========================

// const dashedToggle = document.querySelector('.dashed-menu-toggle');
// const dashboardMenu = document.querySelector('.collapse');
// const arrowFlip = document.querySelector('.dropdown-arrow-icon');


// dashedToggle.addEventListener('click', ()=> {
    
//     const visibility = dashboardMenu.getAttribute('data-visible');

//     if(visibility === 'false'){
        
//         dashboardMenu.setAttribute('data-visible', true);
//         dashedToggle.setAttribute('aria-expanded', true);

//         arrowFlip.classList.add('rotate');
        
//     }else if(visibility === 'true'){
//         dashboardMenu.setAttribute('data-visible', false);
//         dashedToggle.setAttribute('aria-expanded', false);
        
//         arrowFlip.classList.remove('rotate');
//     }
// });




// ==================== Toggle menu bar =============================

// const menuIcon = document.getElementsByClassName('toggle-bar')[0];
// const fullSidebar = document.getElementsByClassName('sidebar')[0];
// const miniSidebar = document.getElementsByClassName('sidebar-mini')[0];
// const headerTop = document.getElementsByClassName('header-top')[0];
// const chartTraffic = document.getElementsByClassName('chart-dashboard--trafic-progress')[0];

// menuIcon.addEventListener('click', function() {

//     if(fullSidebar.style.display !== 'none'){
//         fullSidebar.style.display = 'none';

//         miniSidebar.style.display = 'block';

//         headerTop.style.width = '96.3vw'
//         chartTraffic.style.width = '94.3vw'
//     } else {
//         miniSidebar.style.display = 'none';

//         fullSidebar.style.display = 'block';

//         headerTop.style.width = '85.5vw'
//         chartTraffic.style.width = '83vw'
//     }

// });
// transition: all 300ms ease;

// =================== Chart Dashboard ===========================

// const ctx = document.getElementById('splineChart').getContext('2d');
//     const data = {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//         datasets: [
//             {
//             label: 'Online',
//             prefix: '$',
//             data: [5, 10, 18, 20, 27, 30],
//             borderWidth: 0,
//             backgroundColor: 'rgba(65, 241, 182, 0.3)',
//             fill: true,
//             tension: 0.4 // Adjust the tension for the spline curves
//             },
//             {
//             label: 'Store',
//             data: [10, 20, 15, 25, 30],
//             borderWidth: 0,
//             backgroundColor: 'rgba(255, 119, 130, 0.3)',
//             fill: true,
//             tension: 0.4 // Adjust the tension for the spline curves
//             }
//         ]
//     };

//     const config = {
//         type: 'line',
//         data: data,
//         options: {
//             plugins: {
//                 legend: {
//                     display: true,  
//                     position: 'top', 
//                     align: 'end',
//                     fullSize: false,
//                     labels: {
//                         boxWidth: 10,
//                         boxHeight: 10,
//                         useBorderRadius: true,  
//                         borderRadius: 5,
//                     }
//                 }
//             }
//         }        
//     };

//     const myChart = new Chart(ctx, config);