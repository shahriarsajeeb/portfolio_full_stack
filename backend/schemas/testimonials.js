export default {
    name: 'testimonials',
    title:'Testimonials',
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
            options:{
                hotspot: true,
            }
        },
    ]
}