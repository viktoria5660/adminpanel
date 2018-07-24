const db = require('./helpers/database')
const QuestionModel = require('./models/Question')


let question = new QuestionModel({
    content: 'test15?',
    template: 1,
    picture: 'pic.jpeg',
    difficulty: 1,
    company : "test",
    groups:  [ "test" ],
    answers:[{
        content  : 'Podales ut accumsan ac',
        feedback  : 'Phasellus ipsum elit',
        iscorrect  : false

    },
    {
        content  : 'Aipsum elit feugiat odio',
        feedback  : ' Orci varius natoque ',
        iscorrect  : true

    },
    {
        content  : 'Proin tempus leo nisl',
        feedback  : ' Nunc Proin tempus ',
        iscorrect  : false

    },
    {
        content  : 'Mhnec sapien ermentum suscipitor ',
        feedback  : ' Wsemper ermentum suscipit tellus',
        iscorrect  : false

    }
    ]
})

question.save()
    .then(doc => {
        console.log(doc)
    })