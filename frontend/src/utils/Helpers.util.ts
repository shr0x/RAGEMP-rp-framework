export const regExp = {
    nickname: /[^A-Za-z]/,
    mail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line
    number: /\D/,
    text: /[^a-zA-Zа-яёА-ЯЁ ]/u,
    money: /(\d)(?=(\d{3})+(\D|$))/g
};