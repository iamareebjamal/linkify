import urlRegex from './regex.js'

const selector = '.linkify'

const linkify = url => `<a class='postUrl' href='${url}'' target='_blank'>${url}</a>`

function convertElements(elements) {
    elements.each(function() {
        this.innerHTML = this.textContent.replace(urlRegex, linkify)
    });
}

function convert(element) {
    let elements = null;
    if (element == undefined) {
        elements = $(selector)
    } else {
        elements = element.find(selector).addBack(selector)
    }

    convertElements(elements)
}

$.fn.linkify = function(bare) {
    if (bare) {
        convertElements(this)
    } else {
        convert(this)
    }

    return this;
}

export default {
    linkify,
    convert
}