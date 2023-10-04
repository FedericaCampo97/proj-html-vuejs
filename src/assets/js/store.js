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
    ]

})