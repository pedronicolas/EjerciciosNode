export const PI = 3.141592;


let _sqrt = (s,x,last) =>{
    return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};


export const sqrt = s =>{
    return _sqrt(s,s/2.0,0.0);
};

export const square = x =>{
    return x*x;
}

