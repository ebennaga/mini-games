const changeFormatDate = (date: any) => {
    const day = date?.slice(8, 10);
    const year = date?.slice(2, 4);
    const month = new Date(date);
    month.setMonth(Number(date?.slice(5, 7)) - 1);
    const monthStr = month.toLocaleString('en-US', {
        month: 'short'
    });
    return `${day} ${monthStr} ${year}`;
};

export default changeFormatDate;
