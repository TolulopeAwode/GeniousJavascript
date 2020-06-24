iterate=(a,b)=>{
    let prod=1;
    for(let count=0; count<b; count++){
      prod = prod * a;
    }
      return prod;
    }
    console.log(iterate(2,3));
    
    
    
    /*
     concat() This method returns a new array object which contains two or more merged arrays. ...
    join() This method joins the array elements as a string.
    pop() This method is used to remove and return the last element of an array.
    push() ...
    reverse() ...
    shift() ...
    slice() ...
    sort()
     */
    let val=[[2,4],[5,6]];
    let names=['Tolulope', 'Kolawole','Atinuke','Joy']
    let surname=['Awojide','Ologunde','Ajilete']
    //let newname=names.slice(1);
    let newname=names.concat(surname);
    console.log(val);
    //console.log(names[names.length-1]);
    
    
    // printwelcome=(name)=> console.log('Welcome Mr '+name);
    // let names=['Tolulope', 'Kolawole','Atinuke','Joy']
    // let surname=['Awojide','Ologunde','Ajilete']
    // let newname=names.concat(surname);
    // console.log('**********************************');
    // newname.map(x=>printwelcome(x));
    // //newname.map(printwelcome);