//Assignments

/*👋 Hey! Did you like the assignments for the previous sections? We have some more for you; this time it's all about books 📕📗📘

Below you can find data used in the assignments;

It's an array of books related to computer science, math and business;

Each book is represented by an object;

Missing properties, different data types for same properties or duplicates are intentional;

Copy this data to your code editor, and give yourself some time to familiarize with it before you start working on assignments.
*/

// GOOD luck and have Function

const books = [
    {
        title: 'Algorithms',
        author:['Robert sedgewick', 'Kevin Wayne'],
        publisher:'Addison-Wesley Professional',
        PublicationDate: '2011-03-24',
        edition: 4,
        keyWords:['Computer science', 'programming', 'algorithms', 'dataStructures', 'math', 'software', 'engineering'],
        pages:976,
        format:'hardcover',
        ISBN:'9780321573513',
        labguage:'English',
        programmingLanguage:'Java',
        onlineContent:true,
        thirdParty:{
            goodreads:{
                rating:4.14,
                ratingsCount:1733,
                reviewCount:63,
                fiveStartRating:976,
                oneStarRatingCount:13

            }
        },
        highlighted:true

    },
    {
        title: 'Structure and Interpretation of computer Programs',
        author:['Harold Abelson', 'Gerald jay Sussman', 'Julie Sussan(Contributor)'],
        publisher: 'The MIT Press',
        PublicationDate:'2022=-04-12',
        edition:2,
        keyWords:['Computer science', 'programming', 'javascript', 'software','engineering'],
        pages:640,
        format:'paperback',
        ISBN:'9780262543231',
        language:'English',
        programmingLanguage:'Javascript',
        onlineContent: false,
        thirdParty:{
            goodreads:{
                rating:4.36,
                ratingsCount:14,
                reviewCount:3,
                fiveStartRatingCount:8,
                oneStarRatingCount:0
            }
        },
        highlighted:true
    },
    {
        title:'Computer Systems: A Programmer\'s Perspective',
        author:['Randal E. Bryant', "David Richard O\ 'Hallaron'"],
        publisher: 'Prentice Hall',
        PublicationDate:'2002-01-01',
        edition:1,
        keyWords:['computer science','computer systems', 'programming', 'software','C', 'engineering'],
        pages:978,
        format:'hardcover',
        ISBN:'9780130340740',
        language:'English',
        programmingLanguage:'C',
        onlineContent:false,
        thirdParty:{
            goodreads:{
                rating:4.44,
                ratingsCount:1010,
                reviewCount:57,
                fiveStartRatingCount:638,
                oneStarRatingCount:16
            }
        },
        highlighted:true
    },
    {
        title:'Operating System Concepts',
        author:['Abraham Silberschatz','Peter B. Galvin','Greg Gagne'],
        publisher:'John Willey & Sons',
        PublicationDate:'2004-12-14',
        edition:10,
        keyWords:['Computer science', 'operating systems', 'programming', 'software', 'C' , 'JAVA', 'engineering'],
        pages:921,
        format:'hardcover',
        ISBN:'9780471694663',
        language: 'C, java',
        onlineContent: false,
        thirdParty:{
            goodreads:{
                rating:3.9,
                ratingsCount:2131,
                reviewCount:114,
                fiveStartRatingCount:278,
                oneStarRatingCount:65
            }
        }
    },
    {
        title:'Engineering MAthmatics',
        author:['K.A. Stroud', 'Dexter J. Booth'],
        publisher:'Palgrave',
        PublicationDate:'2007-01-01',
        edition:14,
        keyWords:['mathematics', 'engineering'],
        pages:1288,
        format:'paperback',
        ISBN: '9781403942463',
        language:'English',
        programmingLanguage:null,
        onlineContent:true,
        thirdParty:{
            goodreads:{
                rating:4.35,
                ratingsCount:370,
                reviewCount:18,
                fiveStartRatingCount:211,
                oneStarRatingCount:6
            }
        },
        highlighted:true
    },
    {
        title:'the personal MBA : Master the Art of Business',
        author:'Josh kaufman',
        publisher:'portfolio',
        PublicationDate:'2010-12-30',
        keyWords: ['business'],
        pages:416,
        format:'hardcover
    }
]