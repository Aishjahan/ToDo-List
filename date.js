
exports.getDate=function (){
    let today=new Date();
    let currentDay=today.getDay();
    var day="";

    const options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    return today.toLocaleDateString("en-US",options);

}

exports.getDay=function (){
    let today=new Date();
    let currentDay=today.getDay();
    var day="";

    const options={
        weekday:"long"
    };

    return today.toLocaleDateString("en-US",options);
}
