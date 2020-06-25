var number = [4,9,6,8,7];
    var n= number.length
        var i, j, a, n;
        
        for (i = 0; i < n; ++i) 
        {
            for (j = i + 1; j < n; ++j) 
            {
                if (number[i] < number[j]) 
                {
                    a = number[i];
                    number[i] = number[j];
                    number[j] = a;
                }
            }
        }
 
        for (i = 0; i < n; ++i) 
        {
            console.log( number[i]);
            
        }
 
    