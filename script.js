        let menu = document.querySelector('#menu-bars');
        let navbar = document.querySelector('.navbar');
        menu.onclick = () =>{
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        }


        function navRemove(){
            menu.click();
        }

        function cus(){
            document.getElementById("captain").style.display = "none";
            document.getElementById("customer").style.display = "flex";

            document.getElementById("captain-btn").style.backgroundColor = "white";
           // document.getElementById("captain-btn").style.Color = "rgb(136, 177, 40)";
            document.getElementById("customer-btn").style.backgroundColor = "rgb(136, 177, 40)";
            //document.getElementById("customer-btn").style.color = "white";
            

        }
        function cap(){
            document.getElementById("customer").style.display = "none";
            document.getElementById("captain").style.display = "flex";
            document.getElementById("customer-btn").style.backgroundColor = "white";
           // document.getElementById("customer-btn").style.Color = "rgb(136, 177, 40)";
            document.getElementById("captain-btn").style.backgroundColor = "rgb(136, 177, 40)";
           // document.getElementById("captain-btn").style.color = "white";    
        }


        function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 110;

                if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
                } else {
                reveals[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", reveal);





