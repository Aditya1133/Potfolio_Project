        const themeButton = document.getElementById('themeButton');
        const BackImg = document.getElementById('header');
        const body = document.body;
        const subTitles = document.querySelectorAll('.sub-title');
        themeButton.addEventListener('click', () => {
            body.classList.toggle('dark');
            body.classList.toggle('light');
            if (body.classList.contains('dark')) {
                BackImg.style.backgroundImage = "url('Background2.jpg')";
                } else {
                    BackImg.style.backgroundImage = "url('Ligth-Background.jpg')";
                }
            // Change the color of .sub-title based on the current theme is not working pls check woith the sir 
            // and check for the nav bar too is was not changing the color as it used to 
            // do this over weekend 
            // and upload it on git by next friday 
            
            subTitles.forEach(subTitle => {
                if (body.classList.contains('dark')) {
                    subTitle.style.color = 'white';
                    navbar.style.color='white'; // Change to white text color
                } else {
                    subTitle.style.color = 'black';
                    navbar.style.color='black'; // Change to black text color
                }
            });
        });
        var tablinks=document.getElementsByClassName("tab-links");
        var tabcontents=document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }