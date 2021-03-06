'use strict';

const validateInputs = (mood) => {

    const validateMood_id = (!mood.mood_id || isNaN(mood.mood_id) || mood.mood_id < 0 || mood.mood_id > 6);
    const validateForEmpty = (!mood.icon) || (!mood.date) || (!mood.time);
    const validateTimestamp = (!mood.timestamp || isNaN(mood.timestamp) || mood.timestamp.toString().length !== 14);
    const validateCreatedat = (!mood.createdat || isNaN(mood.createdat) || mood.createdat.toString().length !== 14);

    if ((!mood) || (validateMood_id) || (validateForEmpty) || validateTimestamp || validateCreatedat) {
        res.redirect('/oops');
    }
}

module.exports = validateInputs;