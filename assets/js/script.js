function MainFunc (sum=0)
{
let listMainFood = ["Sahplov-10" , "Dolma-6" , "Dovğa-3" , "Kotlet-5"];
let drinks = ["Su-1" ,"Kompot-3" ,"Fanta-2"];
let desserts = ["Paxlava-2"  ,"Badambura-1" ,"Tort-2"];
let salads = ["salat-5" , "dondurma-3"];
let userChoosen = prompt("Choice your meal: ");
switch (userChoosen)
{
    case "1":
        showList(listMainFood);
        break;
        case "2":
        showList(drinks);
        break;
        case "3":
        showList(desserts);
        break;
        case "4":
        showList(salads);
        break;
    default:
        alert("Wrong selection!")
        break;
}
let user2 = prompt("Choice again: ");
if (userChoosen == "1")
        
sum += listMainFood[int.Parse(user2) - 1].ToString().Split('-')[1];

else if(userChoosen == "2")

sum += drinks[int.Parse(user2) - 1].ToString().Split('-')[1];

else if (userChoosen == "3")

sum += desserts[int.Parse(user2) - 1].ToString().Split('-')[1];

else if(userChoosen=="4")

sum += salads[int.Parse(user2) - 1].ToString().Split('-')[1];
else      
alert("duzgun deyer daxil edin");
alert("Umumi meblleg: " + sum  + " manat");
alert("Basqa nese almaq isteyirsinizmi? ");
let davam = prompt("yes or no").ToLower()=="y" ? true:false;
if (davam == true)
MainFunc(sum);
else
{
alert("Tesekkurler");
alert("Umumi meblleg: " + sum + " manat");
return;
}
}
function showList(list)
{
    for (let i = 0; i < list.length; i++)
    {
        Console.WriteLine(`${i + 1} - ${list[i]}`);
    }
}
function main()
{
let list2 = ["anayemekler", "ickiler", "sirniyyatlar", "salatlar"];
for (let i = 0; i<list2.length; i++)
{
    console.log(i);
}
MainFunc();
}