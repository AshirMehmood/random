const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
    order:function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
    orderDelivery:function({starterIndex,mainIndex,time,address}){
      console.log(`order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} delivered to ${address} at ${time}`);
    }
  };

  // array destructuring
  
  const arr=[2,3,4];
  const a=arr[0];
  const b=arr[1];
  const c=arr[2];
  const [x,y,z]=arr;
  console.log(x,y,z);
  let [main,secondary]=restaurant.categories
  console.log(main,secondary);
  [main,secondary]=[secondary,main];
  console.log(main,secondary);
  // recieve two return values from a function
  let[second,mainOrder] = restaurant.order(2,0);
  console.log(second,mainOrder);
  const nested=[1,2,[5,6]];
  //const [i,,j]=nested;
  //console.log(i,j);
  const [i,j,[k,l]]=nested;
  console.log(i,j,k,l);
  // deafult values
  const [p=1,q=2,r=3]=[8,9];
  console.log(p,q,r);

  // destructuring objects

  const {name,openingHours,categories}=restaurant;
  console.log(name,openingHours,categories);
  //custom names
  const{name:restaurantName,openingHours:timings,categories:menu}=restaurant;
  console.log(restaurantName,timings,menu);
  const{Menu=[],starterMenu:starters=[]}=restaurant;
  console.log(Menu,starters);
 // changing variables
 let A=111;
 let B=999;
 const obj={A:12,B:7,C:5};
 ({A,B}=obj);
 console.log(A,B);
restaurant.orderDelivery({starterIndex:1,mainIndex:2,time:'9:00',address:"apartment 1,ny"});

