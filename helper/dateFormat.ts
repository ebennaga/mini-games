const dateFormat = (date: any) => {
    const toDate = new Date(date);
    let month = `${toDate.getMonth() + 1}`;
    let day = `${toDate.getDate()}`;
    const year = toDate.getFullYear();

    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    return [year, month, day].join('-');
};

export default dateFormat;
