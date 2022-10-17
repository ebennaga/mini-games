const getMinuteSecond = (second: number) => {
    let minutes: any = 0;
    let seconds: any = 0;

    const getMinutes = Math.floor(second / 60);
    const getSeconds = second % 60;

    if (getMinutes > 0 && getMinutes < 10) {
        minutes = `0${getMinutes}`;
    } else if (getMinutes === 0) {
        minutes = '00';
    } else {
        minutes = getMinutes;
    }

    if (getSeconds > 0 && getSeconds < 10) {
        seconds = `0${getSeconds}`;
    } else if (getSeconds === 0) {
        seconds = '00';
    } else {
        seconds = getSeconds;
    }

    return `${minutes}:${seconds}`;
};

export default getMinuteSecond;
