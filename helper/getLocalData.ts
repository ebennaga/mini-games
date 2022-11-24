const getLocalData = () => {
    return new Promise((resolve) => {
        const tutorial: any = localStorage.getItem('tutorial');
        const banner: any = localStorage.getItem('popUpBanner');

        const localStringTutorial = JSON.parse(tutorial);
        const localStringBanner = JSON.parse(banner);

        const resData = { tutorial: localStringTutorial, banner: localStringBanner };
        resolve(resData);
    });
};

export default getLocalData;
