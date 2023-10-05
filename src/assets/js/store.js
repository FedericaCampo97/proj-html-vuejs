import { reactive } from "vue";

export const store = reactive({
    listNav: [
        {
            text: 'HOME',
            active: true,
        },
        {
            text: 'MISSION',
            active: false,
        },
        {
            text: 'CAUSES',
            active: false,
        },
        {
            text: 'JOURNAL',
            active: false,
        }
    ],
    imgRecentCauses: [
        'HelloIMG1669149317319.jpeg', 'HelloIMG1669149318263.jpeg', 'HelloIMG1669149319450.jpeg', 'HelloIMG1669149321401.jpeg'
    ],
    listCards: [
        {
            img: 'people.jpg',
            title: 'The human story of uniqueness',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem hic autem iur assumenda aliquam.'
        },
        {
            img: '1.jpg',
            title: 'Sustainable trade tactics',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem hic autem iur assumenda aliquam.'
        },
        {
            img: 'person.jpg',
            title: 'Farmers making a difference',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem hic autem iur assumenda aliquam.'
        },
        {
            img: 'person2.jpg',
            title: 'Meeting remote tribes in Peru',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem hic autem iur assumenda aliquam.'
        }
    ]

})