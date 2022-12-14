const getRemainingTimes = (date: any) => {
    try {
        const dateToLocale = new Date(date).toLocaleString('en-US');
        const arrSpace = String(dateToLocale)[10] === 'T' ? String(dateToLocale).split('T') : String(dateToLocale).split(' ');
        const arrHour: any = arrSpace[1].split(':');

        const currentDate: any = new Date();
        const seconds: any = Math.floor((new Date(dateToLocale).valueOf() - new Date().valueOf()) / 1000);
        const currentDay = Math.floor(seconds / 86400);
        let currentHour = currentDate.getHours();
        const timeArr = currentDate.toLocaleTimeString().split(' ');

        if (timeArr[1] === 'AM') {
            const hourInArr = timeArr[0].split(':')[0];
            if (arrSpace[1] === '12:00:00') {
                currentHour = Number(hourInArr) * 2 + 2;
            } else {
                currentHour = Number(hourInArr);
            }
        }

        const currentMinute = currentDate.getMinutes();

        let resultHour = Number(arrHour[0]) - Number(currentHour);
        if (arrHour[0] === '00') {
            resultHour = 24 - Number(currentHour) - 1;
        }

        if (timeArr[1] === 'PM') {
            if (arrSpace[2] === 'PM') {
                resultHour = 24 - Number(arrHour[0]) - currentHour - 1;
            } else {
                resultHour = Number(arrHour[0]) - currentHour - 1;
            }
        }
        if (timeArr[1] === 'AM') {
            if (arrSpace[2] === 'PM') {
                resultHour = 24 - Number(arrHour[0]) - currentHour - 1;
            } else {
                resultHour = Number(arrHour[0]) - currentHour - 1;
            }
        }

        let resMinute = currentMinute;

        if (arrHour[1] === '00') {
            resMinute = 60 - Number(currentMinute);
        }
        if (String(arrHour[1]) === String(currentMinute)) {
            resMinute = 0;
            resultHour += 1;
        }
        if (Number(arrHour[1] > Number(currentMinute))) {
            resMinute = Number(arrHour[1]) - Number(currentMinute);
        }
        if (Number(arrHour[1] < Number(currentMinute))) {
            resMinute = 60 - Number(currentMinute) + Number(arrHour[1]);
        }

        if (resMinute > Number(arrHour[1])) {
            if (Number(resultHour) === 0 && Number(arrHour[0]) === currentHour) {
                resultHour = 24 - 1;
            }
            if (Number(arrHour[0]) - currentHour === 1) {
                resultHour = 0;
            }
        }
        if (resultHour < 0) {
            resultHour = (-23 - resultHour) * -1;
        }

        return `${currentDay}d ${resultHour}h ${resMinute}m`;
    } catch (err: any) {
        return err.message;
    }
};

export default getRemainingTimes;
