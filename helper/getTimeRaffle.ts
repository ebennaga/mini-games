const getRemainingTimes = (date: any, end: any) => {
    try {
        const arrSpace = String(date)[10] === 'T' ? String(date).split('T') : String(date).split(' ');
        const arrHour: any = arrSpace[1].split(':');

        const currentDate: any = new Date(end);
        const seconds: any = Math.floor((new Date(date).valueOf() - new Date().valueOf()) / 1000);
        const currentDay = Math.floor(seconds / 86400);
        let currentHour = currentDate.getHours();
        const timeArr = currentDate.toLocaleTimeString().split(' ');
        if (timeArr[1] === 'AM') {
            const hourInArr = timeArr[0].split(':')[0];
            currentHour = Number(hourInArr) * 2;
        }

        const currentMinute = currentDate.getMinutes();

        let resultHour = Number(arrHour[0]) - Number(currentHour);
        if (arrHour[0] === '00') {
            resultHour = 24 - Number(currentHour) - 1;
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
