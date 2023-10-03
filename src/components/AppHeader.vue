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
</template>
<style></style>