function Day() {

    let today = new Date()
    //date
    let dd = today.getDate()
    let mm = today.getMonth();
    let monthNames = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টবর', 'নভেম্ভর', 'ডিসেম্বর']
    let yy = today.getFullYear()
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    //day
    let day = today.getDay()
    let dayList = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার']
    let dayMonthYear = dayList[day] + " , " + dd + monthNames[today.getMonth()] + " , " + yy;
    document.getElementById('day').innerHTML = replaceNumbers(dayMonthYear)

//    time

    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    let Bela = null;
    let prepend = (hour >= 12) ? "PM" : "AM"
    hour = (hour >= 12) ? hour - 12 : hour;

    if (hour >= 4 && hour < 7 && prepend === 'AM') {
        Bela = 'ভোর'
    }

    if (hour >= 7 && hour < 10 && prepend === 'AM') {
        Bela = 'সকাল'
    }
    if (hour >= 10 && hour < 12 && prepend === 'AM') {
        Bela = 'বেলা'
    }
    if (hour >= 12 && hour < 3 && prepend === 'PM') {
        Bela = 'দুপুর'
    }
    if (hour >= 3 && hour < 6 && prepend === 'PM') {
        Bela = 'বিকাল'
    }
    if (hour >= 6 && hour < 8 && prepend === 'PM') {
        Bela = 'সন্ধ্যা'
    }
    if (hour >= 8 && hour < 12 && prepend === 'PM') {
        Bela = 'রাত'
    }
    if (hour >= 12 && hour < 4 && prepend === 'AM') {
        Bela = 'রাত'
    }

    if (hour < 10) {
        hour = "0" + hour
    }
    if (minute < 10) {
        minute = "0" + minute
    }

    let timeResult = Bela + "&nbsp; &nbsp;" + hour + ' : ' + minute
    document.getElementById('time').innerHTML = replaceNumbers(timeResult)


//outputs : ১২৩৪৫৬


}


var numbers = {
    0: '০',
    1: '১',
    2: '২',
    3: '৩',
    4: '৪',
    5: '৫',
    6: '৬',
    7: '৭',
    8: '৮',
    9: '৯'
};

function replaceNumbers(input) {
    var output = [];
    for (var i = 0; i < input.length; ++i) {
        if (numbers.hasOwnProperty(input[i])) {
            output.push(numbers[input[i]]);
        } else {
            output.push(input[i]);
        }
    }
    return output.join('');
}


setInterval(() => {
    Day()
}, 1000)