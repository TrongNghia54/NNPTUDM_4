module.exports = {
    ConvertTitleToSlug: function (title) {
        if (!title) return '';
        // to lower case
        let result = String(title).toLowerCase();
        // remove accents/diacritics (e.g., tiếng Việt)
        result = result.normalize('NFD').replace(/\p{Diacritic}/gu, '');
        // map Vietnamese 'đ' to 'd'
        result = result.replace(/đ/g, 'd');
        // replace any non-alphanumeric characters with hyphen
        result = result.replace(/[^a-z0-9]+/g, '-');
        // remove leading/trailing hyphens
        result = result.replace(/^-+|-+$/g, '');
        return result;
    }
}
