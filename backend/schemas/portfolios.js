export default {
    name: 'portfolios',
    title:'Portfolios',
    type: 'document',
    fields:[
        {
           name: 'title',
           title:'Title',
           type: 'string',
        },
        {
            name:"description",
            title:"Description",
            type: 'string',
        },
        {
            name:"imageUrl",
            title:"ImgUrl",
            type: 'image',
        },
        {
            name:"liveurl",
            title:"Live-Url",
            type: 'string',
        }
    ]
}