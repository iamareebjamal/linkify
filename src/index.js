import urlRegex from './regex.js'

const selector = '.linkify'
const tagSelector = '.linkify-tags'
const dataTag = 'data-post-tags'

const getAnchor = (url, css) => `<a class='${css !== undefined ? css : 'postUrl'}' href='${css !== undefined ? '/tagged/' : ''}${url}' ${css === undefined ? "target='_blank'": ''}>${url}</a>`

function linkifyElements(elements) {
    elements.each(function() {
        this.innerHTML = this.textContent.replace(urlRegex, getAnchor)
    });
}

function getElements(element) {
    let elements = null;
    if (element == undefined) {
        return $(selector)
    } else {
        return element.find(selector).addBack(selector)
    }
}

function linkify(element) {
    linkifyElements(getElements(element))
}

function linkifyTags(element) {
    const elements = getElements(element)

    elements.each(function() {
        var tags = $(this.closest(`${tagSelector}[${dataTag}]`)).attr(dataTag)

        if (tags) {
            tags = tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
            const tagRegex = new RegExp(`(?:^|[\\s,;!])(${tags.join('|')})(?=[\\s\\.,;!]|$)`, 'ig')
            
            this.innerHTML = this.innerHTML.replace(tagRegex, (extra, match) => {
                return extra.replace(match, getAnchor(match, 'postKeyword'))
            })
        }
    })
}

$.fn.linkify = function(options) {
    const settings = $.extend({
        bare: false,
        tags: false
    }, options);

    if (settings.bare) {
        linkifyElements(this)
    } else {
        linkify(this)
    }

    if (settings.tags) {
        linkifyTags(this)
    }

    return this;
}

export default {
    linkify,
    getAnchor
}