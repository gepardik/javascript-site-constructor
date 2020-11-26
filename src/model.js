import image from './assets/image.png'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/Blocks'

const text = 'Крутые уроки по JavascriptКрутые уроки по JavascriptКрутые уроки по JavascriptКрутые уроки по JavascriptКрутые уроки по JavascriptКрутые уроки по JavascriptКрутые уроки по Javascript'
export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493249)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'image'
    }),
    new ColumnsBlock([
            'Приложение на чистом JS без использования библиотек',
            'Узнаешь, как работают принципы SOLID и OOP за 1 курс',
            'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
        ],{
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2944a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]