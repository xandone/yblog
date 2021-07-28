const API_ROOT = '//xandone.pub/yblog';
let API_ROOT_DEV = '//localhost/';

const baseImgPath = '/img/';

let baseUrl = (process.env.NODE_ENV === 'production' ? API_ROOT : API_ROOT_DEV)

const TOP_BAR_INDEX_KEY = 'top_bar_index_key';
const VISITOR_INFO_KEY = 'visitor_info_key';

export {
    baseUrl,
    baseImgPath,
    TOP_BAR_INDEX_KEY,
    VISITOR_INFO_KEY
}