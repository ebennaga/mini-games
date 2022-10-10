const getLocalData = () => {
    return new Promise((resolve) => {
        const local: any = localStorage.getItem('tutorial');
        const localString = JSON.parse(local);
        resolve(localString);
    });
};

export default getLocalData;
