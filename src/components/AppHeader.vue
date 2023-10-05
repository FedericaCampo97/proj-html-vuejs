<script>
export default {
    data() {
        return {

        }
    },
    props: ['navList']
}
</script>
<template>
    <div class="block">
        <div class="navbar py-4 px-5 d-flex align-item-center justify-content-between">
            <img src="../assets/img/logo1.png" alt="">
            <div class="d-flex">
                <ul class="list_menu d-flex align-items-center ">
                    <li v-for="element in navList" class="text-white">{{ element.text }}</li>
                </ul>
                <button><strong>DONATE</strong></button>
            </div>
        </div>
        <div class="central_header ">
            <h1>MAKE A DIFFERENCE</h1>
            <p>As long as poverty, injustice & inequality persist, none of us can truly rest</p>
            <button class="button_mission">OUR MISSION</button>
            <button>DONATE NOW</button>
        </div>
    </div>
    <div class="button_fixed">
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M152.2 236.4c-7.7-8.2-19.7-7.7-24.8 2.8L1.6 490.2c-5 10 2.4 21.7 13.4 21.7h175c5.8.1 11-3.2 13.4-8.4 37.9-77.8 15.1-196.3-51.2-267.1zM244.4 8.1c-122.3 193.4-8.5 348.6 65 495.5 2.5 5.1 7.7 8.4 13.4 8.4H497c11.2 0 18.4-11.8 13.4-21.7 0 0-234.5-470.6-240.4-482.3-5.3-10.6-18.8-10.8-25.6.1z" />
            </svg>
            <p class="mb-0"><strong>PreBuilds</strong></p>
        </button>
        <br>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            <p class="mb-0"><strong>Buy Now</strong></p>
        </button>
    </div>
</template>
<style></style>