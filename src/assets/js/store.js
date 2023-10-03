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
    ]
})