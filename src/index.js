import urlRegex from './regex.js'

const selector = '.linkify'

const getAnchor = url => `<a class='postUrl' href='${url}'' target='_blank'>${url}</a>`

function linkifyElements(elements) {
    elements.each(function() {
        this.innerHTML = this.textContent.replace(urlRegex, getAnchor)
    });
}

function linkify(element) {
    let elements = null;
    if (element == undefined) {
        elements = $(selector)
    } else {
        elements = element.find(selector).addBack(selector)
    }

    linkifyElements(elements)
}

$.fn.linkify = function(bare) {
    if (bare) {
        linkifyElements(this)
    } else {
        linkify(this)
    }

    return this;
}

export default {
    linkify,
    getAnchor
}