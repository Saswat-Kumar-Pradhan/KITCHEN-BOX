const food_type = document.getElementsByClassName("food-type");
const food_data = document.getElementsByClassName("accordion");


food_type[0].style.cssText = "background-color: #ffc000;";
food_data[0].style.cssText = "display: block;";

for(let i = 0; i < food_type.length; i++)
{
    food_type[i].onclick = function(){
        for(let j = 0; j < food_type.length; j++)
        {
            food_type[j].style.cssText = "background-color: white;";
            food_data[j].style.cssText = "display: none;";
        }
        food_type[i].style.cssText = "background-color: #ffc000;";
        food_data[i].style.cssText = "display: block;";
    };
}

