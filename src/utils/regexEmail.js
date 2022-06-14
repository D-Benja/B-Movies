export const regexEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const expRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    return expRegex.test(email);
}

