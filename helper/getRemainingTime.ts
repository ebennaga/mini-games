const getRemainingTimes = (date: any) => {
    try {
        let delta = Math.abs(new Date(date).valueOf() - new Date().valueOf()) / 1000;

        const days = Math.floor(delta / 86400);
        delta -= days * 86400;

        const hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        const minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        if (new Date(date).toISOString() > new Date().toISOString()) {
            return `${days}d ${hours}h ${minutes}m`;
        }
        return `-${days}d ${hours}h ${minutes}m`;
    } catch (err: any) {
        return err.message;
    }
};

export default getRemainingTimes;
