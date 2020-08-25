$(document).ready(function () {
     
     
     $('#startBtn').click(function () {
        location.replace('./pages/planner.html');
        JSON.parse(localStorage.getItem('mondayMeals'));
        localStorage.getItem('tuesdayMeals');
        localStorage.getItem('wednesdayMeals');
        localStorage.getItem('thursdayMeals');
        localStorage.getItem('fridayMeals');
        localStorage.getItem('saturdayMeals');
        localStorage.getItem('sundayMeals');
    });

});