/*--------------------Toggle Theme - light and dark theme--------------------*/
function toggleTheme() {
    if (localStorage.getItem("sketch-theme") !== null) {
        if (localStorage.getItem("sketch-theme") === "dark") {
            $("body").addClass("dark");
        } else {
            $("body").removeClass("dark");
        }
    }
    updateIcon();
}
toggleTheme();
$(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
        localStorage.setItem("sketch-theme", "dark");
    } else {
        localStorage.setItem("sketch-theme", "light");
    }
    updateIcon();
});
function updateIcon() {
    if ($("body").hasClass("dark")) {
        $(".toggle-theme i").removeClass("bx-moon");
        $(".toggle-theme i").addClass("bx-sun");
    } else {
        $(".toggle-theme i").removeClass("bx-sun");
        $(".toggle-theme i").addClass("bx-moon");
    }
}
