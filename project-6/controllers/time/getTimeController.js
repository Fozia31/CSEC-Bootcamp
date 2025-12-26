const getTimeController = (req, res) => {
    const currentTime = new Date();
    res.json({
        message: 'Current server time is',
        time: currentTime
    });
};

export default getTimeController;
