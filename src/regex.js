const auth = '(?:(\\S+)(?::\\S*)?@)?';
const hostname = '(?:[a-z\\d\\u00a1-\\uffff_-]+\\.)+';
const port = '(?::([0-9]+))?';
const query = '([/?#]\\S*)?)';
const tlds = '(com|in|io|org|edu|gov|net|name|pro|info|xyz|aero|app|arpa|biz|br|cat|coop|uk|ca|cn|de|jobs|jp|fr|au|us|ru|ch|it|nl|se|no|me|es|mil)';

const compiled = `(?:(((?:(?:https?|ftp):\/\/)|(?:www.))${auth}(${hostname}([a-z\\d\\u00a1-\\uffff]{1,8}))${port}${query}|(${auth}(${hostname}${tlds})${port}${query})(?=\\s|$|[,;()\\.])`;

export default new RegExp(compiled, 'ig');
