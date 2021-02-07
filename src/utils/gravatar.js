import md5 from 'md5'

const gravatar = (email) => {
    const base = 'https://gravatar.com/avatar/';
    const formateEmail =(email).trim().toLowerCase();
    const hash = md5(formateEmail, { encoding: "binary"});
    return `${base}${hash}`
}

export default gravatar;