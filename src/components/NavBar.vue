<template>
    <nav id="c-menu--slide-bottom" class="c-menu c-menu--slide-bottom">
        <button class="c-menu__close allBoxShadows">
            <i class="d-block fa fa-times"></i>
        </button>
        <div class="col-12">
            <div class="prevCatArrows">
                <span></span>
            </div>
            <div class="BottomMenuItems text-center eachItem">
                <a class="list-group-item list-group-item-action border-0" v-for="item in menuItems" v-bind:key="item.title">
                    <img class="menuImageItems d-block m-auto" v-bind:src="item.image">
                    <span> {{item.title}} </span>
                </a>
            </div>
            <div class="nextCatArrows">
                <span></span>
            </div>
        </div>
    </nav>
</template>

<script>
    import Menu from "../assets/js/menu";

    require("../assets/js/slick.min");

    export default {
        name: "NavBar",
        props: ["menuItems"],
        mounted() {
            /**
             * Slide bottom instantiation and action.
             */
            var slideBottom = new Menu({
                wrapper: '#o-wrapper',
                type: 'slide-bottom',
                menuOpenerClass: '.c-button',
                maskId: '#c-mask'
            });
            var slideBottomBtn = document.getElementById("c-button--slide-bottom");
            slideBottomBtn.addEventListener('click', function(e) {
                e.preventDefault;
                slideBottom.open();
            });

            $('.BottomMenuItems').slick({
                dots: false,
                infinite: false,
                arrows: false,
                speed: 300,
                slidesToShow: 6,
                slidesToScroll: 6,
                rtl: true,
                nextArrow: '<div class="nextCatArrows"></div>',
                prevArrow: '<div class="prevCatArrows"></div>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: false,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            $(document).on("click", ".nextCatArrows", function() {
                $(".BottomMenuItems").slick('slickPrev');
            });
            $(document).on("click", ".prevCatArrows", function() {
                $(".BottomMenuItems").slick('slickNext');
            });
        }
    }
</script>

<style>
    @import "../assets/css/slick/slick.scss";
    @import "../assets/css/slick/slick-theme.css";
</style>

<style scoped>

</style>
