// Filter numbers from the string


    // function filterNumbers(str) {
    //     let filtered = str.replace(/[^0-9]/g, '');
    //     return filtered;
    // }   
    
    // console.log(filterNumbers("asdad1231asfasskadkasjdkassd4a5d45dfakdfasdfassdf5456"));


    function filterNumbers(str) {
        let filtered = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i]>=0 && str[i]<=9) {

            filtered += str[i];
        }
      
    }
    return filtered;

    }
    
    
    console.log(filterNumbers("skdfkosjf23423xokovb.v.   jv234kxfdfjg2492342okdvjd"));



