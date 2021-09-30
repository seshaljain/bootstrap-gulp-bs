var noOfItems = 0;

var products = [
    {
        name: "Teddy Bear",
        price: 399,
        incart: 0
    },
    {
        name: "Remote-Control-Car",
        price: 1099,
        incart: 0
    },
    {
        name: "Barbie Doll",
        price: 1199,
        incart: 0
    },
    {
        name: "Blasters",
        price: 1887,
        incart: 0
    },
    {
        name: "Doll House Tent",
        price: 699,
        incart: 0
    },
    {
        name: "Hot Wheels",
        price: 799,
        incart: 0
    },
    {
        name: "Doctor Set",
        price: 349,
        incart: 0
    },
    {
        name: "Builder set",
        price: 950,
        incart: 0
    }
]

var totalCost = 0; 
var cartButtons = document.querySelectorAll(".addtocartB");
var removeButtons = document.getElementsByClassName('removebtn');

for (let i = 0; i < cartButtons.length; i++) {
    cartButtons[i].addEventListener('click', function () {
        noOfItems++;
        document.getElementsByClassName("badge")[0].innerHTML = noOfItems;
        products[i].incart++;
        totalCost = totalCost + products[i].price;
        if (noOfItems > 0)
        {
            document.getElementsByClassName('list')[0].classList.remove('none');
            document.getElementsByClassName('empty')[0].classList.add('none');
            document.getElementsByClassName('fprice')[0].innerHTML=totalCost;
            settopay();
        }
        if(products[i].incart>0)
        {
            document.getElementsByClassName('item')[i].classList.remove('none');
        }
        document.getElementsByClassName('quantity')[i].innerHTML=products[i].incart;
        document.getElementsByClassName('tprice')[i].innerHTML=products[i].incart*products[i].price;
    });
    removeButtons[i].addEventListener('click',function(){
        noOfItems=noOfItems-products[i].incart;
        totalCost=totalCost-(products[i].price*products[i].incart);
        products[i].incart=0;
        document.getElementsByClassName('item')[i].classList.add('none');
        document.getElementsByClassName("badge")[0].innerHTML = noOfItems;
        document.getElementsByClassName('fprice')[0].innerHTML=totalCost;
        // document.getElementsByClassName('fprice')[1].innerHTML=totalCost;
        settopay();
        if(noOfItems==0){
            document.getElementsByClassName('list')[0].classList.add('none');
            document.getElementsByClassName('empty')[0].classList.remove('none');
        }
    })
}
var rightcoupon="JERRY";
var flag=0;
document.getElementById('apply').addEventListener('click',function(){
    let value=document.getElementById('coupon').value;
    if(value==rightcoupon)
    {
        flag=1;
        document.getElementById('d200').innerHTML="Discount of Rs.200 Applied.";
        totalCost=totalCost-200;
        document.getElementsByClassName('fprice')[1].innerHTML=totalCost;
        totalCost=totalCost+200;
        document.getElementById('d200').classList.remove('none');
    }
    else{
        flag=0;
        document.getElementById('d200').innerHTML="Coupon Code Invalid";
        document.getElementById('d200').classList.remove('none');
        document.getElementsByClassName('fprice')[1].innerHTML=totalCost;
    }
})

function settopay()
{
    if(flag==1)
    {
        totalCost=totalCost-200;
        document.getElementsByClassName('fprice')[1].innerHTML=totalCost;
        totalCost=totalCost+200;
    }
    else{
        document.getElementsByClassName('fprice')[1].innerHTML=totalCost;
    }
}
