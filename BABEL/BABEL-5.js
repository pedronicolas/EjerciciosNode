var arg1 = process.argv[2];
    var arg2 = process.argv[3];

    import PI from './MATH-2';
    import sqrt from './MATH-2';
    import square from './MATH-2';
    console.log(PI);
    console.log(sqrt(+arg1));
    console.log(square(+arg2));