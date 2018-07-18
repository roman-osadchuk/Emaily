const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;

export default (emails) => {
    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => emailRegEx.test(email) === false);

    if (invalidEmails.length) {
        return `These emails are invalid ${invalidEmails}`;
    }

    return;
};
