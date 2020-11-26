import {col, css, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }
    toHtml() {
        throw new Error('Метод toHtml() должен быть реализован')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const style = this.options.styles
        return row(col(`<p>${this.value}</p>`), css(style))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const styles = this.options.styles
        const html = this.value.map(item => col(item)).join('')   //item => col(item)
        return row(html, css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {styles, imageStyles: is, alt = ''} = this.options
        return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}"/>`, css(styles))
    }
}